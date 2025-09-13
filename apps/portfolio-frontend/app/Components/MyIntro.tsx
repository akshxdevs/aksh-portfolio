"use client";
import { useTheme } from "../contexts/ThemeContext";

export const MyIntro = () => {
  const { theme } = useTheme();
  return (
    <div className="max-w-5xl mx-auto pt-10">
      <div className="flex justify-between gap-5 pt-10 px-32">
        <div>
          <img
            width="900"
            height="900"
            src="./profilepic.jpeg"
            alt="ProfilePic"
            className="border rounded-full border-gray-300 dark:border-slate-700 transition-colors duration-300"
          />
        </div>
        <div className="flex flex-col">
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
            className={`flex items-center gap-2 text-lg font-semibold ${theme === "dark" ? "text-slate-200" : "text-gray-800"} transition-colors duration-300`}
          >
            21, Full Stack and Blockchain Developer
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
            <button className="p-1 rounded-lg transition-all duration-300 hover:bg-gray-700/50 hover:scale-110 group-hover:shadow-lg group-hover:shadow-blue-500/25">
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
            <button className="p-1 rounded-lg transition-all duration-300 hover:bg-gray-700/50 hover:scale-110 group-hover:shadow-lg group-hover:shadow-blue-500/25">
              {theme === "dark" ? (
                <img
                  width="30"
                  height="30"
                  src="https://img.icons8.com/ios-glyphs/30/FFFFFF/github.png"
                  alt="github"
                />
              ) : (
                <img
                  width="40"
                  height="40"
                  src="https://img.icons8.com/sf-regular/48/github.png"
                  alt="github"
                />
              )}
            </button>

            <button className="p-1 rounded-lg transition-all duration-300 hover:bg-gray-700/50 hover:scale-110 group-hover:shadow-lg group-hover:shadow-blue-500/25">
              {theme === "dark" ? (
                <img
                  width="30"
                  height="30"
                  src="https://img.icons8.com/ios/50/FFFFFF/twitterx--v2.png"
                  alt="twitterx--v2"
                />
              ) : (
                <img
                  width="30"
                  height="30"
                  src="https://img.icons8.com/ios/50/twitterx--v2.png"
                  alt="twitterx--v2"
                />
              )}
            </button>
            <button className="p-1 rounded-lg transition-all duration-300 hover:bg-gray-700/50 hover:scale-110 group-hover:shadow-lg group-hover:shadow-blue-500/25">
              {theme === "dark" ? (
                <img
                  width="30"
                  height="30"
                  src="https://img.icons8.com/pastel-glyph/128/FFFFFF/drink-to-go.png"
                  alt="drink-to-go"
                />
              ) : (
                <img
                  width="30"
                  height="30"
                  src="https://img.icons8.com/ios/50/coffee-to-go.png"
                  alt="coffee-to-go"
                />
              )}
            </button>
            <button className="p-1 rounded-lg transition-all duration-300 hover:bg-gray-700/50 hover:scale-110 group-hover:shadow-lg group-hover:shadow-blue-500/25">
              {theme === "dark" ? (
                <img
                  width="30"
                  height="30"
                  src="https://img.icons8.com/ios-glyphs/50/FFFFFF/resume.png"
                  alt="resume"
                />
              ) : (
                <img
                  width="30"
                  height="30"
                  src="https://img.icons8.com/ios/50/resume.png"
                  alt="resume"
                />
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
