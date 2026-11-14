'use client';

import Link from 'next/link';
import { useState, useSyncExternalStore } from 'react';
import { useTheme } from 'next-themes';
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
const noopSubscribe = () => () => {};

const Navbar: React.FC<NavbarProps> = ({ initialLocale }) => {
    const t = useTranslations('Navbar');
    const { resolvedTheme, setTheme } = useTheme();
    // The server can't know the theme. Render as light until hydrated so the
    // first client render matches the server HTML, then switch.
    const hydrated = useSyncExternalStore(
        noopSubscribe,
        () => true,
        () => false
    );
    const isDarkMode = hydrated && resolvedTheme === 'dark';
    const [currentLocale, setCurrentLocale] = useState<Locale>(
        initialLocale ?? defaultLocale
    );

    const handleToggleTheme = () => setTheme(isDarkMode ? 'light' : 'dark');

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
