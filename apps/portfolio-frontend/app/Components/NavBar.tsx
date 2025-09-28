"use client";
import { FaBitcoin, FaGithub, FaLinkedin } from "react-icons/fa";
import { useTheme } from "../contexts/ThemeContext";
import { SiLeetcode} from "react-icons/si";
import { RxDividerVertical } from "react-icons/rx";
import { MdDarkMode, MdLightMode } from "react-icons/md";
import { BsTwitterX } from "react-icons/bs";
export const NavBar = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <div className="w-full max-w-[300px] mx-auto sm:max-w-fit">
      <div
        className={`flex items-center gap-2 p-2 sm:px-3 sm:py-1 border rounded-full backdrop-blur-md transition-colors duration-300 ${theme === "dark" ? "border-zinc-600" : "border-zinc-400"}`}
      >
        <div className="group relative">
          <a href="">
            <FaBitcoin size={25}/>
          </a>
          <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-white text-xs px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none whitespace-nowrap z-10">
            My Crypto
            <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-100 dark:border-t-gray-800"></div>
          </div>
        </div>
        <div className="group relative">
          <a href="">
            <BsTwitterX size={25}/>
          </a>
          <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-white text-xs px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none whitespace-nowrap z-10">
            Twitter/X
            <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-100 dark:border-t-gray-800"></div>
          </div>
        </div>
        <div className="group relative">
          <a href="">
            <FaLinkedin size={25}/>
          </a>
          <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-white text-xs px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none whitespace-nowrap z-10">
            LinkedIn
            <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-100 dark:border-t-gray-800"></div>
          </div>
        </div>
        <div className="group relative">
          <a href="">
            <SiLeetcode size={25}/>
          </a>
          <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-white text-xs px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none whitespace-nowrap z-10">
            LeetCode
            <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-100 dark:border-t-gray-800"></div>
          </div>
        </div>
        <div className="group relative">
          <a href="">
            <FaGithub size={25}/>
          </a>
          <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-white text-xs px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none whitespace-nowrap z-10">
            GitHub
            <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-100 dark:border-t-gray-800"></div>
          </div>
        </div>
        <div>
          <RxDividerVertical/>
        </div>
        <div className="group relative">
          <button
            onClick={toggleTheme}
            className="flex items-center pr-2 py-1 sm:p-1 rounded-lg transition-all duration-300 hover:scale-110 ">
            {theme === "dark" ? (
              <MdLightMode size={25}/>
            ) : (
              <MdDarkMode size={25}/>
            )}
          </button>
          <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-white text-xs px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none whitespace-nowrap z-10">
            Toggle Theme
            <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-100 dark:border-t-gray-800"></div>
          </div>
        </div>
      </div>
    </div>
  );
};
