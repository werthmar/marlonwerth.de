'use client';

import React, { useEffect, useState } from 'react';
import ReactCountryFlag from 'react-country-flag';
import { FaCaretDown } from 'react-icons/fa';

import {Locale} from '@/i18n/config';
import {setUserLocale, getUserLocale} from '@/services/locale';

// Define languages with country codes for flags
const languages = [
  { code: 'en', label: 'English', flag: 'GB' },
  { code: 'es', label: 'Spanish', flag: 'ES' },
  { code: 'de', label: 'German', flag: 'DE' },
];

interface LanguageSwitcherProps {
    initialLocale?: string;
}

export default function LanguageSwitcher({initialLocale}: LanguageSwitcherProps) {
    
    //const [currentLangCode, setLangCode] = useState<string | null>(null);
    const [currentLangCode, setLangCode] = useState<string>(initialLocale || languages[0].code);
    const [isOpen, setIsOpen] = useState(false);

    /*
    useEffect(() => {
        const fetchLocale = async () => {
            const locale = await getUserLocale();
            setLangCode(locale);
        };
        fetchLocale();
    }, []);
    */
    
    const currentLanguage = languages.find(lang => lang.code === currentLangCode) || languages[0];

    const toggleDropdown = () => setIsOpen(!isOpen);
    
    const selectLanguage = (lang: { code: any; label?: string; flag?: string; }) => {
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
          <ReactCountryFlag
            countryCode={currentLanguage.flag}
            svg
            style={{
              width: '1.5em',
              height: '1.5em',
            }}
            title={currentLanguage.label}
          />
          {/*&nbsp; {currentLanguage.label}*/}
        </span>
        <FaCaretDown className="ml-2" />
      </button>

      {isOpen && (
        <div className="origin-bottom-right lg:origin-top-right absolute lg:bottom-auto lg:mt-1 bottom-full mb-1 w-40 rounded-md shadow-lg bg-navbar ring-1 ring-black ring-opacity-5">
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
};

//export default LanguageSwitcher;