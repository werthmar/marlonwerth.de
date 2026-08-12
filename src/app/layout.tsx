import React from 'react';
import type { Metadata } from 'next';

// Localization
import { NextIntlClientProvider } from 'next-intl';
import { getLocale, getMessages } from 'next-intl/server';

// Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Template from './template';
import ScrollDownButton from './components/ScrollDownButton';
import ClientOnly from './components/ClientOnly';

// Style
import './globals.css';
import { Inter } from 'next/font/google';
import { cn } from '@/lib/utils';

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' });

export const metadata: Metadata = {
    title: 'Marlon Werth',
    description: "Overview of Marlon's projects and qualificaitons.",
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
        <html lang={locale} className={cn('font-sans', inter.variable)}>
            <body className={`antialiased`}>
                <NextIntlClientProvider messages={messages}>
                    <Navbar initialLocale={locale as 'en' | 'de' | 'es'} />
                    <Template>{children}</Template>
                    {/* Custom Wrapper to prevent use client on root layout*/}
                    <ClientOnly>
                        <ScrollDownButton />
                    </ClientOnly>
                    <Footer />
                </NextIntlClientProvider>
            </body>
        </html>
    );
}
