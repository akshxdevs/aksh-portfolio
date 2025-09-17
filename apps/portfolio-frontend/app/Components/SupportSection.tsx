"use client";
import toast from "react-hot-toast";
import { useTheme } from "../contexts/ThemeContext";

export const SupportSection = () => {
  const { theme } = useTheme();
  const handleSolana = () => {
    const mySolanaAddress = "7HAqkT6CiGhgsbmhWWmsBQNBt1WG1c1ozeD7MwfKXHe1";
    if (navigator && navigator.clipboard) {
      navigator.clipboard.writeText(mySolanaAddress)
        .then(() => {
          toast.success("Solana address copied to clipboard!");
        })
        .catch((err) => {
          console.error(err);
          toast.error("Failed to copy address.");
        });
    }
  }
  const handleUpi = () => {
    const myUpiId = "akashgovind222-1@okaxis";
    if (navigator && navigator.clipboard) {
      navigator.clipboard.writeText(myUpiId)
        .then(() => {
          toast.success("UPI ID copied to clipboard!");
        })
        .catch((err) => {
          console.error(err);
          toast.error("Failed to copy UPI ID.");
        });
    } else {
      toast.error("Clipboard not supported in this browser.");
    }
  }
  return (
    <div className="max-w-5xl mx-auto py-5">
      <div className="flex flex-col gap-2 px-5 sm:px-32">
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
        <div className="flex flex-wrap gap-2 mt-2">
          <a 
            href="https://github.com/sponsors/akshxdevs" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex justify-center items-center gap-1 border border-zinc-600 rounded-lg px-2 py-1 hover:bg-zinc-800 transition-colors"
          >
            <img
              width="20"
              height="20"
              src="https://img.icons8.com/hatch/64/F25081/like.png"
              alt="like"
            />
            Github Sponsors
          </a>
          
          <a 
            href="https://buymeacoffee.com/akshxdevs" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex justify-center items-center gap-1 border border-zinc-600 rounded-lg px-2 py-1 hover:bg-zinc-800 transition-colors"
          >
            <img
              width="20"
              height="20"
              src="https://img.icons8.com/doodle/48/coffee-to-go.png"
              alt="coffee-to-go"
            />
            Buy Me a Coffee
          </a>
          
          <button 
            onClick={() => handleSolana()} 
            className="flex justify-center items-center gap-1 border border-zinc-600 rounded-lg px-2 py-1 hover:bg-zinc-800 transition-colors"
          >
            <img
              width="20"
              height="20"
              src="https://img.icons8.com/nolan/64/solana.png"
              alt="solana"
            />
            Solana
          </button>
          
          <button 
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              handleUpi();
            }} 
            className="flex justify-center items-center gap-1 border border-zinc-600 rounded-lg px-2 py-1 hover:bg-zinc-800 transition-colors cursor-pointer"
            type="button"
          >
            {theme === "dark" ? (
              <img
                width="20"
                height="20"
                src="https://img.icons8.com/ios-filled/50/FFFFFF/bhim-upi.png"
                alt="bhim-upi"
              />
            ) : (
              <img
                width="20"
                height="20"
                src="https://img.icons8.com/ios-filled/50/FFFFFF/bhim-upi.png"
                alt="bhim-upi"
              />
            )}
            <span>UPI</span>
          </button>
        </div>
      </div>
    </div>
  );
};
