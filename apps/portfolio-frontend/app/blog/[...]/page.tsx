"use client";
import { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { formatDate } from '../../utils/timeUtils';
import toast from 'react-hot-toast';
import axios from 'axios';
import { useTheme } from '../../contexts/ThemeContext';


export default function BlogPage() {
  const router = useRouter();
  const [blog, setBlog] = useState<any | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const {theme} = useTheme();
  const params = useParams();

  const blogName = Array.isArray(params[""])
    ? decodeURIComponent(params[""][0] || "")
    : decodeURIComponent(params[""] || "");

  console.log("Decoded blogName:", blogName);

  useEffect(() => {
    if (blogName) {
      getBlog();
    } else {
      setLoading(false);
    }
  }, [blogName]);

  const getBlog = async () => {
    try {
      setLoading(true);
      console.log("Fetching blog:", blogName);
      const response = await axios.get(`${process.env.NEXT_PUBLIC_BLOG_API_URL}/api/v1/blog/getblog/${encodeURIComponent(blogName)}`);
      
      if (!response.data || !response.data.blog) {
        throw new Error('Failed to fetch blog');
      }
      
      const data = response.data.blog; 
      console.log("Blog data:", data);
      setBlog(data);
      toast.success("Blog fetched successfully!");
    } catch (error) {
      console.error("Error fetching blog:", error);
      setError(error instanceof Error ? error.message : 'An error occurred');
      toast.error("Failed to fetch blog");
    } finally {
      setLoading(false);
    }
  };

  const date = new Date(blog.createdOn);
  const formatted = date.toISOString().split('T')[0];


  if (loading) {
    return (
      <div className="max-w-5xl mx-auto py-32">
        <div className="flex gap-2 px-2 sm:px-0">
          <button onClick={() => router.push("/")}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6.75 15.75 3 12m0 0 3.75-3.75M3 12h18"
              />
            </svg>
          </button>
          <p>Back to Main</p>
        </div>
        <div className="flex flex-col justify-center items-center mt-8">
          <div className="w-2/3 h-fit">
            <div className="mt-5 rounded-md pb-5">
              <div className="flex flex-col justify-center items-center mt-10 mb-5 px-5">
                <div className="h-12 bg-gradient-to-r from-slate-700 via-slate-600 to-slate-700 rounded-lg w-3/4 mb-4 bg-[length:200%_100%] animate-[shimmer_2s_ease-in-out_infinite]"></div>
                <div className="h-4 bg-gradient-to-r from-slate-700 via-slate-600 to-slate-700 rounded w-1/3 bg-[length:200%_100%] animate-[shimmer_2s_ease-in-out_infinite]"></div>
              </div>
              
              <div className="px-5 py-3 space-y-4">
                {[...Array(8)].map((_, index) => (
                  <div key={index} className="space-y-2">
                    <div className="h-4 bg-gradient-to-r from-slate-700 via-slate-600 to-slate-700 rounded bg-[length:200%_100%] animate-[shimmer_2s_ease-in-out_infinite]"></div>
                    <div className="h-4 bg-gradient-to-r from-slate-700 via-slate-600 to-slate-700 rounded w-5/6 bg-[length:200%_100%] animate-[shimmer_2s_ease-in-out_infinite]"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="max-w-5xl mx-auto py-32">
        <div className="flex gap-2 px-2 sm:px-0">
          <button onClick={() => router.push("/")}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6.75 15.75 3 12m0 0 3.75-3.75M3 12h18"
              />
            </svg>
          </button>
          <p>Back to Main</p>
        </div>
      </div>
    );
  }

  if (!blog) {
    return (
      <div className="max-w-5xl mx-auto py-32">
        <div className="flex gap-2 px-2 sm:px-0">
          <button onClick={() => router.push("/")}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6.75 15.75 3 12m0 0 3.75-3.75M3 12h18"
              />
            </svg>
          </button>
          <p>Back to Main</p>
        </div>
        <div className="flex flex-col justify-center items-center gap-3 pt-2 px-44">
          <h1 className={`text-5xl font-bold ${theme === "dark" ? "text-slate-50" : "text-slate-900"}`}>Recent Blogs</h1>
          <div className={`text-center py-8 ${theme === "dark" ? "text-slate-400" : "text-zinc-900"}`}>
            <p>Blog not found</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto py-32">
      <div className="flex gap-2 px-2 sm:px-0">
        <button onClick={() => router.push("/")}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6.75 15.75 3 12m0 0 3.75-3.75M3 12h18"
            />
          </svg>
        </button>
        <p>Back to Main</p>
      </div>
      <div className='px-5 sm:px-44'>
        <div className="flex flex-col pt-6">
          <p className={`text-sm ${theme === "dark" ? "text-zinc-700" : "text-zinc-900"}`}>akshxdevs</p>
          <h1 className={`text-4xl font-bold ${theme === "dark" ? "text-slate-50" : "text-slate-900"}`}>{blog.title}</h1>
          <p className={`text-xl mt-2 ${theme === "dark" ? "text-zinc-300" : "text-zinc-900"}`}>{blog.subtitle}</p>
          <p className={`text-sm mt-1 ${theme === "dark" ? "text-zinc-500" : "text-zinc-500"}`}>
              {formatted}
          </p>
        </div>
        <div className='flex justify-between items-center gap-2 mt-4'>
          <div className='flex items-center gap-2'>
            <img src="/profilepic.jpeg" alt="profile picture" className="w-10 h-10 rounded-full" />
            <div className='flex flex-col'>
              <h1 className={`font-semibold ${theme === "dark" ? "text-zinc-50" : "text-zinc-900"}`}>Akash</h1>
              <p className={`text-sm ${theme === "dark" ? "text-zinc-400" : "text-zinc-500"}`}>
              {formatDate(blog.createdOn)}
            </p>
            </div>
          </div>
          <div>
          <p className={`text-sm ${theme === "dark" ? "text-zinc-400" : "text-zinc-500"}`}>3 min read</p>
          </div>
        </div>
      </div>
      <div className='border-b border-zinc-800 w-[70%] mx-auto pt-4'/>
      <div className="flex flex-col justify-center items-center ">
        <div className="px-5 sm:px-0 w-full sm:w-[60%] h-fit">
          <div className="mt-5 rounded-md pb-5">
            {blog.thumbnailImg && (
              <img
                src={blog.thumbnailImg}
                alt="blog thumbnail"
                className="rounded-md w-full h-full object-cover mb-8"
              />
            )}
            <div className="px-5 py-3">
              {blog.content ? (
                <div 
                  className="prose prose-invert max-w-none"
                  dangerouslySetInnerHTML={{ __html: blog.content }}
                />
              ) : (
                <p className={`text-lg leading-relaxed font-serif ${theme === "dark" ? "text-zinc-300" : "text-zinc-900"}`}>
                  {blog.writings}
                </p>
              )}
            </div>
            {blog.tags && blog.tags.length > 0 && (
              <div className="flex justify-center items-center gap-2 mt-8">
                {blog.tags.map((tag: any, index: any) => (
                  <span
                    key={index}
                    className={`border border-zinc-600 rounded-lg px-3 py-1 hover:bg-zinc-300 transition-colors ${theme === "dark" ? "text-zinc-300" : "text-zinc-900"}`}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
            <div className='flex justify-center items-center'>
              <div className="flex justify-between w-full sm:w-[70%] border border-zinc-600 rounded-md mt-8">
                <input
                  type="email"
                  placeholder="heisenberg.druglord@gmail.com"
                  className="text-sm sm:text-lg w-full outline-none bg-transparent p-1 border-t border-b border-l rounded-l-md border-orange-600"
                />
                <button className="w-56 bg-orange-600 rounded-sm font-semibold text-slate-100">
                  Subscribe
                </button>
              </div>
            </div>
            <div className="relative top-28 flex justify-center items-center mt-8 px-5 gap-1">
                <p className={`text-sm ${theme === "dark" ? "text-zinc-400" : "text-zinc-500"}`}>Whispers of a mind at work</p>
                <p className={`text-sm ${theme === "dark" ? "text-zinc-400" : "text-zinc-500"}`}>by @akashxdevs</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}