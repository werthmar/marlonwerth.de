'use client';

import React, { useState } from 'react';
import ReactCountryFlag from 'react-country-flag';
import { FaCaretDown } from 'react-icons/fa';

import { setUserLocale } from '@/services/locale';
import { Locale } from '@/i18n/config';

// Define languages with country codes for flags
const languages: { code: Locale; label: string; flag: string }[] = [
    { code: 'en', label: 'English', flag: 'GB' },
    { code: 'es', label: 'Español', flag: 'ES' },
    { code: 'de', label: 'Deutsch', flag: 'DE' },
];

interface LanguageSwitcherProps {
    initialLocale?: string;
}

export default function LanguageSwitcher({
    initialLocale,
}: LanguageSwitcherProps) {
    const [currentLangCode, setLangCode] = useState<string>(
        initialLocale || languages[0].code
    );
    const [isOpen, setIsOpen] = useState(false);

    const currentLanguage =
        languages.find((lang) => lang.code === currentLangCode) || languages[0];

    const toggleDropdown = () => setIsOpen(!isOpen);

    const selectLanguage = (lang: {
        code: Locale;
        label: string;
        flag: string;
    }) => {
        setIsOpen(false);
        setUserLocale(lang.code);
        setLangCode(lang.code);
    };

    return (
        <div className="relative inline-block text-left">
            <button
                className="flex items-center justify-between w-full p-2 rounded-md"
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
                    {/*&nbsp; {currentLanguage.label}*/}
                </span>
                <FaCaretDown className="ml-2" />
            </button>

            {isOpen && (
                <div className="origin-bottom-right lg:origin-top-right absolute lg:bottom-auto lg:mt-1 bottom-full mb-1 w-40 rounded-md shadow-lg bg-background ring-1 ring-black ring-opacity-5 z-50">
                    <div className="py-1">
                        {languages
                            .filter((lang) => lang.code !== currentLangCode)
                            .map((lang) => (
                                <button
                                    key={lang.code}
                                    onClick={() => selectLanguage(lang)}
                                    className="block w-full text-left px-4 py-2 hover:bg-foreground hover:text-background"
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

//export default LanguageSwitcher;
