'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { FaBriefcase, FaFileAlt } from 'react-icons/fa';

// Localization
import { useTranslations } from 'next-intl';
import { setUserLocale } from '@/services/locale';
import { Locale, defaultLocale } from '@/i18n/config';

// Components
import ThemeToggle from './ThemeToggle';
import LanguageSwitcher from './LanguageSwitcher';
import MobileSettings from './MobileSettings';
import ContactDialog from './ContactDialog';

interface NavbarProps {
    initialLocale?: Locale;
}

const CV_PDF_PATH = '/marlon-werth-cv.pdf';
const CV_PDF_FILENAME = 'Marlon_Werth_CV.pdf';

const Navbar: React.FC<NavbarProps> = ({ initialLocale }) => {
    const t = useTranslations('Navbar');
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [currentLocale, setCurrentLocale] = useState<Locale>(
        initialLocale ?? defaultLocale
    );

    // Corrects the SSR default once localStorage/OS preference is known client-side
    useEffect(() => {
        const storedTheme = localStorage.getItem('theme');
        const prefersDark = window.matchMedia(
            '(prefers-color-scheme: dark)'
        ).matches;
        setIsDarkMode(storedTheme ? storedTheme === 'dark' : prefersDark);
    }, []);

    useEffect(() => {
        document.documentElement.classList.toggle('dark', isDarkMode);
        localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
    }, [isDarkMode]);

    const handleToggleTheme = () => setIsDarkMode((prev) => !prev);

    const handleSelectLocale = (locale: Locale) => {
        setUserLocale(locale);
        setCurrentLocale(locale);
    };

    // Fetches the PDF as a blob so the browser always downloads it instead of opening a viewer
    const handleDownloadCV = async (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        try {
            const response = await fetch(CV_PDF_PATH);
            const blob = await response.blob();
            const blobUrl = URL.createObjectURL(blob);

            const link = document.createElement('a');
            link.href = blobUrl;
            link.download = CV_PDF_FILENAME;
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            URL.revokeObjectURL(blobUrl);
        } catch (error) {
            console.error('Failed to download CV:', error);
        }
    };

    return (
        <>
            <nav className="fixed inset-x-0 bottom-0 z-10 rounded-tl-full rounded-tr-full bg-navbar p-3 pl-12 pr-12 shadow backdrop-blur-lg backdrop-opacity-100 backdrop-filter lg:bottom-auto lg:top-0 lg:rounded-tl-none lg:rounded-tr-none lg:pl-16 lg:pr-16">
                <div className="mx-auto flex max-w-screen-xl items-center justify-between">
                    <ul className="flex w-full justify-between space-x-4 sm:space-x-8 md:w-auto md:justify-start">
                        <li>
                            <Link
                                href="/"
                                className="flex flex-col items-center hover:text-gray-400 lg:flex-row"
                            >
                                <FaBriefcase
                                    className="text-foreground lg:mr-2"
                                    size={25}
                                />
                                <span className="lg:inline">
                                    {t('portfolio')}
                                </span>
                            </Link>
                        </li>
                        <li>
                            <a
                                href={CV_PDF_PATH}
                                onClick={handleDownloadCV}
                                className="flex flex-col items-center hover:text-gray-400 lg:flex-row"
                            >
                                <FaFileAlt
                                    className="text-foreground lg:mr-2"
                                    size={25}
                                />
                                <span className="hidden lg:inline">
                                    {t('cv')}
                                </span>
                                <span className="block lg:hidden">CV</span>
                            </a>
                        </li>
                        <li>
                            <ContactDialog />
                        </li>
                        <li className="md:hidden">
                            <MobileSettings
                                isDarkMode={isDarkMode}
                                onToggleTheme={handleToggleTheme}
                                currentLocale={currentLocale}
                                onSelectLocale={handleSelectLocale}
                            />
                        </li>
                    </ul>
                    <div className="hidden items-center space-x-4 md:flex">
                        <LanguageSwitcher
                            currentLocale={currentLocale}
                            onSelectLocale={handleSelectLocale}
                        />
                        <ThemeToggle
                            isDarkMode={isDarkMode}
                            onToggle={handleToggleTheme}
                        />
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Navbar;
