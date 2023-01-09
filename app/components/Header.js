import React from "react";
import { useContext } from "react";
import { ThemeContext } from "../contexts/theme";

export default function Header() {
  const { isDarkTheme, toggleThemeHandler } = useContext(ThemeContext);
  return (
    <header className="py-5 bg-gray-600 dark:bg-gray-800 text-white">
      <nav className="flex justify-between">
        <a href="/" className="text-2xl ml-4">
          Cookie Stand Admin
        </a>
        <div className="flex justify-between mr-8">
          <ul className="flex-col md:flex-row flex md:space-x-8 mt-4 md:mt-0 md:text-sm md:font-medium">
            <li>
              <a
                href="/"
                className="md:bg-transparent text-white text-xl block pl-3 pr-4 py-2 md:text-sky-400 md:p-0 rounded"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="about"
                className="text-white text-xl hover:bg-gray-50 border-b border-gray-100 md:hover:bg-transparent md:border-0 block pl-3 pr-4 py-2 md:hover:text-sky-400 md:p-0"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="contact"
                className="text-white text-xl hover:bg-gray-50 border-b border-gray-100 md:hover:bg-transparent md:border-0 block pl-3 pr-4 py-2 md:hover:text-sky-400 md:p-0"
              >
                Contact
              </a>
            </li>
          </ul>
          <button
            type="button"
            className="py-1 sm:py-2.5 px-2 sm:px-5 mr-2 bg-zinc-300 text-black dark:bg-slate-800 dark:text-white rounded"
            onClick={toggleThemeHandler}
          >
            Toggel Theme
          </button>
        </div>
      </nav>
    </header>
  );
}
