import React from "react";
import { Link } from "react-router-dom";

const Navigation: React.FC = () => {
  return (
    <nav className="bg-blue-900">
      <div className="container mx-auto py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-white text-xl font-semibold">
            My World Clock App
          </Link>
          <ul className="flex space-x-6">
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
                to="/world-clock"
                className="text-white hover:text-gray-300 transition duration-300"
              >
                World Clock Display
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
      </div>
    </nav>
  );
};

export default Navigation;
