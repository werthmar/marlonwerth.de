'use client';

import React, { useState } from 'react';
import ReactCountryFlag from 'react-country-flag';
import { FaCaretDown } from 'react-icons/fa';

import { Locale } from '@/i18n/config';

const languages: { code: Locale; label: string; flag: string }[] = [
    { code: 'en', label: 'English', flag: 'GB' },
    { code: 'es', label: 'Español', flag: 'ES' },
    { code: 'de', label: 'Deutsch', flag: 'DE' },
];

interface LanguageSwitcherProps {
    currentLocale: Locale;
    onSelectLocale: (locale: Locale) => void;
}

export default function LanguageSwitcher({
    currentLocale,
    onSelectLocale,
}: LanguageSwitcherProps) {
    const [isOpen, setIsOpen] = useState(false);

    const currentLanguage =
        languages.find((lang) => lang.code === currentLocale) || languages[0];

    const toggleDropdown = () => setIsOpen(!isOpen);

    const selectLanguage = (lang: {
        code: Locale;
        label: string;
        flag: string;
    }) => {
        setIsOpen(false);
        onSelectLocale(lang.code);
    };

    return (
        <div className="relative inline-block text-left">
            <button
                className="flex w-full items-center justify-between rounded-md p-2"
                onClick={toggleDropdown}
            >
                <span className="flex items-center">
                    <div style={{ width: '2em', height: '2em' }}>
                        <ReactCountryFlag
                            countryCode={currentLanguage.flag}
                            svg
                            style={{
                                width: '100%',
                                height: '100%',
                            }}
                            title={currentLanguage.label}
                        />
                    </div>
                </span>
                <FaCaretDown className="ml-2" />
            </button>

            {isOpen && (
                <div className="absolute bottom-full z-50 mb-1 w-40 origin-bottom-right rounded-md bg-background shadow-lg ring-1 ring-black ring-opacity-5 lg:bottom-auto lg:mt-1 lg:origin-top-right">
                    <div className="py-1">
                        {languages
                            .filter((lang) => lang.code !== currentLocale)
                            .map((lang) => (
                                <button
                                    key={lang.code}
                                    onClick={() => selectLanguage(lang)}
                                    className="block w-full px-4 py-2 text-left hover:bg-foreground hover:text-background"
                                >
                                    <ReactCountryFlag
                                        countryCode={lang.flag}
                                        svg
                                        style={{
                                            width: '1.5em',
                                            height: '1.5em',
                                        }}
                                        title={lang.label}
                                    />
                                    &nbsp; {lang.label}
                                </button>
                            ))}
                    </div>
                </div>
            )}
        </div>
    );
}
