import React from "react";
import Link from "next/link";
import { useTranslation } from 'react-i18next';

import ThemeToggle from "./ThemeToggle";
import LanguageSwitcher from "./LanguageSwitcher";

const Navbar: React.FC = () => {
    const { t } = useTranslation();

    return (
        <nav className="bg-navbar p-4 pl-12 pr-12 lg:pl-16 lg:pr-16 backdrop-filter backdrop-blur-lg backdrop-opacity-100 rounded-tl-full rounded-tr-full lg:rounded-tl-none lg:rounded-tr-none z-10 shadow fixed bottom-0 inset-x-0 lg:top-0 lg:bottom-auto">
            <div className="flex justify-between items-center">

                <ul className="flex lg:justify-start space-x-8">
                    <li>
                        <Link href="/" className="hover:text-gray-300">
                            {t('home')}
                        </Link>
                    </li>
                    <li>
                        <Link href="/about" className="hover:text-gray-300">
                            {t('about')}
                        </Link>
                    </li>
                    <li>
                    <Link href="/contact" className="hover:text-gray-300">
                        {t('contact')}
                    </Link>
                    </li>
                </ul>

                <div className="flex items-center space-x-4">
                    <LanguageSwitcher />
                    <ThemeToggle />
                </div>
            </div>
        </nav>
    );
};

export default Navbar;