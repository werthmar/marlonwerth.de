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
