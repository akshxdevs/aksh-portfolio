"use client";
import { MdOutlineAttachFile } from "react-icons/md";
import { useTheme } from "../contexts/ThemeContext";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";

export const MyIntro = () => {
  const { theme } = useTheme();
  return (
    <div className="max-w-5xl mx-auto pt-10">
      <div className="hidden sm:flex justify-between gap-2 sm:gap-5 mt-20 px-5 sm:px-24">
        <div>
          <img
            width={800}
            src="./profilepicnew.jpg"
            alt="ProfilePic"
            className="border rounded-lg border-zinc-700 transition-colors duration-300"
          />
        </div>
        <div className="flex flex-col gap-0">
          <div className="flex items-center gap-2">
            <h1
              className={`text-2xl ${theme === "dark" ? "text-slate-50" : "text-gray-800"} font-bold transition-colors duration-300`}
            >
              Akash
            </h1>
            <div
              className={`flex items-center gap-1 border border-green-500 rounded-lg px-2 py-1 ${theme === "dark" ? "bg-black" : "bg-zinc-50"}`}
            >
              <div className="w-1 h-1 bg-green-500 rounded-lg animate-pulse"></div>
              <p className={`text-xs text-green-500`}>Available</p>
            </div>
          </div>
          <h2
            className={`flex items-center gap-1 text-lg font-semibold ${theme === "dark" ? "text-slate-200" : "text-gray-800"} transition-colors duration-300`}
          >
            21, Full Stack Blockchain
            <span className="flex items-center gap-1">
              Developer
              <a
                href="mailto:akash@example.com"
                className="group relative rounded-lg transition-all duration-300 hover:bg-green-600/20 hover:scale-105 hover:shadow-lg hover:shadow-green-500/25"
                title="Hire Me"
              >
                {theme === "dark" ? (
                  <img
                    width="20"
                    height="20"
                    src="https://img.icons8.com/sf-regular-filled/48/FFFFFF/briefcase.png"
                    alt="briefcase"
                  />
                ) : (
                  <img
                    width="20"
                    height="20"
                    src="https://img.icons8.com/sf-regular-filled/48/briefcase.png"
                    alt="briefcase "
                  />
                )}
                <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-slate-800 text-zinc-100 text-sm font-semibold px-3 py-1 rounded-md shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap border border-green-500/30">
                  Hire Me!
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-slate-800"></div>
                </div>
              </a>
            </span>
          </h2>
          <p
            className={`text-md ${theme === "dark" ? "text-slate-300" : "text-gray-900"}`}
          >
            Polymath. Builder. Problem solver. Engineer at heart, innovator by
            choice. With a strong foundation in software and hardware, I’m
            diving deep into Web3 to design and scale impactful products.
            Passionate about space, rockets, great books, histroy and frontier
            sciences, I thrive on pushing boundaries. football, chess are my
            edge sharp, always aiming to create products that scale, endure, and
            make a lasting impact.
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
                href=""
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
        <div className="flex flex-col justify-center items-center gap-2 sm:gap-5 pt-10 px-5">
          <div className="flex gap-2 sm:gap-5 w-full">
            <div className="w-[75%]">
              <img
                width="900"
                height="900"
                src="./profilepicnew.jpg"
                alt="ProfilePic"
                className="border rounded-lg border-gray-300 dark:border-slate-700 transition-colors duration-300"
              />
            </div>
            <div className="w-full flex flex-col mt-2">
              <div className="flex items-center gap-2">
                <h1
                  className={`text-2xl ${theme === "dark" ? "text-slate-50" : "text-gray-800"} font-bold transition-colors duration-300`}
                >
                  Akash
                </h1>
                <div
                  className={`flex items-center border border-green-500 rounded-lg px-2 py-1 ${theme === "dark" ? "bg-black" : "bg-zinc-50"}`}
                >
                  <div className="w-1 h-1 bg-green-500 rounded-lg animate-pulse"></div>
                  <p className={`text-xs text-green-500`}>Available</p>
                </div>
              </div>
              <div className="flex items-center">
                <h2
                  className={` text-md font-semibold ${theme === "dark" ? "text-slate-200" : "text-gray-800"} transition-colors duration-300 leading-tight`}
                >
                  21, Full Stack and Blockchain Developer
                </h2>
                <a
                  href="mailto:akash@example.com"
                  className="mt-5 right-1 group relative inline-block rounded-lg transition-all duration-300 hover:bg-green-600/20 hover:scale-105 hover:shadow-lg hover:shadow-green-500/25"
                  title="Hire Me"
                >
                  {theme === "dark" ? (
                    <img
                      width="30"
                      height="30"
                      src="https://img.icons8.com/sf-regular-filled/48/FFFFFF/briefcase.png"
                      alt="briefcase"
                      className="inline"
                    />
                  ) : (
                    <img
                      width="30"
                      height="30"
                      src="https://img.icons8.com/sf-regular-filled/48/briefcase.png"
                      alt="briefcase"
                      className="inline"
                    />
                  )}
                  <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-slate-800 text-zinc-100 text-xs font-semibold px-2 py-1 rounded-md shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap border border-green-500/30 z-50">
                    Hire Me!
                    <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-slate-800"></div>
                  </div>
                </a>
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
                    href=""
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
              Polymath. Builder. Problem solver. Engineer at heart, innovator by
              choice. With a strong foundation in software and hardware, I’m
              diving deep into Web3 to design and scale impactful products.
              Passionate about space, rockets, great books, histroy and frontier
              sciences, I thrive on pushing boundaries. football, chess are my
              edge sharp, always aiming to create products that scale, endure,
              and make a lasting impact.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
