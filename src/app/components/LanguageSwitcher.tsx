'use client';

import React, { useState } from 'react';
import ReactCountryFlag from 'react-country-flag';
import { FaCaretDown } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';

// Define languages with country codes for flags
const languages = [
  { code: 'en', label: 'English', flag: 'GB' },
  { code: 'es', label: 'Spanish', flag: 'ES' },
  { code: 'de', label: 'German', flag: 'DE' },
];

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const currentLangCode = i18n.language || 'en';
  const [isOpen, setIsOpen] = useState(false);

  const currentLanguage = languages.find(lang => lang.code === currentLangCode) || languages[0];

  const toggleDropdown = () => setIsOpen(!isOpen);

  const selectLanguage = (lang: { code: any; label?: string; flag?: string; }) => {
    i18n.changeLanguage(lang.code);
    setIsOpen(false);
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
        <div className="origin-bottom-right lg:origin-top-right absolute lg:bottom-auto lg:mt-1 bottom-full mb-1 w-40 rounded-md shadow-lg bg-background ring-1 ring-black ring-opacity-5">
          <div className="py-1">
            {languages
              .filter((lang) => lang.code !== currentLangCode)
              .map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => selectLanguage(lang)}
                  className="block w-full text-left px-4 py-2 hover:bg-gray-100"
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

export default LanguageSwitcher;