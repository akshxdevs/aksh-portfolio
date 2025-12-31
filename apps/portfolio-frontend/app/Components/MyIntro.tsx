"use client";
import { MdOutlineAttachFile } from "react-icons/md";
import { useTheme } from "../contexts/ThemeContext";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";

export const MyIntro = () => {
  const { theme } = useTheme();
  return (
    <div className="max-w-3xl mx-auto px-8 pb-8 mb-4 border-b border-zinc-800">
      <div className="hidden sm:flex justify-between gap-2 sm:gap-5 mt-20 px-8">
        <div>
          <img
            width={400}
            src="./pfp.jpg"
            alt="ProfilePic"
            className="border rounded-lg border-zinc-700 transition-colors duration-300"
          />
        </div>
        <div className="flex flex-col">
          <h1
            className={`text-2xl ${theme === "dark" ? "text-slate-50" : "text-gray-800"} font-bold transition-colors duration-300`}
          >
            akshxdevs
          </h1>
          <h2
            className={`flex items-center gap-1 text-lg font-semibold ${theme === "dark" ? "text-slate-200" : "text-gray-800"} transition-colors duration-300`}
          >
            hi, i'm akash, a full stack             
            <span className="flex items-center gap-1">
              <a
                href="https://solana.com/"
                className="group relative rounded-lg transition-all duration-300 hover:bg-green-600/20 hover:scale-105 hover:shadow-lg hover:shadow-green-500/25"
                title="Hire Me"
              >
                {theme === "dark" ? (
                  <img
                    width="16"
                    height="16"
                    src="./solanaLogoMark.png"
                    alt="briefcase"
                  />
                ) : (
                  <img
                    width="16"
                    height="16"
                    src="./solanaLogoMark.png"
                    alt="briefcase"
                  />
                )}
                <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-slate-800 text-zinc-100 text-sm font-semibold px-3 py-1 rounded-md shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap border border-green-500/30">
                  Hire Me!
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-slate-800"></div>
                </div>
              </a>
            </span> engineer.
          </h2>
          <p
            className={`text-sm ${theme === "dark" ? "text-slate-200" : "text-gray-900"}`}
          >
            building fast, reliable on-chain systems on Solana. Into astronomy, cybertech, and 
            aerial and mobile robotics. Always curious, always building something new.
          </p>
          <div className="flex gap-2 mt-2">
            <div className="group relative border p-1 rounded-md border-zinc-600">
              <a
                href="https://github.com/akshxdevs"
                target="_blank"
                className="rounded-lg transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-blue-500/25"
              >
                <FaGithub size={25} />
              </a>
              <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-white text-xs px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap z-50">
                GitHub
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-100 dark:border-t-gray-800"></div>
              </div>
            </div>

            <div className="group relative border p-1 rounded-md border-zinc-600">
              <a
                href="https://x.com/akshxdevs"
                target="_blank"
                className="rounded-lg transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-blue-500/25"
              >
                <BsTwitterX size={25} />
              </a>
              <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-white text-xs px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap z-50">
                Twitter/X
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-100 dark:border-t-gray-800"></div>
              </div>
            </div>

            <div className="group relative border p-1 rounded-md border-zinc-600">
              <a
                href="https://www.linkedin.com/in/akshxdevs/"
                target="_blank"
                className="rounded-lg transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-blue-500/25"
              >
                <FaLinkedin size={25} />
              </a>
              <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-white text-xs px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap z-50">
                LinkedIn
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-100 dark:border-t-gray-800"></div>
              </div>
            </div>

            <div className="group relative border p-1 rounded-md border-zinc-600">
              <a
                href="https://spqtin.staticfast.com"
                target="_blank"
                className="rounded-lg transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-blue-500/25"
              >
                <MdOutlineAttachFile size={25} />
              </a>
              <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-white text-xs px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap z-50">
                Resume
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-100 dark:border-t-gray-800"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile View */}
      <div className="sm:hidden">
        <div className="flex flex-col justify-center items-center gap-2 sm:gap-5 pt-10">
          <div className="flex gap-2 sm:gap-5 w-full">
            <div className="w-full">
              <img
                width="900"
                height="900"
                src="./pfp.jpg"
                alt="ProfilePic"
                className="border rounded-lg border-gray-300 dark:border-slate-700 transition-colors duration-300"
              />
            </div>
            <div className="w-full flex flex-col mt-2">
              <h1 className={`text-2xl ${theme === "dark" ? "text-slate-50" : "text-gray-800"} font-bold transition-colors duration-300`}>
                akshxdevs
              </h1>
              <div className="w-full">
                <h2 className={`text-lg font-semibold ${theme === "dark" ? "text-slate-200" : "text-gray-800"} transition-colors duration-300`}>
                  hi, i'm akash,
                </h2>
                <h2 className={`text-lg font-semibold ${theme === "dark" ? "text-slate-200" : "text-gray-800"} transition-colors duration-300`}>
                  <span className="whitespace-nowrap">full stack </span>
                  <span className="inline-flex items-center gap-1">
                    <img
                      width="16"
                      height="16"
                      src="./solanaLogoMark.png"
                      alt="briefcase"
                      className="inline"
                    />
                    engineer.
                  </span>
                </h2>
              </div>
              <div className="flex gap-2 mt-1">
                <div className="group relative border p-1 rounded-md border-zinc-600">
                  <a
                    href="https://github.com/akshxdevs"
                    target="_blank"
                    className="rounded-lg transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-blue-500/25"
                  >
                    <FaGithub size={25} />
                  </a>
                  <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-white text-xs px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap z-50">
                    GitHub
                    <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-100 dark:border-t-gray-800"></div>
                  </div>
                </div>

                <div className="group relative border p-1 rounded-md border-zinc-600">
                  <a
                    href="https://x.com/akshxdevs"
                    target="_blank"
                    className="rounded-lg transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-blue-500/25"
                  >
                    <BsTwitterX size={25} />
                  </a>
                  <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-white text-xs px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap z-50">
                    Twitter/X
                    <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-100 dark:border-t-gray-800"></div>
                  </div>
                </div>

                <div className="group relative border p-1 rounded-md border-zinc-600">
                  <a
                    href="https://www.linkedin.com/in/akshxdevs/"
                    target="_blank"
                    className="rounded-lg transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-blue-500/25"
                  >
                    <FaLinkedin size={25} />
                  </a>
                  <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-white text-xs px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap z-50">
                    LinkedIn
                    <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-100 dark:border-t-gray-800"></div>
                  </div>
                </div>

                <div className="group relative border p-1 rounded-md border-zinc-600">
                  <a
                    href="https://spqtin.staticfast.com"
                    target="_blank"
                    className="rounded-lg transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-blue-500/25"
                  >
                    <MdOutlineAttachFile size={25} />
                  </a>
                  <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-white text-xs px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap z-50">
                    Resume
                    <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-100 dark:border-t-gray-800"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full">
            <p
              className={`text-md ${theme === "dark" ? "text-slate-300" : "text-gray-900"}`}
            >
            building fast, reliable on-chain systems on Solana. Into astronomy, cybertech, and 
            aerial and mobile robotics. Always curious, always building something new.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
