"use client";
import { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { formatDate } from '../../utils/timeUtils';
import toast from 'react-hot-toast';

interface Blog {
  id: string;
  title: string;
  subtitle: string;
  content?: string;
  createdOn: string;
  author: {
    id: string;
    name: string | null;
    email: string;
  };
  tags: string[];
  thumbnailImg?: string;
}

export default function BlogPage() {
  const router = useRouter();
  const [blog, setBlog] = useState<Blog | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const params = useParams();

  // For catch-all routes [...], the params are under an empty string key
  const blogName = Array.isArray(params[""])
    ? decodeURIComponent(params[""][0] || "")
    : decodeURIComponent(params[""] || "");

  console.log("Decoded blogId:", blogName);

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
      const response = await fetch(`http://localhost:3000/api/v1/blog/getblog/${encodeURIComponent(blogName)}`);
      
      if (!response.ok) {
        throw new Error('Failed to fetch blog');
      }
      
      const data = await response.json();
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

      <div className="flex flex-col justify-center items-center gap-3 pt-2 px-44">
        <h1 className="text-5xl text-slate-50 font-bold">Recent Blogs</h1>
      </div>

      <div className="flex flex-col justify-center items-center mt-8">
        <div className="w-2/3 h-fit">
          <div className="mt-5 rounded-md pb-5">
            <div className="flex flex-col justify-center items-center mt-10 mb-5 px-5">
              <h1 className="text-4xl font-semibold text-slate-50 text-center mb-4">
                {blog.title}
              </h1>
              <p className="text-zinc-400 text-center">
                {formatDate(blog.createdOn)}
              </p>
              <p className="text-slate-300 text-center mt-2">
                {blog.subtitle}
              </p>
            </div>

            {blog.thumbnailImg && (
              <img
                src={blog.thumbnailImg}
                alt="blog thumbnail"
                className="rounded-md w-full h-96 object-cover mb-8"
              />
            )}

            <div className="px-5 py-3">
              {blog.content ? (
                <div 
                  className="prose prose-invert max-w-none"
                  dangerouslySetInnerHTML={{ __html: blog.content }}
                />
              ) : (
                <p className="text-slate-300 text-lg leading-relaxed">
                  {blog.subtitle}
                </p>
              )}
            </div>

            {blog.tags && blog.tags.length > 0 && (
              <div className="flex flex-wrap gap-2 justify-center items-center mt-8 px-5">
                {blog.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="border border-zinc-600 rounded-lg px-3 py-1 hover:bg-zinc-800 transition-colors text-slate-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}

            <div className="flex justify-center items-center mt-8 px-5">
              <div className="text-slate-400 text-sm">
                By {} • {formatDate(blog.createdOn)}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}