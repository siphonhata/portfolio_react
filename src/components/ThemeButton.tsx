import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAdjust } from '@fortawesome/free-solid-svg-icons';

interface ThemeButtonProps {
    toggleTheme: () => void; // Function to toggle theme
}

const ThemeButton: React.FC<ThemeButtonProps> = ({ toggleTheme }) => {
    return (
        <button 
            className="fixed top-5 right-3 w-14 h-14 rounded-full bg-gray-600 text-gray-200 flex items-center justify-center shadow-lg transition-transform duration-150 active:translate-y-1"
            onClick={toggleTheme}
        >
             <FontAwesomeIcon icon={faAdjust} className="text-2xl" />
        </button>
    );
};

export default ThemeButton;
