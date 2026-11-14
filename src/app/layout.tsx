import React from 'react';
import type { Metadata } from 'next';

// Localization
import { NextIntlClientProvider } from 'next-intl';
import { getLocale, getMessages, getTranslations } from 'next-intl/server';

// Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import type { Locale } from '@/i18n/config';

// Style
import './globals.css';
import { Hanken_Grotesk } from 'next/font/google';
import { ThemeProvider } from 'next-themes';

const hanken = Hanken_Grotesk({
    subsets: ['latin'],
    variable: '--font-sans',
    display: 'swap',
});

export async function generateMetadata(): Promise<Metadata> {
    const t = await getTranslations('Meta');
    return {
        title: t('title'),
        description: t('description'),
    };
}

export default async function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const locale = await getLocale();
    const messages = await getMessages();
    const t = await getTranslations('Navbar');

    return (
        <html
            lang={locale}
            className={hanken.variable}
            suppressHydrationWarning
        >
            <head>
                <meta
                    name="theme-color"
                    content="#ffffff"
                    media="(prefers-color-scheme: light)"
                />
                <meta
                    name="theme-color"
                    content="#0f1110"
                    media="(prefers-color-scheme: dark)"
                />
            </head>
            <body>
                <a
                    href="#main"
                    className="fixed left-4 top-3 z-[60] -translate-y-24 rounded-full bg-ink px-4 py-2 text-bg focus:translate-y-0"
                >
                    {t('skip')}
                </a>
                {/* next-themes sets the theme class on <html> before React hydrates */}
                <ThemeProvider attribute="class">
                    <NextIntlClientProvider messages={messages}>
                        <Navbar initialLocale={locale as Locale} />
                        <main id="main" tabIndex={-1} className="outline-none">
                            {children}
                        </main>
                        <Footer />
                    </NextIntlClientProvider>
                </ThemeProvider>
            </body>
        </html>
    );
}
