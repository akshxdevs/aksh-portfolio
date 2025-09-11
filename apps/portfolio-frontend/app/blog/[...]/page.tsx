"use client";
import { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { formatDate } from '../../utils/timeUtils';
import toast from 'react-hot-toast';
import axios from 'axios';


export default function BlogPage() {
  const router = useRouter();
  const [blog, setBlog] = useState<any | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
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
      const response = await axios.get(`http://localhost:3000/api/v1/blog/getblog/${encodeURIComponent(blogName)}`);
      
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

  // Loading state
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
          <h1 className="text-5xl text-slate-50 font-bold">Recent Blogs</h1>
        </div>
        <div className="flex flex-col justify-center items-center mt-8">
          <div className="w-2/3 h-fit">
            <div className="mt-5 rounded-md pb-5">
              {/* Title skeleton */}
              <div className="flex flex-col justify-center items-center mt-10 mb-5 px-5">
                <div className="h-12 bg-gradient-to-r from-slate-700 via-slate-600 to-slate-700 rounded-lg w-3/4 mb-4 animate-pulse bg-[length:200%_100%] animate-[shimmer_2s_ease-in-out_infinite]"></div>
                <div className="h-4 bg-gradient-to-r from-slate-700 via-slate-600 to-slate-700 rounded w-1/3 animate-pulse bg-[length:200%_100%] animate-[shimmer_2s_ease-in-out_infinite]"></div>
              </div>
              
              {/* Content skeleton */}
              <div className="px-5 py-3 space-y-4">
                {[...Array(8)].map((_, index) => (
                  <div key={index} className="space-y-2">
                    <div className="h-4 bg-gradient-to-r from-slate-700 via-slate-600 to-slate-700 rounded animate-pulse bg-[length:200%_100%] animate-[shimmer_2s_ease-in-out_infinite]"></div>
                    <div className="h-4 bg-gradient-to-r from-slate-700 via-slate-600 to-slate-700 rounded w-5/6 animate-pulse bg-[length:200%_100%] animate-[shimmer_2s_ease-in-out_infinite]"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Error state
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
          <h1 className="text-5xl text-slate-50 font-bold">Recent Blogs</h1>
          <div className="text-red-400 text-center py-8">
            <p>Failed to load blog: {error}</p>
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

  // No blog found
  if (!blog) {
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
          <h1 className="text-5xl text-slate-50 font-bold">Recent Blogs</h1>
          <div className="text-slate-400 text-center py-8">
            <p>Blog not found</p>
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
      <div className='px-44'>
        <div className="flex flex-col pt-6">
          <p className='text-zinc-700 text-sm'>akshxdevs</p>
          <h1 className="text-4xl text-slate-50 font-bold">{blog.title}</h1>
          <p className='text-zinc-300 text-xl mt-2'>{blog.subtitle}</p>
          <p className="text-zinc-500 text-sm mt-1">
              {blog.createdOn}
          </p>
        </div>
        <div className='flex justify-between items-center gap-2 mt-4'>
          <div className='flex items-center gap-2'>
            <img src="/profilepic.jpeg" alt="profile picture" className="w-10 h-10 rounded-full" />
            <div className='flex flex-col'>
              <h1 className='text-zinc-50-50 font-semibold'>Akash</h1>
              <p className="text-zinc-400 text-sm">
              {formatDate(blog.createdOn)}
            </p>
            </div>
          </div>
          <div>
          <p className='text-zinc-400 text-sm'>3 min read</p>
          </div>
        </div>
      </div>
      <div className='border-b border-zinc-800 w-[70%] mx-auto pt-4'/>
      <div className="flex flex-col justify-center items-center ">
        <div className="w-[60%] h-fit">
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
                <p className="text-slate-300 text-lg leading-relaxed font-serif">
                  {blog.writings}
                </p>
              )}
            </div>
            {blog.tags && blog.tags.length > 0 && (
              <div className="flex justify-center items-center gap-2 mt-8">
                {blog.tags.map((tag: any, index: any) => (
                  <span
                    key={index}
                    className="border border-zinc-600 rounded-lg px-3 py-1 hover:bg-zinc-800 transition-colors text-slate-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
            <div className="flex justify-center items-center mt-8 px-5 gap-1">
                <p className="text-slate-400 text-sm">Whispers of a mind at work</p>
                <p className='text-slate-400 text-sm'>by @akashxdevs</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}