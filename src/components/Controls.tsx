import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faUser,
  faBriefcase,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

const Controls: React.FC<{ isLightMode: boolean }> = ({ isLightMode }) => {
  const navigate = useNavigate();

  return (
    <div className="fixed top-1/2 right-3 transform -translate-y-1/2 flex flex-col items-center space-y-4">
      <div
        className={`control-button bg-gray-700 hover:bg-gray-500 w-14 h-14 rounded-full flex items-center justify-center shadow-lg ${
          window.location.pathname === "/"
            ? isLightMode
              ? "text-pink-500"
              : "text-green-500"
            : ""
        }`}
        onClick={() => navigate("/")}
      >
        <FontAwesomeIcon icon={faHome} className="text-xl" />
      </div>
      <div
        className={`control-button bg-gray-700 hover:bg-gray-500 w-14 h-14 rounded-full flex items-center justify-center shadow-lg ${
          window.location.pathname === "/about"
            ? isLightMode
              ? "text-pink-500"
              : "text-green-500"
            : ""
        }`}
        onClick={() => navigate("/about")}
      >
        <FontAwesomeIcon icon={faUser} className="text-xl" />
      </div>
      <div
        className={`control-button bg-gray-700 hover:bg-gray-500 w-14 h-14 rounded-full flex items-center justify-center shadow-lg ${
          window.location.pathname === "/portfolio"
            ? isLightMode
              ? "text-pink-500"
              : "text-green-500"
            : ""
        }`}
        onClick={() => navigate("/portfolio")}
      >
        <FontAwesomeIcon icon={faBriefcase} className="text-xl" />
      </div>
      <div
        className={`control-button bg-gray-700 hover:bg-gray-500 w-14 h-14 rounded-full flex items-center justify-center shadow-lg ${
          window.location.pathname === "/contact"
            ? isLightMode
              ? "text-pink-500"
              : "text-green-500"
            : ""
        }`}
        onClick={() => navigate("/contact")}
      >
        <FontAwesomeIcon icon={faEnvelope} className="text-xl" />
      </div>
    </div>
  );
};

export default Controls;
