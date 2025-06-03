'use client';

import React, { useState, useEffect } from 'react';
import { FaCog, FaSun, FaMoon } from 'react-icons/fa';
import ReactCountryFlag from 'react-country-flag';
import { setUserLocale } from '@/services/locale';
import { Locale } from '@/i18n/config';

// Define languages with country codes for flags
const languages: { code: Locale; label: string; flag: string }[] = [
    { code: 'en', label: 'English', flag: 'GB' },
    { code: 'es', label: 'Español', flag: 'ES' },
    { code: 'de', label: 'Deutsch', flag: 'DE' },
];

interface MobileSettingsProps {
    initialLocale?: string;
}

const MobileSettings: React.FC<MobileSettingsProps> = ({ initialLocale }) => {
    const [isExpanded, setIsExpanded] = useState(false);
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [animateButtons, setAnimateButtons] = useState(false);

    // Initialize theme on component mount
    useEffect(() => {
        if (typeof window !== 'undefined') {
            const storedTheme = localStorage.getItem('theme');
            const prefersDark = window.matchMedia(
                '(prefers-color-scheme: dark)'
            ).matches;

            const initialTheme = storedTheme
                ? storedTheme === 'dark'
                : prefersDark;
            setIsDarkMode(initialTheme);
            document.documentElement.classList.toggle('dark', initialTheme);
        }
    }, []);

    // Update theme when isDarkMode changes
    useEffect(() => {
        document.documentElement.classList.toggle('dark', isDarkMode);
        localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
    }, [isDarkMode]);

    const toggleExpanded = () => {
        if (!isExpanded) {
            setIsExpanded(true);
            // Trigger animation after component renders
            setTimeout(() => setAnimateButtons(true), 10);
        } else {
            setAnimateButtons(false);
            // Wait for exit animation before hiding
            setTimeout(() => setIsExpanded(false), 200);
        }
    };

    const switchLanguage = (lang: {
        code: Locale;
        label: string;
        flag: string;
    }) => {
        setUserLocale(lang.code);
        setIsExpanded(false);
    };

    const toggleTheme = () => {
        setIsDarkMode((prev) => !prev);
        setIsExpanded(false);
    };

    return (
        <div className="md:hidden fixed bottom-[calc(60px+1rem+0.5rem)] right-4 z-50">
            {isExpanded && (
                <div className="flex flex-col items-center space-y-3 mb-3">
                    {/* Language buttons */}
                    {languages.map((lang, index) => (
                        <button
                            key={lang.code}
                            onClick={() => switchLanguage(lang)}
                            className="w-12 h-12 bg-accent rounded-full shadow-lg flex items-center justify-center hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300 ease-out"
                            style={{
                                opacity: animateButtons ? 1 : 0,
                                transform: animateButtons
                                    ? 'translateY(0px) scale(1)'
                                    : 'translateY(20px) scale(0.8)',
                                transitionDelay: `${index * 50}ms`,
                            }}
                            title={lang.label}
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
                        </button>
                    ))}

                    {/* Theme toggle button */}
                    <button
                        onClick={toggleTheme}
                        className="w-12 h-12 bg-accent rounded-full shadow-lg flex items-center justify-center hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300 ease-out"
                        style={{
                            opacity: animateButtons ? 1 : 0,
                            transform: animateButtons
                                ? 'translateY(0px) scale(1)'
                                : 'translateY(20px) scale(0.8)',
                            transitionDelay: `${languages.length * 50}ms`,
                        }}
                        title={
                            isDarkMode
                                ? 'Switch to light mode'
                                : 'Switch to dark mode'
                        }
                    >
                        {isDarkMode ? (
                            <FaSun className="text-yellow-500" size={20} />
                        ) : (
                            <FaMoon className="text-blue-500" size={20} />
                        )}
                    </button>
                </div>
            )}

            {/* Main settings button */}
            <button
                onClick={toggleExpanded}
                className="w-14 h-14 bg-accent rounded-full shadow-lg flex items-center justify-center hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300 ease-out hover:scale-105"
                style={{
                    transform: isExpanded ? 'rotate(90deg)' : 'rotate(0deg)',
                }}
            >
                <FaCog className="text-foreground" size={24} />
            </button>
        </div>
    );
};

export default MobileSettings;
