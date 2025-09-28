"use client";
import { useEffect, useState } from "react";
import { useTheme } from "../contexts/ThemeContext";

export const AppBar = () => {
    const [time,setTime] = useState(new Date());
    const {theme} = useTheme();
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
        <div>
            <div className={`flex justify-center py-2 items-center ${theme === "dark" ? "text-white" : "text-black"} text-md font-normal`}>
                {formatTime(time)}
            </div>
        </div>
    );
}