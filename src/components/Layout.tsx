import Controls from "./Controls";
import ThemeButton from "./ThemeButton";
import React from "react";


interface LayoutProps {
    children: React.ReactNode;
    toggleTheme: () => void; // Function to toggle theme
}

const Layout: React.FC<LayoutProps> = ({ children, toggleTheme }) => {
    return (
        <div className="min-h-screen bg-gray-800 text-white transition duration-300">
            <ThemeButton toggleTheme={toggleTheme} />
            <Controls />
            <div className="p-4">
                {children}
            </div>
        </div>
    );
};
export default Layout;