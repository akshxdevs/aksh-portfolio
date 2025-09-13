'use client';
import { useTheme } from "../contexts/ThemeContext";

export const ReachOut = () => {
  const {theme} = useTheme(); 
  return (
    <div className="max-w-5xl mx-auto py-5">
      <div className="flex flex-col justify-center items-center px-32">
        <h1 className={`text-4xl ${theme === "dark" ? "text-slate-50" : "text-slate-900"} font-semibold transition-colors duration-300`}>Get in Touch</h1>
      </div>
      <div className="px-44 py-10">
        <p className={`text-2xl ${theme === "dark" ? "text-zinc-200" : "text-slate-900"} transition-colors duration-300`}>Got questions? Talk to me.</p>
        <div className="flex space-x-4 mt-4">
          <button className="relative rounded-lg p-2 overflow-hidden group ">
              <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{animation: 'gradient-rotate 0.5s linear infinite', animationPlayState: 'running'}}></div>
              <div className="absolute inset-[1.5px] rounded-lg bg-zinc-800 transition-colors duration-300"></div>
              <a href="" className="relative flex items-center gap-2 z-10">
                <img width="20" height="20" src="https://img.icons8.com/ios/50/FFFFFF/calendar--v1.png" alt="calendar--v1"/>
                <span className="text-gray-800 dark:text-white transition-colors duration-300">Book a meet</span>
              </a>
            </button>
            <button className="relative rounded-lg p-2 overflow-hidden group">
              <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{animation: 'twitter-gradient 0.5s linear infinite', animationPlayState: 'running'}}></div>
              <div className="absolute inset-[1px] rounded-lg bg-zinc-800 transition-colors duration-300"></div>
              <a href={`https://x.com/akshxdevs`} target="_blank" rel="noopener noreferre" className="relative flex items-center gap-1 z-10">
                <img
                    width="20"
                    height="20"
                    src="https://img.icons8.com/ios/50/FFFFFF/twitterx--v2.png"
                    alt="twitterx--v2"
                  />
                <span className="text-slate-200 transition-colors duration-300">Chat on twitter</span>
              </a>
            </button>
        </div>
      </div>
      <div className="px-44">
        <h1 className={`text-2xl ${theme === "dark" ? "text-slate-50" : "text-slate-900"} font-semibold transition-colors duration-300`}>Reach Me by Email</h1>
        <form
          action="https://getform.io/f/bdrnmkxb"
          method="POST"
          className="w-full flex flex-col gap-3 mt-4"
        >
          <h2 className={`${theme === "dark" ? "text-gray-300" : "text-gray-700"} transition-colors duration-300`}>Your Email</h2>
          <input
            type="email"
            name="email"
            required
            className="w-full px-4 py-3 text-gray-800 dark:text-white bg-white dark:bg-slate-50 border border-gray-300 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-400 dark:placeholder-gray-500 shadow-sm transition-all duration-300"
            placeholder="Your Email"
          />
          <h2 className={`${theme === "dark" ? "text-gray-300" : "text-gray-700"} transition-colors duration-300`}>Your Message</h2>
          <textarea
            name="message"
            required
            placeholder="Drop a message, let's connect!"
            className="w-full px-4 py-3 h-32 text-gray-800 dark:text-black bg-white dark:bg-slate-50 border border-gray-300 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-400 dark:placeholder-gray-500 shadow-sm transition-all duration-300 resize-none"
          />
          <button
            type="submit"
            className="w-full px-6 py-3 bg-gradient-to-r from-gray-600 to-gray-800 dark:from-zinc-700 dark:to-black text-white font-medium rounded-lg shadow-md hover:from-gray-700 hover:to-gray-900 dark:hover:from-zinc-70 dark:hover:to-black transition-all duration-300 hover:shadow-lg hover:-translate-y-1 active:scale-95"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};
