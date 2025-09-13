"use client";
import { useTheme } from "../contexts/ThemeContext";

export const NavBar = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <div className="w-full max-w-fit mx-auto">
      <div
        className={`flex items-center px-3 py-1 border rounded-xl backdrop-blur-md transition-colors duration-300 ${theme === "dark" ? "border-zinc-600" : "border-zinc-400"}`}
      >
        <div className="group relative">
          {theme === "dark" ? (
            <button className="p-1 rounded-lg transition-all duration-300 hover:bg-gray-200 dark:hover:bg-gray-700/50 hover:scale-110 group-hover:shadow-lg group-hover:shadow-blue-500/25">
              <img
                width="30"
                height="30"
                src="https://img.icons8.com/ios-glyphs/30/FFFFFF/cryptocurrency.png"
                alt="cryptocurrency"
                className="transition-all duration-300 group-hover:brightness-110"
              />
            </button>
          ) : (
            <button className="p-1 rounded-lg transition-all duration-300 hover:bg-gray-200 dark:hover:bg-zinc-300 hover:scale-110 group-hover:shadow-lg group-hover:shadow-blue-500/25">
              <img
                width="30"
                height="30"
                src="https://img.icons8.com/fluency/48/cryptocurrency.png"
                alt="cryptocurrency"
                className="transition-all duration-300 group-hover:brightness-110"
              />
            </button>
          )}
          <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-white text-xs px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none whitespace-nowrap z-10">
            My Crypto
            <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-100 dark:border-t-gray-800"></div>
          </div>
        </div>
        <div className="group relative">
          {theme === "dark" ? (
            <button className="p-1 rounded-lg transition-all duration-300 hover:bg-gray-200 dark:hover:bg-gray-700/50 hover:scale-110 group-hover:shadow-lg group-hover:shadow-blue-500/25">
              <img
                width="30"
                height="30"
                src="https://img.icons8.com/ios/50/FFFFFF/twitterx--v2.png"
                alt="twitterx--v2"
                className="transition-all duration-300 group-hover:brightness-110"
              />
            </button>
          ) : (
            <button className="p-1 rounded-lg transition-all duration-300 hover:bg-gray-200 dark:hover:bg-zinc-300 hover:scale-110 group-hover:shadow-lg group-hover:shadow-blue-500/25">
              <img
                width="30"
                height="30"
                src="https://img.icons8.com/ios-filled/50/twitterx--v1.png"
                alt="twitterx--v1"
                className="transition-all duration-300 group-hover:brightness-110"
              />
            </button>
          )}
          <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-white text-xs px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none whitespace-nowrap z-10">
            Twitter/X
            <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-100 dark:border-t-gray-800"></div>
          </div>
        </div>
        <div className="group relative">
          {theme === "dark" ? (
            <button className="p-1 rounded-lg transition-all duration-300 hover:bg-gray-200 dark:hover:bg-gray-700/50 hover:scale-110 group-hover:shadow-lg group-hover:shadow-blue-500/25">
              <img
                width="30"
                height="30"
                src="https://img.icons8.com/ios-filled/50/FFFFFF/linkedin.png"
                alt="linkedin"
                className="transition-all duration-300 group-hover:brightness-110"
              />
            </button>
          ) : (
            <button className="p-1 rounded-lg transition-all duration-300 hover:bg-gray-200 dark:hover:bg-gray-700/50 hover:scale-110 group-hover:shadow-lg group-hover:shadow-blue-500/25">
              <img
                width="30"
                height="30"
                src="https://img.icons8.com/color/48/linkedin.png"
                alt="linkedin"
                className="transition-all duration-300 group-hover:brightness-110"
              />
            </button>
          )}
          <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-white text-xs px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none whitespace-nowrap z-10">
            LinkedIn
            <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-100 dark:border-t-gray-800"></div>
          </div>
        </div>
        <div className="group relative">
          {theme === "dark" ? (
            <button className="p-1 rounded-lg transition-all duration-300 hover:bg-gray-200 dark:hover:bg-gray-700/50 hover:scale-110 group-hover:shadow-lg group-hover:shadow-blue-500/25">
              <img
                width="24"
                height="24"
                src="https://img.icons8.com/external-tal-revivo-light-tal-revivo/24/FFFFFF/external-level-up-your-coding-skills-and-quickly-land-a-job-logo-light-tal-revivo.png"
                alt="external-level-up-your-coding-skills-and-quickly-land-a-job-logo-light-tal-revivo"
                className="transition-all duration-300 group-hover:brightness-110"
              />
            </button>
          ) : (
            <button className="p-1 rounded-lg transition-all duration-300 hover:bg-gray-200 dark:hover:bg-gray-700/50 hover:scale-110 group-hover:shadow-lg group-hover:shadow-blue-500/25">
              <img
                width="24"
                height="24"
                src="https://img.icons8.com/external-tal-revivo-color-tal-revivo/24/external-level-up-your-coding-skills-and-quickly-land-a-job-logo-color-tal-revivo.png"
                alt="external-level-up-your-coding-skills-and-quickly-land-a-job-logo-color-tal-revivo"
                className="transition-all duration-300 group-hover:brightness-110"
              />
            </button>
          )}
          <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-white text-xs px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none whitespace-nowrap z-10">
            LeetCode
            <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-100 dark:border-t-gray-800"></div>
          </div>
        </div>
        <div className="group relative">
          {theme === "dark" ? (
            <button className="p-1 rounded-lg transition-all duration-300 hover:bg-gray-200 dark:hover:bg-gray-700/50 hover:scale-110 group-hover:shadow-lg group-hover:shadow-blue-500/25">
              <img
                width="30"
                height="30"
                src="https://img.icons8.com/ios-glyphs/30/FFFFFF/github.png"
                alt="github"
                className="transition-all duration-300 group-hover:brightness-110"
              />
            </button>
          ) : (
            <button className="p-1 rounded-lg transition-all duration-300 hover:bg-gray-200 dark:hover:bg-gray-700/50 hover:scale-110 group-hover:shadow-lg group-hover:shadow-blue-500/25">
              <img
                width="30"
                height="30"
                src="https://img.icons8.com/3d-fluency/94/github.png"
                alt="github"
                className="transition-all duration-300 group-hover:brightness-110"
              />
            </button>
          )}
          <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-white text-xs px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none whitespace-nowrap z-10">
            GitHub
            <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-100 dark:border-t-gray-800"></div>
          </div>
        </div>
        <div>
          {theme === "dark" ? (
            <img
              width="25"
              height="35"
              src="https://img.icons8.com/ios/50/FFFFFF/vertical-line.png"
              alt="vertical-line"
            />
          ) : (
            <img
              width="25"
              height="35"
              src="https://img.icons8.com/ios/50/vertical-line.png"
              alt="vertical-line"
            />
          )}
        </div>
        <div className="group relative">
          <button
            onClick={toggleTheme}
            className="flex items-center p-1 rounded-lg transition-all duration-300 hover:bg-gray-200 dark:hover:bg-gray-700/50 hover:scale-110 group-hover:shadow-lg group-hover:shadow-blue-500/25"
          >
            {theme === "dark" ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-6 transition-all duration-300 group-hover:brightness-110 group-hover:text-yellow-400 text-white"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-6 text-black transition-all duration-300 group-hover:brightness-110 group-hover:text-blue-400"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z"
                />
              </svg>
            )}
          </button>
          <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-white text-xs px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none whitespace-nowrap z-10">
            Toggle Theme
            <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-100 dark:border-t-gray-800"></div>
          </div>
        </div>
      </div>
    </div>
  );
};
