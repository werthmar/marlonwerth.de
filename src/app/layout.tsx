'use client';

import React, { ReactNode } from 'react';
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

// Localization
import { I18nextProvider } from 'react-i18next';
import i18n from './i18next';

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

/*
export const metadata: Metadata = {
    title: "Create Next App",
    description: "Generated by create next app",
};
*/

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <I18nextProvider i18n={i18n}>
        <html lang="en">
            <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
            <Navbar />
            {children}
            </body>
        </html>
        </I18nextProvider>
    );
}