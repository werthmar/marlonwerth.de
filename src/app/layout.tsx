import React from 'react';
import type { Metadata } from 'next';

// Localization
import { NextIntlClientProvider } from 'next-intl';
import { getLocale, getMessages } from 'next-intl/server';

// Components
import Navbar from './components/Navbar';
import Template from './template';

// Style
import './globals.css';

export const metadata: Metadata = {
    title: 'Hire Marlon',
    description: "Overview of Marlon's services, projects and qualificaitons.",
};

export default async function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const locale = await getLocale();

    // Providing all messages to the client
    // side is the easiest way to get started
    const messages = await getMessages();

    return (
        <html lang={locale}>
            <body className={`antialiased`}>
                <NextIntlClientProvider messages={messages}>
                    <Navbar initialLocale={locale} />
                    <Template>{children}</Template>
                </NextIntlClientProvider>
            </body>
        </html>
    );
}
