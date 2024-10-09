import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage"; 
import AboutPage from "./components/AboutPage";
import ContactPage from "./components/ContactPage";
import PortfolioPage from "./components/PortfolioPage";
import Layout from "./components/Layout";

const App: React.FC = () => {
  const [isLightMode, setIsLightMode] = useState<boolean>(false);

  const toggleTheme = () => {
    console.log(isLightMode);
    setIsLightMode((prevMode) => !prevMode);
  };

  const bodyStyle = {
    backgroundColor: isLightMode ? "#ffffff" : "#f44336",
    color: isLightMode ? "#333333" : "#ffffff",
    transition: "background-color 0.4s ease-in-out, color 0.4s ease-in-out",
    minHeight: "100vh",
  };
  
  return (
    <Router>
      <div style={bodyStyle}>
        <Layout toggleTheme={toggleTheme}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/portfolio" element={<PortfolioPage />} />
          </Routes>
        </Layout>
      </div>
    </Router>
  );
};

export default App;
