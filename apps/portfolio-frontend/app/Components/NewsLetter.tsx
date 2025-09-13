"use client";
import { useState } from "react";
import { useTheme } from "../contexts/ThemeContext";
import axios from "axios";
import toast from "react-hot-toast";

export const NewsLetter = () => {
  const { theme } = useTheme();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [isSubscribing, setIsSubscribing] = useState(false);
  const handleSubscribtion = async () => {
    console.log(name, email);
    setIsSubscribing(true);
    try {
      const res = await axios.post(
        "http://localhost:3000/api/v1/blog/subscribe",
        {
          subscriberName: name,
          subscriberEmail: email,
        }
      );
      const data = res.data;
      if (data.message === "Subscribed Successfully!!") {
        toast.success("Subscribed successfully");
        setName("");
        setEmail("");
      } else {
        toast.error("Failed to subscribe");
      }
    } catch (error: any) {
      if (error.response?.data?.message === "Email already subscribed!") {
        toast.error("Email already subscribed!");
      } else {
        toast.error("Failed to subscribe");
      }
      console.log(error);
    } finally {
      setIsSubscribing(false);
    }
  };
  return (
    <div className="max-w-5xl mx-auto py-5">
      <div className="flex flex-col px-32">
        <h1
          className={`text-2xl ${theme === "dark" ? "text-slate-50" : "text-slate-900"} font-semibold`}
        >
          Newsletter
        </h1>
        <p
          className={`text-md ${theme === "dark" ? "text-slate-300" : "text-slate-900"}`}
        >
          get updates on my latest projects, blogs, and experiments. no spam,
          just what i’m building and thinking.
        </p>
        <div
          className={`flex gap-4 p-3 border rounded-lg mt-4 ${theme === "dark" ? "border-zinc-700" : "border-zinc-300"}`}
        >
          <input
            type="text"
            placeholder="heisenberg"
            className="w-36 bg-transparent p-2 border rounded-md border-orange-600"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <div className="flex justify-between w-full rounded-md">
            <input
              type="email"
              placeholder="heisenberg.druglord@gmail.com"
              className="w-full outline-none bg-transparent p-2 border-t border-b border-l rounded-l-md border-orange-600"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button
              onClick={() => handleSubscribtion()}
              className="w-56 bg-orange-600 px-6 rounded-sm font-semibold"
            >
              {isSubscribing ? (
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  <p>Subscribing...</p>
                </div>
              ) : (
                "Subscribe"
              )}{" "}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
