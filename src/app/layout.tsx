import React from 'react';
import type { Metadata } from 'next';

// Localization
import { NextIntlClientProvider } from 'next-intl';
import { getLocale, getMessages } from 'next-intl/server';

// Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollDownButton from './components/ScrollDownButton';
import { ThemeProvider } from 'next-themes';

// Style
import './globals.css';
import { Inter } from 'next/font/google';
import { cn } from '@/lib/utils';
import type { Locale } from '@/i18n/config';

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' });

export const metadata: Metadata = {
    title: 'Marlon Werth',
    description: "Overview of Marlon's projects and qualifications.",
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
        // next-themes sets the theme class on <html> before React hydrates
        <html
            lang={locale}
            className={cn('font-sans', inter.variable)}
            suppressHydrationWarning
        >
            <body className={`antialiased`}>
                <ThemeProvider attribute="class" disableTransitionOnChange>
                    <NextIntlClientProvider messages={messages}>
                        <Navbar initialLocale={locale as Locale} />
                        {/* template.tsx wraps children automatically */}
                        {children}
                        <ScrollDownButton />
                        <Footer />
                    </NextIntlClientProvider>
                </ThemeProvider>
            </body>
        </html>
    );
}
