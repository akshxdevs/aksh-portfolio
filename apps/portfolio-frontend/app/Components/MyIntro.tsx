"use client";
import { useTheme } from "../contexts/ThemeContext";

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
          <h2 className={`flex items-center gap-1 text-lg font-semibold ${theme === "dark" ? "text-slate-200" : "text-gray-800"} transition-colors duration-300`}>
            21, Full Stack and Blockchain
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
            i break things, fix them, and learn fast. deep into code, chasing
            mastery across software + hardware, diving into web3 to build and
            scale. obsessed with space, rockets, astronomy, cosmology, anything
            that pushes limits. for fun, it’s football, chess, and mma. lazy
            sometimes, but execution always lands. here to make something real,
            something that lasts.
          </p>
          <div className="flex gap-2 mt-2">
            <div className="group relative">
              <a href="mailto:akashgovind222@gmail.com" className="rounded-lg transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-blue-500/25">
                {theme === "dark" ? (
                  <svg
                    className="w-9 h-9 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                  </svg>
                ) : (
                  <svg
                    className="w-8 h-8"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                  </svg>
                )}
              </a>
              <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-white text-xs px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap z-50">
                Email
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-100 dark:border-t-gray-800"></div>
              </div>
            </div>

            <div className="group relative">
              <a href="https://github.com/akshxdevs" target="_blank" className="rounded-lg transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-blue-500/25">
                {theme === "dark" ? (
                  <img
                    width="32"
                    height="32"
                    src="https://img.icons8.com/ios-glyphs/30/FFFFFF/github.png"
                    alt="github"
                    className="w-8 h-8"
                  />
                ) : (
                  <img
                    width="32"
                    height="32"
                    src="https://img.icons8.com/sf-regular/48/github.png"
                    alt="github"
                    className="w-8 h-8"
                  />
                )}
              </a>
              <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-white text-xs px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap z-50">
                GitHub
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-100 dark:border-t-gray-800"></div>
              </div>
            </div>

            <div className="group relative">
              <a href="https://x.com/akshxdevs" target="_blank" className="rounded-lg transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-blue-500/25">
                {theme === "dark" ? (
                  <img
                    width="32"
                    height="32"
                    src="https://img.icons8.com/ios/50/FFFFFF/twitterx--v2.png"
                    alt="twitterx--v2"
                    className="w-8 h-8"
                  />
                ) : (
                  <img
                    width="32"
                    height="32"
                    src="https://img.icons8.com/ios/50/twitterx--v2.png"
                    alt="twitterx--v2"
                    className="w-8 h-8"
                  />
                )}
              </a>
              <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-white text-xs px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap z-50">
                Twitter/X
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-100 dark:border-t-gray-800"></div>
              </div>
            </div>

            <div className="group relative">
              <a href="https://www.linkedin.com/in/akshxdevs/" target="_blank" className="rounded-lg transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-blue-500/25">
                {theme === "dark" ? (
                  <img
                    width="32"
                    height="32"
                    src="https://img.icons8.com/ios-filled/50/FFFFFF/linkedin.png"
                    alt="linkedin"
                    className="w-8 h-8 transition-all duration-300 group-hover:brightness-110"
                  />
                ) : (
                  <img
                    width="32"
                    height="32"
                    src="https://img.icons8.com/color/48/linkedin.png"
                    alt="linkedin"
                    className="w-8 h-8 transition-all duration-300 group-hover:brightness-110"
                  />
                )}
              </a>
              <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-white text-xs px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap z-50">
                LinkedIn
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-100 dark:border-t-gray-800"></div>
              </div>
            </div>

            <div className="group relative">
              <a href="" target="_blank" className="rounded-lg transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-blue-500/25">
                {theme === "dark" ? (
                  <img
                    width="32"
                    height="32"
                    src="https://img.icons8.com/ios-glyphs/50/FFFFFF/resume.png"
                    alt="resume"
                    className="w-8 h-8"
                  />
                ) : (
                  <img
                    width="32"
                    height="32"
                    src="https://img.icons8.com/ios/50/resume.png"
                    alt="resume"
                    className="w-8 h-8"
                  />
                )}
              </a>
              <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-white text-xs px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap z-50">
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
                <h1 className={`text-2xl ${theme === "dark" ? "text-slate-50" : "text-gray-800"} font-bold transition-colors duration-300`}>
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
            <h2 className={` text-md font-semibold ${theme === "dark" ? "text-slate-200" : "text-gray-800"} transition-colors duration-300 leading-tight`}>
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

              <div className="flex gap-1 mt-2">
                <div className="group relative">
                  <button className="rounded-lg transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-blue-500/25">
                    {theme === "dark" ? (
                      <svg
                        className="w-8 h-8 text-white"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                      </svg>
                    ) : (
                      <svg
                        className="w-8 h-8"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                      </svg>
                    )}
                  </button>
                  <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-white text-xs px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap z-50">
                    Email
                    <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-100 dark:border-t-gray-800"></div>
                  </div>
                </div>

                <div className="group relative">
                  <button className="rounded-lg transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-blue-500/25">
                    {theme === "dark" ? (
                      <img
                        width="32"
                        height="32"
                        src="https://img.icons8.com/ios-glyphs/30/FFFFFF/github.png"
                        alt="github"
                        className="w-8 h-8"
                      />
                    ) : (
                      <img
                        width="32"
                        height="32"
                        src="https://img.icons8.com/sf-regular/48/github.png"
                        alt="github"
                        className="w-8 h-8"
                      />
                    )}
                  </button>
                  <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-white text-xs px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap z-50">
                    GitHub
                    <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-100 dark:border-t-gray-800"></div>
                  </div>
                </div>

                <div className="group relative">
                  <button className="rounded-lg transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-blue-500/25">
                    {theme === "dark" ? (
                      <img
                        width="32"
                        height="32"
                        src="https://img.icons8.com/ios/50/FFFFFF/twitterx--v2.png"
                        alt="twitterx--v2"
                        className="w-8 h-8"
                      />
                    ) : (
                      <img
                        width="32"
                        height="32"
                        src="https://img.icons8.com/ios/50/twitterx--v2.png"
                        alt="twitterx--v2"
                        className="w-8 h-8"
                      />
                    )}
                  </button>
                  <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-white text-xs px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap z-50">
                    Twitter/X
                    <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-100 dark:border-t-gray-800"></div>
                  </div>
                </div>

                <div className="group relative">
                  <button className="rounded-lg transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-blue-500/25">
                    {theme === "dark" ? (
                      <img
                        width="32"
                        height="32"
                        src="https://img.icons8.com/ios-filled/50/FFFFFF/linkedin.png"
                        alt="linkedin"
                        className="w-8 h-8 transition-all duration-300 group-hover:brightness-110"
                      />
                    ) : (
                      <img
                        width="32"
                        height="32"
                        src="https://img.icons8.com/color/48/linkedin.png"
                        alt="linkedin"
                        className="w-8 h-8 transition-all duration-300 group-hover:brightness-110"
                      />
                    )}
                  </button>
                  <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-white text-xs px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap z-50">
                    LinkedIn
                    <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-100 dark:border-t-gray-800"></div>
                  </div>
                </div>

                <div className="group relative">
                  <button className="rounded-lg transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-blue-500/25">
                    {theme === "dark" ? (
                      <img
                        width="32"
                        height="32"
                        src="https://img.icons8.com/ios-glyphs/50/FFFFFF/resume.png"
                        alt="resume"
                        className="w-8 h-8"
                      />
                    ) : (
                      <img
                        width="32"
                        height="32"
                        src="https://img.icons8.com/ios/50/resume.png"
                        alt="resume"
                        className="w-8 h-8"
                      />
                    )}
                  </button>
                  <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-white text-xs px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap z-50">
                    Resume
                    <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-100 dark:border-t-gray-800"></div>
                  </div>
                </div>
              </div>
              <div></div>
            </div>
          </div>
          <div className="w-full">
            <p className={`text-md ${theme === "dark" ? "text-slate-300" : "text-gray-900"}`}>
              i break things, fix them, and learn fast. deep into code, chasing
              mastery across software + hardware, diving into web3 to build and
              scale. obsessed with space, rockets, astronomy, cosmology,
              anything that pushes limits. for fun, it’s football, chess, and
              mma. lazy sometimes, but execution always lands. here to make
              something real, something that lasts.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
