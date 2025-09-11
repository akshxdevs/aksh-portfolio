"use client";
import { useEffect, useState } from "react";

export const AppBar = () => {
    const [time,setTime] = useState(new Date());
    
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
            <div className="flex justify-center py-2 items-center text-white text-md font-normal">
                {formatTime(time)}
            </div>
            <div>
                
            </div>
        </div>
    );
}