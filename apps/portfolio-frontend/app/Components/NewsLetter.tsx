'use client';
import { useTheme } from "../contexts/ThemeContext";

export const NewsLetter = () => {
  const {theme} = useTheme();
  return (
    <div className="max-w-5xl mx-auto py-5">
      <div className="flex flex-col px-32">
        <h1 className={`text-2xl ${theme === "dark" ? "text-slate-50" : "text-slate-900"} font-semibold`}>Newsletter</h1>
        <p className={`text-md ${theme === "dark" ? "text-slate-300" : "text-slate-900"}`}>
          get updates on my latest projects, blogs, and experiments. no spam,
          just what i’m building and thinking.
        </p>
        <div className={`flex gap-4 p-3 border rounded-lg mt-4 ${theme === "dark" ? "border-zinc-700" : "border-zinc-300"}`}>
          <input
            type="text"
            placeholder="heisenberg"
            className="w-36 bg-transparent p-2 border rounded-md border-orange-600"
          />
          <div className="flex justify-between w-full rounded-md">
            <input
              type="email"
              placeholder="heisenberg.druglord@gmail.com"
              className="w-full outline-none bg-transparent p-2 border-t border-b border-l rounded-l-md border-orange-600"
            />
            <button className="w-56 bg-orange-600 px-6 rounded-sm font-semibold">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
