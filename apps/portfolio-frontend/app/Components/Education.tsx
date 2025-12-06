'use client';
import { useTheme } from "../contexts/ThemeContext";

export const Education = () => {
  const {theme} = useTheme();
  return (
    <div className="max-w-5xl mx-auto py-5">
      <div className="px-5 sm:px-32">
        <h1 className={`text-3xl ${theme === "dark" ? "text-slate-50" : "text-slate-900"} font-bold`}>Education</h1>
        <div className="flex flex-col sm:flex-row justify-between gap-3 mt-4">
          <div className="flex items-center gap-2">
            <img
              src="./anna-university.png"
              alt="Anna university"
              className="h-16 w-16 border border-zinc-800 rounded-full"
            />
            <div>
              <h1 className={`text-lg sm:text-xl ${theme === "dark" ? "text-slate-100" : "text-slate-900"} font-bold`}>Electronics and Communication Engineering</h1>
              <p>Anna University</p>
            </div>
          </div>
          <div className="mx-8 w-1/2 sm:justify-end flex justify-center items-center">
            <p className="text-sm sm:text-md bg-zinc-800 text-slate-200 px-2 py-1 rounded-xl">2021 - 2025</p>
          </div>
        </div>
      </div>
    </div>
  );
};
// 
