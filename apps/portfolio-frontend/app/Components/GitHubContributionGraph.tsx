"use client"
import { useState } from "react";
import GitHubCalendar from "react-github-calendar";

export const GitHubContributionGraph = () => {
    const [year,setYear] = useState(2025);
    return(
        <div className="flex flex-col justify-center items-center mb-10">
        <GitHubCalendar username="akshxdevs" year={year} blockSize={8} blockMargin={5} fontSize={16} />
        <div className="flex gap-2">
            <button onClick={() => setYear(2025)} className="border border-zinc-700 text-slate-300 px-3 py-1 rounded-md hover:scale-105 transition-all duration-300 hover:border-green-500">2025</button>
            <button onClick={() => setYear(2024)} className="border border-zinc-700 text-slate-300 px-3 py-1 rounded-md hover:scale-105 transition-all duration-300 hover:border-green-500">2024</button>
            <button onClick={() => setYear(2023)} className="border border-zinc-700 text-slate-300 px-3 py-1 rounded-md hover:scale-105 transition-all duration-300 hover:border-green-500">2023</button>
            <button onClick={() => setYear(2022)} className="border border-zinc-700 text-slate-300 px-3 py-1 rounded-md hover:scale-105 transition-all duration-300 hover:border-green-500">2022</button>
        </div>
      </div>
    );
}