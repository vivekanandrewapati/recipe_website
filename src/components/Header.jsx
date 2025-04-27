import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Sun, Moon, Menu, X } from 'lucide-react';
import { useTheme } from '../context/theme';

const Header = () => {
  const { isDarkMode, toggleDarkMode } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 shadow-md ${isDarkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'}`}>
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <NavLink to="/" className="text-xl font-bold text-green-500">
            ChefGPT
          </NavLink>

          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          <nav className="hidden md:flex items-center gap-6">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `hover:text-green-500 transition-colors ${isActive ? "text-green-500" : ""
                }`
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `hover:text-green-500 transition-colors ${isActive ? "text-green-500" : ""
                }`
              }
            >
              About
            </NavLink>
            <NavLink
              to="/moodbased"
              className={({ isActive }) =>
                `hover:text-green-500 transition-colors ${isActive ? "text-green-500" : ""
                }`
              }
            >
              Mood Based
            </NavLink>
            <NavLink
              to="/pantrychef"
              className={({ isActive }) =>
                `hover:text-green-500 transition-colors ${isActive ? "text-green-500" : ""
                }`
              }
            >
              PantryChef
            </NavLink>
            <button
              onClick={toggleDarkMode}
              className="p-2"
              aria-label="Toggle theme"
            >
              {isDarkMode ? (
                <Sun className="text-yellow-500" size={24} />
              ) : (
                <Moon className="text-gray-700" size={24} />
              )}
            </button>
          </nav>
        </div>

        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4">
            <div className="flex flex-col gap-4">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `hover:text-green-500 transition-colors ${isActive ? "text-green-500" : ""
                  }`
                }
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </NavLink>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  `hover:text-green-500 transition-colors ${isActive ? "text-green-500" : ""
                  }`
                }
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </NavLink>
              <NavLink
                to="/moodbased"
                className={({ isActive }) =>
                  `hover:text-green-500 transition-colors ${isActive ? "text-green-500" : ""
                  }`
                }
                onClick={() => setIsMenuOpen(false)}
              >
                Mood Based
              </NavLink>
              <NavLink
                to="/pantrychef"
                className={({ isActive }) =>
                  `hover:text-green-500 transition-colors ${isActive ? "text-green-500" : ""
                  }`
                }
                onClick={() => setIsMenuOpen(false)}
              >
                PantryChef
              </NavLink>
            </div>
            <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
              <button
                onClick={toggleDarkMode}
                className="flex items-center gap-2"
              >
                {isDarkMode ? (
                  <>
                    <Sun className="text-yellow-500" size={20} />
                    <span>Light Mode</span>
                  </>
                ) : (
                  <>
                    <Moon className="text-gray-700" size={20} />
                    <span>Dark Mode</span>
                  </>
                )}
              </button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;