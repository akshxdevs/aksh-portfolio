'use client';
import { useTheme } from "../contexts/ThemeContext";
export const Footer = () => {
  const {theme} = useTheme();
  return (
    <div className="text-center pt-8 pb-20 text-sm">
      <div className={`${theme === "dark" ? "text-zinc-100" : "text-zinc-900"} text-sm`}>
        Built with passion & precision by
        <span className="font-bold px-1"> @akshxdevs</span>— where innovation
        meets execution. 
      </div>
      <p className={`${theme === "dark" ? "text-zinc-200" : "text-zinc-800"} text-sm`}>© 2025 Akshxdevs. All rights reserved.</p>
    </div>
  );
};
