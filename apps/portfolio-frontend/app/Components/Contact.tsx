'use client';
import { useTheme } from "../contexts/ThemeContext";

export const Contact = () => {
  const {theme} = useTheme();
  return (
    <div className="max-w-3xl mx-auto py-8 border-b border-zinc-800">
      <div className={`flex flex-col gap-1 px-5  ${theme === "dark" ? "text-slate-50" : "text-slate-900"}`}>
        <h1 className={`text-2xl ${theme === "dark" ? "text-slate-50" : "text-slate-900"} font-semibold`}>
          Hire Me, Meet Me, DM Me
        </h1>
        <h2 className={`text-lg ${theme === "dark" ? "text-slate-200" : "text-slate-900"} font-normal`}>
          I’m currently available for internships, full-time opportunities, and
          freelance projects. If you’re looking for someone passionate, skilled,
          and ready to contribute, I’m here to help bring your ideas to life!
        </h2>
        <p className={`text-md ${theme === "dark" ? "text-slate-300" : "text-slate-900"} mt-2`}>
          reach out for work, collabs, or just a chat on x. book a slot, or drop
          straight in.
        </p>
        <div className="flex space-x-4 mt-4">
          <button className="relative rounded-lg p-2 overflow-hidden group ">
              <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{animation: 'gradient-rotate 0.5s linear infinite', animationPlayState: 'running'}}></div>
              <div className="absolute inset-[1.5px] rounded-lg bg-zinc-800 transition-colors duration-300"></div>
              <a href="" className="relative flex items-center gap-2 z-10">
                <img
                  width="20"
                  height="20"
                  src="https://img.icons8.com/ios-filled/50/FFFFFF/about-me.png"
                  alt="about-me"
                  className="transition-all duration-300 group-hover:brightness-110"
                />
                <span className="text-gray-800 dark:text-white transition-colors duration-300">Hire me</span>
              </a>
            </button>
            <button className="relative rounded-lg p-2 overflow-hidden group">
              <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{animation: 'twitter-gradient 0.5s linear infinite', animationPlayState: 'running'}}></div>
              <div className="absolute inset-[1px] rounded-lg bg-zinc-800 transition-colors duration-300"></div>
              <a href={`https://x.com/akshxdevs`} target="_blank" rel="noopener noreferre" className="relative flex items-center gap-1 z-10">
                <span className="text-slate-200 transition-colors duration-300">Get in touch</span>
              </a>
            </button>
        </div>
      </div>
    </div>
  );
};
