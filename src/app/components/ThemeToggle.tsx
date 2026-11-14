'use client';

import { FaMoon } from 'react-icons/fa';
import { IoSunny } from 'react-icons/io5';

interface ThemeToggleProps {
    isDarkMode: boolean;
    onToggle: () => void;
}

const ThemeToggle: React.FC<ThemeToggleProps> = ({ isDarkMode, onToggle }) => {
    return (
        <div className="flex items-center gap-2.5">
            {isDarkMode ? (
                <FaMoon color="white" size={20} />
            ) : (
                <IoSunny color="black" size={25} />
            )}
            <label className="relative inline-block h-[34px] w-[60px] cursor-pointer">
                <input
                    type="checkbox"
                    checked={isDarkMode}
                    onChange={onToggle}
                    aria-label="Dark mode"
                    className="peer sr-only"
                />
                <span className="absolute inset-0 rounded-full bg-[#ccc] transition-colors duration-[400ms] peer-checked:bg-[rgb(54,54,54)] peer-focus-visible:ring-2 peer-focus-visible:ring-accentColor" />
                <span className="absolute bottom-1 left-1 h-[26px] w-[26px] rounded-full bg-white transition-transform duration-[400ms] peer-checked:translate-x-[26px]" />
            </label>
        </div>
    );
};

export default ThemeToggle;
