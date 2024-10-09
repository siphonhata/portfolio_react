import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AboutPage from "./components/AboutPage";
import ContactPage from "./components/ContactPage";
import HomePage from "./components/HomePage";
import PortfolioPage from "./components/PortfolioPage";
import Controls from "./components/Controls";
import { faAdjust } from "@fortawesome/free-solid-svg-icons";

const App: React.FC = () => {

  const [isLightMode, setIsLightMode] = useState(false);
  const toggleTheme = () => {
    setIsLightMode((prevMode) => !prevMode);
  };

  return (
    <Router>
      <div
        className={`${
          isLightMode ? "bg-white text-gray-900" : "bg-gray-900 text-white"
        } min-h-screen`}
      >
        {/* Theme Toggle Button */}
        <div className="fixed top-5 right-20">
          <button onClick={toggleTheme}
            className="w-16 h-16 rounded-full bg-gray-700 text-white flex items-center justify-center shadow-lg hover:bg-gray-500 transition"
          >
            <FontAwesomeIcon icon={faAdjust} className="text-2xl" />
          </button>
        </div>

        {/* Control Buttons */}
        <Controls isLightMode={isLightMode} />

        {/* Page Routes */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
