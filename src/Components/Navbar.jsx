import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/bg/logo2.svg";
import DarkModeToggle from "./DarkModetoggle.jsx";

const Navbar = () => {
  const [isDarkMode, setIsDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  );
  const [isOpen, setIsOpen] = useState(false); // State to toggle mobile menu

  useEffect(() => {
    const handleThemeChange = () => {
      setIsDarkMode(localStorage.getItem("theme") === "dark");
    };

    window.addEventListener("storage", handleThemeChange);
    return () => window.removeEventListener("storage", handleThemeChange);
  }, []);

  return (
    <nav
      className={`w-full z-20 top-0 px-4 md:px-2 start-0 border-gray-200 dark:border-gray-600 
      ${isDarkMode ? "bg-gray-900" : "bg-transparent"}`}
      style={{ fontFamily: "Rajdhani, sans-serif" }}
    >
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        {/* Logo */}
        <div className="flex items-center space-x-4">
          <span className="text-white text-3xl font-bold bg-gradient-to-r from-blue-500 to-blue-700 shadow-lg rounded-full w-14 h-14 flex items-center justify-center border-2 border-white">
            S
          </span>
          <span className="text-2xl font-bold text-[#ff6d5a] tracking-wide drop-shadow-lg">
            Shahzaib
          </span>
        </div>

        <div className="flex items-center space-x-4">
          <DarkModeToggle />

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 w-10 h-10 text-gray-500 rounded-lg hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-6 h-6"
              aria-hidden="true"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Navbar Links */}
        <div
          className={`w-full md:w-auto md:flex ${
            isOpen ? "block" : "hidden"
          } mt-4 md:mt-0`}
          id="navbar-sticky"
        >
          <ul className="flex flex-col md:flex-row md:space-x-8 p-4 md:p-0 font-medium border md:border-0 dark:bg-gray-800 md:dark:bg-gray-900">
            <li>
              <Link
                to="/"
                className="block py-2 px-3 font-bold text-gray-900 dark:text-white rounded-sm hover:text-[#FF6d5A]"
                aria-current="page"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="block py-2 px-3 font-bold text-gray-900 dark:text-white rounded-sm hover:text-[#FF6d5A]"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="block py-2 px-3 font-bold text-gray-900 dark:text-white rounded-sm hover:text-[#FF6d5A]"
              >
                Contact
              </Link>
            </li>
            <li>
              <Link
                to="/projects"
                className="block py-2 px-3 font-bold text-gray-900 dark:text-white rounded-sm hover:text-[#FF6d5A]"
              >
                Projects
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
