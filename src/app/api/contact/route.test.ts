import { NextRequest } from 'next/server';
import nodemailer from 'nodemailer';
import { POST } from './route';

jest.mock('nodemailer');

const mockedNodemailer = nodemailer as jest.Mocked<typeof nodemailer>;

function buildRequest(body: unknown) {
    return new NextRequest('http://localhost/api/contact', {
        method: 'POST',
        body: JSON.stringify(body),
        headers: { 'Content-Type': 'application/json' },
    });
}

const validPayload = {
    name: 'Jane Doe',
    email: 'jane@example.com',
    subject: 'Hello',
    message: 'This is a test message.',
};

describe('POST /api/contact', () => {
    let sendMail: jest.Mock;

    beforeEach(() => {
        sendMail = jest.fn().mockResolvedValue(true);
        mockedNodemailer.createTransport.mockReturnValue({
            sendMail,
        } as unknown as ReturnType<typeof nodemailer.createTransport>);
    });

    afterEach(() => {
        jest.clearAllMocks();
    });

    it.each(['name', 'email', 'subject', 'message'] as const)(
        'returns 400 when %s is missing',
        async (field) => {
            const payload: Record<string, string> = { ...validPayload };
            delete payload[field];

            const response = await POST(buildRequest(payload));

            expect(response.status).toBe(400);
            expect(await response.json()).toEqual({
                error: 'All fields are required',
            });
            expect(sendMail).not.toHaveBeenCalled();
        }
    );

    it.each([
        ['the body is not JSON', 'not json'],
        ['the body is JSON null', 'null'],
        [
            'a field is not a string',
            JSON.stringify({ ...validPayload, message: 5 }),
        ],
        [
            'a field is only whitespace',
            JSON.stringify({ ...validPayload, name: '   ' }),
        ],
    ])('returns 400 when %s', async (_, body) => {
        const response = await POST(
            new NextRequest('http://localhost/api/contact', {
                method: 'POST',
                body,
            })
        );

        expect(response.status).toBe(400);
        expect(sendMail).not.toHaveBeenCalled();
    });

    it('escapes HTML from the form in the HTML email', async () => {
        await POST(
            buildRequest({
                ...validPayload,
                name: '<img src=x onerror=alert(1)>',
                message: '<a href="https://evil.test">click</a>\nbye',
            })
        );

        const { html, text } = sendMail.mock.calls[0][0];
        expect(html).not.toContain('<img');
        expect(html).not.toContain('<a href');
        expect(html).toContain('&lt;img src=x onerror=alert(1)&gt;');
        expect(html).toContain('&lt;/a&gt;<br>bye');
        // The plain-text part stays readable as typed
        expect(text).toContain('<img src=x onerror=alert(1)>');
    });

    it('sends the email and returns 200 on valid input', async () => {
        const response = await POST(buildRequest(validPayload));

        expect(mockedNodemailer.createTransport).toHaveBeenCalledWith(
            expect.objectContaining({
                host: process.env.SMTP_HOST,
                port: Number(process.env.SMTP_PORT),
            })
        );
        expect(sendMail).toHaveBeenCalledWith(
            expect.objectContaining({
                subject: `Contact Form: ${validPayload.subject}`,
                html: expect.stringContaining(validPayload.name),
                text: expect.stringContaining(validPayload.email),
            })
        );
        expect(response.status).toBe(200);
        expect(await response.json()).toEqual({
            message: 'Email sent successfully',
        });
    });

    it('returns 500 when sending the email fails', async () => {
        sendMail.mockRejectedValue(new Error('SMTP down'));
        jest.spyOn(console, 'error').mockImplementation(() => {});

        const response = await POST(buildRequest(validPayload));

        expect(response.status).toBe(500);
        expect(await response.json()).toEqual({
            error: 'Failed to send email',
        });
    });
});
