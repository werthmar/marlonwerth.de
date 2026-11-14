import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

const FIELDS = ['name', 'email', 'subject', 'message'] as const;
type ContactForm = Record<(typeof FIELDS)[number], string>;

// Form input goes into an HTML email, so it must not be able to add markup.
function escapeHtml(value: string) {
    return value
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#39;');
}

async function readForm(request: NextRequest): Promise<ContactForm | null> {
    const body = await request.json().catch(() => null);
    if (typeof body !== 'object' || body === null) return null;
    const valid = FIELDS.every(
        (field) => typeof body[field] === 'string' && body[field].trim() !== ''
    );
    return valid ? (body as ContactForm) : null;
}

export async function POST(request: NextRequest) {
    const form = await readForm(request);
    if (!form) {
        return NextResponse.json(
            { error: 'All fields are required' },
            { status: 400 }
        );
    }
    const { name, email, subject, message } = form;
    const html = Object.fromEntries(
        FIELDS.map((field) => [field, escapeHtml(form[field])])
    ) as ContactForm;

    try {
        // Create transporter (you'll need to configure this with your email provider)
        const transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST,
            port: parseInt(process.env.SMTP_PORT || '587'),
            secure: false, // true for 465, false for other ports
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASS,
            },
        });

        // Email content
        const mailOptions = {
            from: process.env.SMTP_FROM || process.env.SMTP_USER,
            to: process.env.CONTACT_EMAIL,
            subject: `Contact Form: ${subject}`,
            html: `
                <h2>New Contact Form Submission</h2>
                <p><strong>Name:</strong> ${html.name}</p>
                <p><strong>Email:</strong> ${html.email}</p>
                <p><strong>Subject:</strong> ${html.subject}</p>
                <p><strong>Message:</strong></p>
                <p>${html.message.replace(/\n/g, '<br>')}</p>
                <hr>
                <p><small>Sent from your website (www.hire-marlon.de) contact form</small></p>
            `,
            text: `
                New Contact Form Submission

                Name: ${name}
                Email: ${email}
                Subject: ${subject}

                Message:
                ${message}

                ---
                Sent from your website (www.hire-marlon.de) contact form
            `,
        };

        // Send email
        await transporter.sendMail(mailOptions);

        return NextResponse.json(
            { message: 'Email sent successfully' },
            { status: 200 }
        );
    } catch (error) {
        console.error('Error sending email:', error);
        return NextResponse.json(
            { error: 'Failed to send email' },
            { status: 500 }
        );
    }
}
