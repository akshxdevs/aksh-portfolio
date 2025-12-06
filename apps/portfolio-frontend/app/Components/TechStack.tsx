"use client";
import { useState } from "react";
import { useTheme } from "../contexts/ThemeContext";
import { CgVercel } from "react-icons/cg";

export const TechStack = () => {
  const [showMore, setShowMore] = useState(false);
  const {theme} = useTheme();
  return (
    <div className="max-w-5xl mx-auto py-2 pb-5">
      <div className="px-5 sm:px-32">
          <h1 className={`text-2xl ${theme === 'dark' ? 'text-slate-50' : 'text-slate-900'} font-semibold`}>
            tech & tools.
          </h1>
        {showMore ? (
          <div className="flex flex-wrap gap-3 mt-2">
            <div className="px-2 py-1 rounded-lg bg-zinc-800 flex items-center justify-center shadow-md gap-2">
              <img
                src="https://img.icons8.com/color/48/000000/nodejs.png"
                alt="Node.js"
                className="w-8 h-8"
              />
              <span className="text-slate-200 font-medium">Node.js</span>
            </div>
            <div className="px-2 py-1 rounded-lg bg-zinc-800 flex items-center justify-center shadow-md gap-2">
              <img
                src="https://img.icons8.com/color/48/000000/javascript--v1.png"
                alt="JavaScript"
                className="w-8 h-8"
              />
              <span className="text-slate-200 font-medium">JavaScript</span>
            </div>
            <div className="px-2 py-1 rounded-lg bg-zinc-800 flex items-center justify-center shadow-md gap-2">
              <img
                src="https://img.icons8.com/color/48/000000/typescript.png"
                alt="TypeScript"
                className="w-8 h-8"
              />
              <span className="text-slate-200 font-medium">TypeScript</span>
            </div>
            <div className="px-2 py-1 rounded-lg bg-zinc-800 flex items-center justify-center shadow-md gap-2">
              <img
                src="https://img.icons8.com/color/48/000000/python.png"
                alt="Python"
                className="w-8 h-8"
              />
              <span className="text-slate-200 font-medium">Python</span>
            </div>
            <div className="px-2 py-1 rounded-lg bg-zinc-800 flex items-center justify-center shadow-md gap-2">
              <img
                src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K"
                alt="React.js"
                className="w-8 h-8"
              />
              <span className="text-slate-200 font-medium">React.js</span>
            </div>
            <div className="px-2 py-1 rounded-lg bg-zinc-800 flex items-center justify-center shadow-md gap-2">
              <img
                src="./Next.js.png"
                alt="Next.js"
                className="w-8 h-8 bg-zinc-100 rounded-full"
              />
              <span className="text-slate-200 font-medium">Next.js</span>
            </div>
            <div className="px-2 py-1 rounded-lg bg-zinc-800 flex items-center justify-center shadow-md gap-2">
            <img width="30" height="30" src="https://img.icons8.com/ios/50/FFFFFF/express-js.png" alt="express-js"/>
              <span className="text-slate-200 font-medium">Express.js</span>
            </div>
            <div className="px-2 py-1 rounded-lg bg-zinc-800 flex items-center justify-center shadow-md gap-2">
              <img
                src="https://cdn.worldvectorlogo.com/logos/prisma-4.svg"
                alt="Prisma"
                className="w-8 h-8 bg-zinc-100 rounded-full"
              />
              <span className="text-slate-200 font-medium">Prisma</span>
            </div>
            <div className="px-2 py-1 rounded-lg bg-zinc-800 flex items-center justify-center shadow-md gap-2">
              <img
                src="https://www.postgresql.org/media/img/about/press/elephant.png"
                alt="PostgreSQL"
                className="w-8 h-8"
              />
              <span className="text-slate-200 font-medium">PostgreSQL</span>
            </div>
            <div className="px-2 py-1 rounded-lg bg-zinc-800 flex items-center justify-center shadow-md gap-2">
              <img
                src="https://www.anchor-lang.com/_next/image?url=%2Ficons%2Fanchor.png&w=32&q=75"
                alt="Anchor"
                className="w-8 h-8"
              />
              <span className="text-slate-200 font-medium">Anchor</span>
            </div>
            <div className="px-2 py-1 rounded-lg bg-zinc-800 flex items-center justify-center shadow-md gap-2">
              <img
                src="https://pbs.twimg.com/profile_images/1917730612816875520/3k1_TO-h_400x400.jpg"
                alt="Solidity"
                className="w-8 h-8 rounded-full"
              />
              <span className="text-slate-200 font-medium">Solidity</span>
            </div>
            <div className="px-2 py-1 rounded-lg bg-zinc-800 flex items-center justify-center shadow-md gap-2">
              <img
                src="https://img.icons8.com/color/48/000000/ethereum.png"
                alt="Ethereum"
                className="w-8 h-8"
              />
              <span className="text-slate-200 font-medium">Ethereum</span>
            </div>
            <div className="px-2 py-1 rounded-lg bg-zinc-800 flex items-center justify-center shadow-md gap-2">
              <img
                src="https://img.icons8.com/color/48/000000/c-plus-plus-logo.png"
                alt="C++"
                className="w-8 h-8"
              />
              <span className="text-slate-200 font-medium">C++</span>
            </div>
            <div className="px-4 py-1 rounded-lg bg-zinc-800 flex items-center justify-center shadow-md gap-2">
              <img
                src="https://img.icons8.com/color/48/000000/linux.png"
                alt="Linux"
                className="w-8 h-8"
              />
              <span className="text-slate-200 font-medium">Linux</span>
            </div>
              <div className="px-2 py-1 rounded-lg bg-zinc-800 flex items-center justify-center shadow-md gap-2">
              <img
                src="https://voyager.postman.com/logo/postman-logo-icon-orange.svg"
                alt="Postman"
                className="w-8 h-8"
              />
              <span className="text-slate-200 font-medium">Postman</span>
            </div>
            <div className="px-4 py-1 rounded-lg bg-zinc-800 flex items-center justify-center shadow-md gap-2">
              <img
                src="https://img.icons8.com/color/48/000000/git.png"
                alt="Git & GitHub"
                className="w-8 h-8"
              />
              <span className="text-slate-200 font-medium">Git</span>
            </div>
            <div className="px-4 py-1 rounded-lg bg-zinc-800 flex items-center justify-center shadow-md gap-2">
              <img
                src="https://img.icons8.com/color/48/000000/tailwindcss.png"
                alt="Tailwind"
                className="w-8 h-8"
              />
              <span className="text-slate-200 font-medium">Tailwind</span>
            </div>
            <div className="px-4 py-1 rounded-lg bg-zinc-800 flex items-center justify-center shadow-md gap-2">
              <CgVercel className="text-white"/>
              <span className="text-slate-200 font-medium">Vercel</span>
            </div>
            <div className="px-4 py-1 rounded-lg bg-zinc-800 flex items-center justify-center shadow-md gap-2">
              <img
                src="https://img.icons8.com/color/48/000000/mongodb.png"
                alt="MongoDB"
                className="w-8 h-8"
              />
              <span className="text-slate-200 font-medium">MongoDB</span>
            </div>
            <div className="px-4 py-1 rounded-lg bg-zinc-800 flex items-center justify-center shadow-md gap-2">
              <img
                src="https://img.icons8.com/color/48/000000/redis.png"
                alt="Redis"
                className="w-8 h-8"
              />
              <span className="text-slate-200 font-medium">Redis</span>
            </div>
            <div className="px-4 py-1 rounded-lg bg-zinc-800 flex items-center justify-center shadow-md gap-2">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/Apache_Kafka_logo.svg/154px-Apache_Kafka_logo.svg.png?20210416085520"
                alt="Kafka"
                className="w-8 h-8 bg-zinc-100 rounded-full"
              />
              <span className="text-slate-200 font-medium">Kafka</span>
            </div>
            <div className="px-4 py-1 rounded-lg bg-zinc-800 flex items-center justify-center shadow-md gap-2">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/WebSocket_colored_logo.svg/250px-WebSocket_colored_logo.svg.png"
                alt="WebSocket"
                className="w-8 h-8"
              />
              <span className="text-slate-200 font-medium">WebSocket</span>
            </div>
            <div className="px-4 py-1 rounded-lg bg-zinc-800 flex items-center justify-center shadow-md gap-2">
              <img
                src="https://img.icons8.com/color/48/000000/figma.png"
                alt="Figma"
                className="w-8 h-8"
              />
              <span className="text-slate-200 font-medium">Figma</span>
            </div>
            <div className="px-4 py-1 rounded-lg bg-zinc-800 flex items-center justify-center shadow-md gap-2">
              <img
                src="https://img.icons8.com/color/48/000000/docker.png"
                alt="Docker"
                className="w-8 h-8"
              />
              <span className="text-slate-200 font-medium">Docker</span>
            </div>
            <div className="px-4 py-1 rounded-lg bg-zinc-800 flex items-center justify-center shadow-md gap-2">
              <img
                src="https://img.icons8.com/color/48/000000/kubernetes.png"
                alt="Kubernetes"
                className="w-8 h-8"
              />
              <span className="text-slate-200 font-medium">Kubernetes</span>
            </div>
            <div className="px-10 py-1 rounded-lg bg-zinc-800 flex items-center justify-center gap-2">
              <button 
                onClick={(e) => {
                  e.preventDefault();
                  setShowMore((prev) => !prev); 
                }}
                type="button"
                className="rounded-lg transition-all duration-200 cursor-pointer hover:scale-105"
                style={{zIndex: 9999}}
              >
                <div className="relative bg-zinc-800 rounded-lg">
                  <img
                    width="25"
                    height="25"
                    src="https://img.icons8.com/ios-filled/50/FFFFFF/more.png"
                    alt="more"
                    className="transition-transform duration-200"
                  />
                </div>
              </button>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-3 sm:grid-cols-5 md:grid-cols-6 gap-2 mt-2">
            <div className="px-2 py-1 rounded-lg bg-zinc-800 flex items-center justify-center shadow-md gap-1">
              <img
                src="./solana.png"
                alt="Solana"
                className="w-8 h-8 relative z-10 rounded-full"
                style={{
                  background:
                    "linear-gradient(135deg, #9945FF 0%, #14F195 100%)",
                  filter: "drop-shadow(0 0 1px #00FFA3)",
                }}
              />
              <span className="text-slate-200 font-medium relative z-10">
                Solana
              </span>
            </div>
            <div className="px-2 py-1 rounded-lg bg-zinc-800 flex items-center justify-center shadow-md gap-2">
              <img
                src="https://www.rust-lang.org/static/images/rust-logo-blk.svg"
                alt="Rust"
                className="w-8 h-8 bg-zinc-100 rounded-full"
              />
              <span className="text-slate-200 font-medium">Rust</span>
            </div>
            <div className="px-2 py-1 rounded-lg bg-zinc-800 flex items-center justify-center shadow-md gap-2">
              <img
                src="https://www.anchor-lang.com/_next/image?url=%2Ficons%2Fanchor.png&w=32&q=75"
                alt="Anchor"
                className="w-8 h-8"
              />
              <span className="text-slate-200 font-medium">Anchor</span>
            </div>
            <div className="px-2 py-1 rounded-lg bg-zinc-800 flex items-center justify-center gap-2">
              <img
                src="https://img.icons8.com/color/48/000000/typescript.png"
                alt="TypeScript"
                className="w-8 h-8"
              />
              <span className="text-slate-200 font-medium">TS</span>
            </div>
            <div className="px-2 py-1 rounded-lg bg-zinc-800 flex items-center justify-center gap-2">
              <img
                src="./Next.js.png"
                alt="Next.js"
                className="w-8 h-8 bg-zinc-100 rounded-full"
              />
              <span className="text-slate-200 font-medium">Next.js</span>
            </div>
            <div className="px-2 py-1 rounded-lg bg-zinc-800 flex items-center justify-center gap-2">
              <button 
                onClick={(e) => {
                  e.preventDefault();
                  setShowMore((prev) => !prev); 
                }}
                type="button"
                className="rounded-lg transition-all duration-200 cursor-pointer hover:scale-105"
                style={{zIndex: 9999}}
              >
                <div className="relative bg-zinc-800 rounded-lg">
                  <img
                    width="25"
                    height="25"
                    src="https://img.icons8.com/ios-filled/50/FFFFFF/more.png"
                    alt="more"
                    className="transition-transform duration-200"
                  />
                </div>
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
