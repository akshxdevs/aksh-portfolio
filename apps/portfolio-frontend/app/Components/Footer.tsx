'use client';
import { BsTwitterX } from "react-icons/bs";
import { useEffect, useState } from "react";
import { useTheme } from "../contexts/ThemeContext";
import { FaBitcoin, FaGithub, FaLinkedin } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

const formatVisitCount = (count: number): string => {
  if (count >= 1000000) {
    return `${(count / 1000000).toFixed(1)}M`;
  } else if (count >= 1000) {
    return `${(count / 1000).toFixed(1)}K`;
  }
  return count.toString();
};

export const Footer = () => {
  const {theme} = useTheme();
  const [visitCount, setVisitCount] = useState<number | null>(null);

  useEffect(() => {
    const trackAndFetchVisits = async () => {
      try {
        await fetch('/api/visitors', {
          method: 'POST',
        });
        
        const response = await fetch('/api/visitors');
        if (response.ok) {
          const data = await response.json();
          setVisitCount(data.totalVisits);
        }
      } catch (error) {
        console.error('Error tracking/fetching visits:', error);
      }
    };

    trackAndFetchVisits();
  }, []);

  return (
    <div className="max-w-3xl mx-auto pt-8 pb-20 text-sm px-5">
      <div className={`flex flex-col gap-4 ${theme === "dark" ? "text-zinc-100" : "text-zinc-900"} text-sm`}>
        <div className="flex justify-between gap-2 w-full text-[#41444d]"> 
          <div>
            <p className="text-sm">built with <a href="" className="underline">turbo.repo</a></p>
          </div>
          <div>
            <div
              className={`flex items-center gap-1 border border-yellow-500 rounded-lg px-2 py-1 ${theme === "dark" ? "bg-black" : "bg-zinc-50"}`}
            >
              <div className="w-1 h-1 bg-yellow-500 rounded-lg animate-pulse"></div>
              <p className={`text-xs text-yellow-500`}>last updated 6th dec 2025</p>
            </div>
            <p className="text-sm"></p>
          </div>
        </div>
        <div>
          <p className="text-[#41444d] text-sm">
            {visitCount !== null ? `${formatVisitCount(visitCount)} visits` : 'Loading...'}
          </p>
        </div>
        <div></div>
        <div className="flex items-center justify-between"> 
          <div>
            <p>© 2025 akshxdevs</p>
          </div>
          <div className="flex items-center gap-3">
            <div className="group relative">
              <a href="">
                <FaBitcoin size={20}/>
              </a>
              <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-white text-xs px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none whitespace-nowrap z-10">
                My Crypto
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-100 dark:border-t-gray-800"></div>
              </div>
            </div>
            <div className="group relative">
              <a href="">
                <BsTwitterX size={20}/>
              </a>
              <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-white text-xs px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none whitespace-nowrap z-10">
                Twitter/X
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-100 dark:border-t-gray-800"></div>
              </div>
            </div>
            <div className="group relative">
              <a href="">
                <FaLinkedin size={20}/>
              </a>
              <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-white text-xs px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none whitespace-nowrap z-10">
                LinkedIn
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-100 dark:border-t-gray-800"></div>
              </div>
            </div>
            <div className="group relative">
              <a href="">
                <SiLeetcode size={20}/>
              </a>
              <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-white text-xs px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none whitespace-nowrap z-10">
                LeetCode
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-100 dark:border-t-gray-800"></div>
              </div>
            </div>
            <div className="group relative">
              <a href="">
                <FaGithub size={20}/>
              </a>
              <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-white text-xs px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none whitespace-nowrap z-10">
                GitHub
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-100 dark:border-t-gray-800"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <p className={`${theme === "dark" ? "text-zinc-200" : "text-zinc-800"} text-sm`}>© 2025 Akshxdevs. All rights reserved.</p>
      <span className="font-bold px-1"> @akshxdevs</span>— where innovation
      meets execution.  */}
    </div>
  );
};
