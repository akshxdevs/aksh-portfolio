"use client";
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { getTimeAgo, formatDate } from '../utils/timeUtils';
import toast from 'react-hot-toast';
import axios from 'axios';
import { useTheme } from '../contexts/ThemeContext';



export default function BlogsPage() {
  const router = useRouter();
  const [blogs, setBlogs] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const {theme} = useTheme();
  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`${process.env.NEXT_PUBLIC_BLOG_API_URL}/api/v1/blog/getblogs`);
        
        if (!response.data) {
          throw new Error('Failed to fetch blogs');
        }
        setBlogs(response.data.blogs);
        toast.success("Blogs fetched successfully!");
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
        console.error('Error fetching blogs:', err);
        toast.error("Failed to fetch blogs");
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  const handleBlogClick = (blogName: string) => {
    router.push(`/blog/${blogName}`);
  };

  if (loading) {
    return (
      <div className="max-w-5xl mx-auto py-32">
        <div className="flex gap-4">
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
          <h1 className={`text-5xl ${theme === "dark" ? "text-slate-50" : "text-slate-900"} font-bold`}>My Blogs</h1>
        </div>
        <div className="flex flex-col justify-center items-center mt-16">
          <div className="w-2/3 h-fit grid grid-cols-1 gap-6">
            {[...Array(4)].map((_, index) => (
              <div key={index} className="max-w-full w-full p-4">
                <div className="flex justify-between items-center mb-2">
                  <div className="flex-1">
                    <div className="h-6 bg-gradient-to-r from-slate-700 via-slate-600 to-slate-700 rounded-lg mb-2  bg-[length:200%_100%] animate-[shimmer_2s_ease-in-out_infinite]"></div>
                    <div className="h-4 bg-gradient-to-r from-slate-700 via-slate-600 to-slate-700 rounded w-3/4  bg-[length:200%_100%] animate-[shimmer_2s_ease-in-out_infinite]"></div>
                  </div>
                  <div className="ml-4">
                    <div className="h-3 bg-gradient-to-r from-slate-700 via-slate-600 to-slate-700 rounded w-16  bg-[length:200%_100%] animate-[shimmer_2s_ease-in-out_infinite]"></div>
                  </div>
                </div>
                <div className="flex gap-2">
                  <div className="h-3 bg-gradient-to-r from-slate-700 via-slate-600 to-slate-700 rounded w-20  bg-[length:200%_100%] animate-[shimmer_2s_ease-in-out_infinite]"></div>
                  <div className="w-1 h-1 bg-slate-600 rounded-full "></div>
                  <div className="h-3 bg-gradient-to-r from-slate-700 via-slate-600 to-slate-700 rounded w-24  bg-[length:200%_100%] animate-[shimmer_2s_ease-in-out_infinite]"></div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-8 flex items-center gap-2">
            <div className="flex gap-1">
              <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce [animation-delay:-0.3s]"></div>
              <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce [animation-delay:-0.15s]"></div>
              <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce"></div>
            </div>
            <span className="text-slate-400 text-sm ml-2">Loading blogs...</span>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="max-w-5xl mx-auto py-32">
        <div className="flex gap-4">
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
          <h1 className={`text-5xl ${theme === "dark" ? "text-slate-50" : "text-slate-900"} font-bold`}>My Blogs</h1>
          <div className="text-red-400 text-center py-8">
            <p>Failed to load blogs: {error}</p>
            <button 
              onClick={() => window.location.reload()} 
              className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
            >
              Retry
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto py-32">
      <div className="flex gap-4">
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
        <h1 className={`text-5xl ${theme === "dark" ? "text-slate-50" : "text-slate-900"} font-bold`}>My Blogs</h1>
      </div>
      <div className="flex flex-col justify-center items-center mt-16">
        {blogs.length > 0 && (
          <div className="w-2/3 h-fit grid grid-cols-1 gap-4">
            {blogs.map((blog) => (
              <div 
                key={blog.id} 
                onClick={() => handleBlogClick(blog.title)}
                className={`max-w-full w-full p-6 border ${theme === "dark" ? "border-zinc-800 hover:bg-slate-800/20" : "border-zinc-200 hover:bg-zinc-200"} rounded-lg hover:border-zinc-600 transition-colors cursor-pointer `}
              >
                <div className="flex justify-between items-center ">
                  <div className="flex-1">
                    <h3 className={`text-2xl font-semibold ${theme === "dark" ? "text-slate-50" : "text-slate-900"} mb-2`}>
                      {blog.title}
                    </h3>
                    <p className={`text-slate-300 text-lg ${theme === "dark" ? "text-slate-50" : "text-slate-900"}`}>
                      {blog.subtitle}
                    </p>
                  </div>
                  <div className="ml-4">
                    <div className="text-slate-400 text-sm">{getTimeAgo(blog.createdOn)}</div>
                  </div>
                </div>
                
                <div className="flex gap-2 mb-4">
                  <p className="text-slate-400 text-sm">6 min read</p>
                  <div className="w-1 h-1 border rounded-full bg-white relative top-2"></div>
                  <div className="text-slate-500 text-sm">{formatDate(blog.createdOn)}</div>
                </div>

                {blog.tags && blog.tags.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {blog.tags.map((tag: string, index: number) => (
                      <span 
                        key={index}
                        className={`px-3 py-1 ${theme === "dark" ? "bg-slate-700 text-slate-300" : "bg-slate-200 text-slate-900"} rounded-full text-xs hover:bg-slate-600 transition-colors`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
        
        {blogs.length === 0 && (
          <div className="text-center py-12">
            <p className="text-slate-400 text-lg">No blogs available at the moment.</p>
          </div>
        )}
      </div>
    </div>
  );
}