import React from "react";
import Link from "next/link";
import { FaHome, FaBriefcase, FaFileAlt } from 'react-icons/fa';

// Localization
import {useTranslations} from 'next-intl';

// Components
import ThemeToggle from "./ThemeToggle";
import LanguageSwitcher from "./LanguageSwitcher";

interface LanguageSwitcherProps {
    initialLocale?: string;
  }

const Navbar: React.FC<LanguageSwitcherProps> = ({ initialLocale }) => {
    const t = useTranslations('Navbar');

    return (
        <nav className="bg-navbar p-3 pl-12 pr-12 lg:pl-16 lg:pr-16 backdrop-filter backdrop-blur-lg backdrop-opacity-100 rounded-tl-full rounded-tr-full lg:rounded-tl-none lg:rounded-tr-none z-10 shadow fixed bottom-0 inset-x-0 lg:top-0 lg:bottom-auto">
            <div className="max-w-screen-xl mx-auto flex justify-between items-center">

                <ul className="flex lg:justify-start space-x-8">
                    <li>
                        <Link href="/" className="hover:text-gray-300 flex items-center">
                            <FaHome className="mr-2 text-foreground" size={25}/>
                            <span className="hidden lg:inline">{t('home')}</span>
                        </Link>
                    </li>
                    <li>
                        <Link href="/portfolio" className="hover:text-gray-300 flex items-center">
                            <FaBriefcase className="mr-2 text-foreground" size={25}/>
                            <span className="hidden lg:inline">{t('portfolio')}</span>
                        </Link>
                    </li>
                    <li>
                        <Link href="/cv" className="hover:text-gray-300 flex items-center">
                            <FaFileAlt className="mr-2 text-foreground" size={25}/>
                            <span className="hidden lg:inline">{t('cv')}</span>
                        </Link>
                    </li>
                </ul>

                <div className="flex items-center lg:space-x-4">
                    <LanguageSwitcher initialLocale={initialLocale} />
                    <ThemeToggle />
                </div>
            </div>
        </nav>
    );
};

export default Navbar;