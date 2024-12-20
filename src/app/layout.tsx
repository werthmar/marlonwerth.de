import React from 'react';
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

// Localization
import {NextIntlClientProvider} from 'next-intl';
import {getLocale, getMessages} from 'next-intl/server';

// Components
import Navbar from "./components/Navbar";

// Style
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


export const metadata: Metadata = {
    title: "Hire Marlon",
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
            <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>

                <NextIntlClientProvider messages={messages}>
                    <Navbar initialLocale={locale}/>
                    {children}
                </NextIntlClientProvider>
                
            </body>
        </html>
    );
}