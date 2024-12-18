'use client';

import { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import { FaSun, FaMoon } from 'react-icons/fa'; // Import sun and moon icons

// Styled components
const ToggleContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px; /* Space between the icon and the toggle */
`;

const ToggleSwitch = styled.label`
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
`;

const Checkbox = styled.input`
  opacity: 0;
  width: 0;
  height: 0;

  &:checked + span {
    background-color:rgb(54, 54, 54);
  }

  &:checked + span:before {
    transform: translateX(26px);
  }
`;

const Slider = styled.span`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  transition: 0.4s;
  border-radius: 34px;

  &:before {
    position: absolute;
    content: "";
    height: 26px;
    width: 26px;
    left: 4px;
    bottom: 4px;
    background-color: white;
    transition: 0.4s;
    border-radius: 50%;
  }
`;

const ThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const storedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    const initialTheme = storedTheme ? storedTheme === 'dark' : prefersDark;
    setIsDarkMode(initialTheme);
    document.documentElement.classList.toggle('dark', initialTheme);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDarkMode);
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
  }, [isDarkMode]);

  const handleToggle = () => {
    setIsDarkMode((prev) => !prev);
  };

  return (
    <ToggleContainer>
      {isDarkMode ? <FaMoon color="white" size={20} /> : <FaSun color="white" size={20} />}
      <ToggleSwitch>
        <Checkbox type="checkbox" checked={isDarkMode} onChange={handleToggle} />
        <Slider />
      </ToggleSwitch>
    </ToggleContainer>
  );
};

export default ThemeToggle;