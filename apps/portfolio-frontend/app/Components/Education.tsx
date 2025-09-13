'use client';
import { useTheme } from "../contexts/ThemeContext";

export const Education = () => {
  const {theme} = useTheme();
  return (
    <div className="max-w-5xl mx-auto py-5">
      <div className="px-32">
        <h1 className={`text-3xl ${theme === "dark" ? "text-slate-50" : "text-slate-900"} font-bold`}>Education</h1>
        <div className="flex justify-between mt-4">
          <div className="flex items-center gap-2">
            <img
              src="https://upload.wikimedia.org/wikipedia/en/thumb/4/49/Anna_University_Logo.svg/250px-Anna_University_Logo.svg.png"
              alt="Anna university"
              className="h-16 w-16 border border-zinc-800 rounded-full"
            />
            <div>
              <h1 className={`text-xl ${theme === "dark" ? "text-slate-100" : "text-slate-900"} font-bold`}>Electronics and Communication Engineering</h1>
              <p>Anna University</p>
            </div>
          </div>
          <div className="flex justify-center items-center">
            <p className="text-md bg-zinc-800 text-slate-200 px-2 py-1 rounded-xl">2021 - 2025</p>
          </div>
        </div>
      </div>
    </div>
  );
};
// 
