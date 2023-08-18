import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navigation: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-blue-900">
      <div className="container mx-auto py-4">
        <div className="flex justify-between items-center px-4">
          <Link to="/world-clock" className="text-white text-xl font-semibold">
            My World Clock App
          </Link>
          <div className="lg:hidden">
            <button
              onClick={toggleMenu}
              className="text-white focus:outline-none focus:text-gray-300"
            >
              {/* Display hamburger icon when menu is closed */}
              {!isMenuOpen ? (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>
                </svg>
              ) : (
                /* Display close (X) icon when menu is open */
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  ></path>
                </svg>
              )}
            </button>
          </div>
          {/* Display navigation links in desktop view */}
          <ul className="hidden lg:flex space-x-6">
            <li>
              <Link
                to="/world-clock"
                className="text-white hover:text-gray-300 transition duration-300"
              >
                World Clock Display
              </Link>
            </li>
            <li>
              <Link
                to="/timezone-converter"
                className="text-white hover:text-gray-300 transition duration-300"
              >
                Timezone Converter
              </Link>
            </li>
            <li>
              <Link
                to="/alarm-clocks"
                className="text-white hover:text-gray-300 transition duration-300"
              >
                Alarm Clocks
              </Link>
            </li>
          </ul>
        </div>
        {/* Display mobile navigation links when menu is open */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4">
            <Link
              to="/world-clock"
              className="block text-white hover:text-gray-300 transition duration-300 py-2"
            >
              World Clock Display
            </Link>
            <Link
              to="/timezone-converter"
              className="block text-white hover:text-gray-300 transition duration-300 py-2"
            >
              Timezone Converter
            </Link>
            <Link
              to="/alarm-clocks"
              className="block text-white hover:text-gray-300 transition duration-300 py-2"
            >
              Alarm Clocks
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
