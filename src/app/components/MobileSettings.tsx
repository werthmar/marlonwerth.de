'use client';

import React, { useState, useEffect, useRef } from 'react';
import { FaCog, FaSun, FaMoon } from 'react-icons/fa';
import ReactCountryFlag from 'react-country-flag';
import { useTranslations } from 'next-intl';
import { setUserLocale } from '@/services/locale';
import { Locale } from '@/i18n/config';

const languages: { code: Locale; label: string; flag: string }[] = [
    { code: 'en', label: 'English', flag: 'GB' },
    { code: 'es', label: 'Español', flag: 'ES' },
    { code: 'de', label: 'Deutsch', flag: 'DE' },
];

const MobileSettings: React.FC = () => {
    const t = useTranslations('Navbar');
    const [isExpanded, setIsExpanded] = useState(false);
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [animateButtons, setAnimateButtons] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);

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

    useEffect(() => {
        document.documentElement.classList.toggle('dark', isDarkMode);
        localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
    }, [isDarkMode]);

    const closeMenu = () => {
        setAnimateButtons(false);
        setTimeout(() => setIsExpanded(false), 200); // matches exit-animation duration
    };

    const toggleExpanded = () => {
        if (!isExpanded) {
            setIsExpanded(true);
            setTimeout(() => setAnimateButtons(true), 10);
        } else {
            closeMenu();
        }
    };

    // Popup now lives inline in the navbar, so close it on outside click / Escape
    useEffect(() => {
        if (!isExpanded) return;

        const handlePointerDown = (event: MouseEvent) => {
            if (!containerRef.current?.contains(event.target as Node)) {
                closeMenu();
            }
        };
        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === 'Escape') closeMenu();
        };

        document.addEventListener('mousedown', handlePointerDown);
        document.addEventListener('keydown', handleKeyDown);
        return () => {
            document.removeEventListener('mousedown', handlePointerDown);
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, [isExpanded]);

    const switchLanguage = (lang: {
        code: Locale;
        label: string;
        flag: string;
    }) => {
        setUserLocale(lang.code);
        closeMenu();
    };

    const toggleTheme = () => {
        setIsDarkMode((prev) => !prev);
        closeMenu();
    };

    return (
        <div className="relative" ref={containerRef}>
            {isExpanded && (
                <div className="absolute bottom-full left-1/2 mb-3 flex -translate-x-1/2 flex-col items-center space-y-3">
                    {languages.map((lang, index) => (
                        <button
                            key={lang.code}
                            onClick={() => switchLanguage(lang)}
                            className="flex h-12 w-12 items-center justify-center rounded-full bg-accent shadow-lg transition-all duration-300 ease-out hover:bg-gray-100 dark:hover:bg-gray-800"
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
                                style={{ width: '1.5em', height: '1.5em' }}
                                title={lang.label}
                            />
                        </button>
                    ))}

                    <button
                        onClick={toggleTheme}
                        className="flex h-12 w-12 items-center justify-center rounded-full bg-accent shadow-lg transition-all duration-300 ease-out hover:bg-gray-100 dark:hover:bg-gray-800"
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

            <button
                type="button"
                onClick={toggleExpanded}
                aria-haspopup="true"
                aria-expanded={isExpanded}
                className="flex flex-col items-center hover:text-gray-400"
            >
                <FaCog
                    className="text-foreground transition-transform duration-300 ease-out"
                    size={25}
                    style={{
                        transform: isExpanded
                            ? 'rotate(90deg)'
                            : 'rotate(0deg)',
                    }}
                />
                <span>{t('settings')}</span>
            </button>
        </div>
    );
};

export default MobileSettings;
