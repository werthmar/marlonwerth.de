'use client';

import Link from 'next/link';
import { FaHome, FaBriefcase, FaFileAlt, FaEnvelope } from 'react-icons/fa';

// Localization
import { useTranslations } from 'next-intl';

// Components
import ThemeToggle from './ThemeToggle';
import LanguageSwitcher from './LanguageSwitcher';
import MobileSettings from './MobileSettings';

interface LanguageSwitcherProps {
    initialLocale?: string;
}

const Navbar: React.FC<LanguageSwitcherProps> = ({ initialLocale }) => {
    const t = useTranslations('Navbar');

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
                                <FaHome
                                    className="text-foreground lg:mr-2"
                                    size={25}
                                />
                                <span className="lg:inline">{t('home')}</span>
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/portfolio"
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
                            <Link
                                href="/cv"
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
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/contact"
                                className="flex flex-col items-center hover:text-gray-400 lg:flex-row"
                            >
                                <FaEnvelope
                                    className="text-foreground lg:mr-2"
                                    size={25}
                                />
                                <span className="lg:inline">
                                    {t('contact')}
                                </span>
                            </Link>
                        </li>
                    </ul>
                    <div className="hidden items-center space-x-4 md:flex">
                        <LanguageSwitcher initialLocale={initialLocale} />
                        <ThemeToggle />
                    </div>
                </div>
            </nav>
            <MobileSettings initialLocale={initialLocale} />
        </>
    );
};

export default Navbar;
