"use client";
import { useEffect, useState } from "react";
import { useTheme } from "../contexts/ThemeContext";
import { BsLightbulb, BsSunrise, BsSunset } from "react-icons/bs";
import { BiMoon, BiSun } from "react-icons/bi";
import { FiSun } from "react-icons/fi";
import { FaRegSun, FaSun } from "react-icons/fa";
import { LuSun } from "react-icons/lu";

export const AppBar = () => {
    const [time,setTime] = useState(new Date());
    const {theme, toggleTheme} = useTheme();
    const [ripples, setRipples] = useState<number[]>([]);

    const handleToggle = () => {
        const id = Date.now();
        setRipples(prev => [...prev, id]);
        setTimeout(() => {
            setRipples(prev => prev.filter(r => r !== id));
        }, 800);
        toggleTheme();
    };
    useEffect(()=>{
        const interval = setInterval(() => {
            setTime(new Date());
        }, 1000);
        return () => clearInterval(interval);
    },[]);

    const formatTime = (time:Date) => {
        const hours = time.getHours().toString().padStart(2,'0');
        const minutes = time.getMinutes().toString().padStart(2,'0');
        return `${hours}:${minutes}`;
    }
    return (
        <div className="flex justify-between py-2 items-center">
            <div className={`w-[95%] mx-auto flex justify-center items-center ${theme === "dark" ? "text-white" : "text-black"} text-md font-normal`}>
                {formatTime(time)}
            </div>
            <div className="w-[5%] sm:mx-auto">
                <button
                    type="button"
                    onClick={handleToggle}
                    className="relative flex items-center justify-center w-8 h-8 rounded-full border border-zinc-500/60 bg-zinc-900/40 text-white overflow-hidden transition-colors duration-300 hover:border-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-400/50"
                    aria-label="Toggle theme"
                >
                    {theme === "dark" ? <LuSun size={18}/> : <BiMoon size={18}/>}
                    {ripples.map(id => (
                        <span
                            key={id}
                            className="pointer-events-none absolute inset-0 rounded-full bg-gradient-to-r from-indigo-500/35 via-cyan-400/35 to-emerald-400/35 animate-[wave_0.8s_ease-out]"
                        />
                    ))}
                </button>
            </div>
            <style jsx global>{`
                @keyframes wave {
                    0% { transform: scale(0); opacity: 0.6; }
                    60% { opacity: 0.3; }
                    100% { transform: scale(3); opacity: 0; }
                }
            `}</style>
        </div>
    );
}