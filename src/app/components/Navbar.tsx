"use client"

import React, { useState } from "react";
import Link from "next/link";
import { FaHome, FaBriefcase, FaFileAlt, FaCog } from 'react-icons/fa';

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
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    
    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    

    return (
        <nav className="bg-navbar p-3 pl-12 pr-12 lg:pl-16 lg:pr-16 backdrop-filter backdrop-blur-lg backdrop-opacity-100 rounded-tl-full rounded-tr-full lg:rounded-tl-none lg:rounded-tr-none z-10 shadow fixed bottom-0 inset-x-0 lg:top-0 lg:bottom-auto">
            <div className="max-w-screen-xl mx-auto flex justify-between items-center">
                <ul className="flex justify-between w-full md:w-auto md:justify-start space-x-8">
                    <li>
                        <Link href="/" className="hover:text-gray-400 flex items-center">
                            <FaHome className="mr-2 text-foreground" size={25} />
                            <span className="hidden lg:inline">{t('home')}</span>
                        </Link>
                    </li>
                    <li>
                        <Link href="/portfolio" className="hover:text-gray-400 flex items-center">
                            <FaBriefcase className="mr-2 text-foreground" size={25} />
                            <span className="hidden lg:inline">{t('portfolio')}</span>
                        </Link>
                    </li>
                    <li>
                        <Link href="/cv" className="hover:text-gray-400 flex items-center">
                            <FaFileAlt className="mr-2 text-foreground" size={25} />
                            <span className="hidden lg:inline">{t('cv')}</span>
                        </Link>
                    </li>
                    <li className="md:hidden">
                        <button onClick={toggleDropdown} className="flex items-center">
                            <FaCog className="text-foreground" size={25} />
                        </button>
                        {isDropdownOpen && (
                            <div className="absolute bottom-full mb-2 right-4 bg-background p-2 rounded shadow-lg z-50">
                                <LanguageSwitcher initialLocale={initialLocale} />
                                <ThemeToggle />
                            </div>
                        )}
                    </li>
                </ul>
                <div className="hidden md:flex items-center space-x-4">
                    <LanguageSwitcher initialLocale={initialLocale} />
                    <ThemeToggle />
                </div>
            </div>
        </nav>
    );
};

export default Navbar;