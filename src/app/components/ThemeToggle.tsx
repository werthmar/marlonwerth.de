'use client';

import styled from '@emotion/styled';
import { FaMoon } from 'react-icons/fa';
import { IoSunny } from 'react-icons/io5';

const ToggleContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
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
        background-color: rgb(54, 54, 54);
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
        content: '';
        height: 26px;
        width: 26px;
        left: 4px;
        bottom: 4px;
        background-color: white;
        transition: 0.4s;
        border-radius: 50%;
    }
`;

interface ThemeToggleProps {
    isDarkMode: boolean;
    onToggle: () => void;
}

const ThemeToggle: React.FC<ThemeToggleProps> = ({ isDarkMode, onToggle }) => {
    return (
        <ToggleContainer>
            {isDarkMode ? (
                <FaMoon color="white" size={20} />
            ) : (
                <IoSunny color="black" size={25} />
            )}
            <ToggleSwitch>
                <Checkbox
                    type="checkbox"
                    checked={isDarkMode}
                    onChange={onToggle}
                />
                <Slider />
            </ToggleSwitch>
        </ToggleContainer>
    );
};

export default ThemeToggle;
