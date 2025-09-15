"use client";
import { useTheme } from "../contexts/ThemeContext";

export const SupportSection = () => {
  const { theme } = useTheme();
  return (
    <div className="max-w-5xl mx-auto py-5">
      <div className="flex flex-col gap-2 px-32">
        <h1
          className={`text-2xl ${theme === "dark" ? "text-slate-50" : "text-slate-900"} font-semibold`}
        >
          Support Me
        </h1>
        <p
          className={`text-md ${theme === "dark" ? "text-zinc-200" : "text-slate-900"}`}
        >
          if you vibe with my work, projects, or content, consider supporting
          me. every bit of support helps me keep creating, improving, and
          sharing more.
        </p>
        <div className="flex gap-2 mt-2">
          <button className="flex items-center gap-1 border border-zinc-600 rounded-lg px-2 py-1">
            <a href="https://github.com/sponsors/akshxdevs" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1">
              <img
                width="20"
                height="20"
                src="https://img.icons8.com/hatch/64/F25081/like.png"
                alt="like"
              />
              Github Sponsors
            </a>
          </button>
          <button className="flex items-center gap-1 border border-zinc-600 rounded-lg px-2 py-1">
            <a href="https://buymeacoffee.com/akshxdevs" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1">
            <img
              width="20"
              height="20"
              src="https://img.icons8.com/doodle/48/coffee-to-go.png"
              alt="coffee-to-go"
            />
            Buy Me a Coffee
            </a>
          </button>
          <button className="flex items-center gap-1 border border-zinc-600 rounded-lg px-2 py-1">
            <img
              width="20"
              height="20"
              src="https://img.icons8.com/nolan/64/solana.png"
              alt="solana"
            />
            Solana
          </button>
          <button className="border border-zinc-600 rounded-lg px-2 py-1">
            <div className="flex items-center gap-1 group">
              {theme === "dark" ? (
                <img
                  width="20"
                  height="20"
                  src="https://img.icons8.com/ios-filled/50/FFFFFF/bhim-upi.png"
                  alt="bhim-upi"
                  className="group-hover:animate-bounce"
                />
              ) : (
                  <img
                    width="20"
                    height="20"
                    src="https://img.icons8.com/ios-filled/50/bhim-upi.png"
                    alt="bhim-upi"
                    className="group-hover:animate-bounce"
                  />
              )}
              <p className="animate-none">UPI</p>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};
