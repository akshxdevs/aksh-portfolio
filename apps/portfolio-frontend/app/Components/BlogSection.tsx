'use client';

import { useEffect, useState } from 'react';
import { getTimeAgo, formatDate } from '../utils/timeUtils';
import { useRouter } from 'next/navigation';
import { useTheme } from '../contexts/ThemeContext';


export const BlogSection = () => {
  const [blogs, setBlogs] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const {theme} = useTheme();
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    // const fetchBlogs = async () => {
    //   try {
    //     setLoading(true);
    //     const response = await axios.get(`${process.env.NEXT_PUBLIC_BLOG_API_URL}/api/v1/blog/getblogs`);
    //     if (!response.data) {
    //       throw new Error('Failed to fetch blogs');
    //     }   
    //     const data = response.data.blogs; 
    //     setBlogs(data.slice(0, 2));
    //   } catch (err) {
    //     setError(err instanceof Error ? err.message : 'An error occurred');
    //     console.error('Error fetching blogs:', err);
    //   } finally {
    //   }
    // };
    // fetchBlogs();
    setLoading(false);
  }, []);

  if (loading) {
    return (
      <div className="max-w-5xl mx-auto py-5">
        <div className="flex flex-col items-center justify-center px-8">
          <h1 className="text-2xl text-slate-50 font-semibold mb-8">
            Recent Blogs
          </h1>
          <div className="grid grid-cols-1 gap-6 w-1/2">
            {[...Array(2)].map((_, index) => (
              <div key={index} className="max-w-full w-full p-4">
                <div className="flex justify-between items-center mb-2">
                  <div className="flex-1">
                    <div className="h-6 bg-gradient-to-r from-slate-700 via-slate-600 to-slate-700 rounded-lg mb-2 bg-[length:200%_100%] animate-[shimmer_2s_ease-in-out_infinite]"></div>
                    <div className="h-4 bg-gradient-to-r from-slate-700 via-slate-600 to-slate-700 rounded w-3/4 bg-[length:200%_100%] animate-[shimmer_2s_ease-in-out_infinite]"></div>
                  </div>
                  <div className="ml-4">
                    <div className="h-3 bg-gradient-to-r from-slate-700 via-slate-600 to-slate-700 rounded w-16 bg-[length:200%_100%] animate-[shimmer_2s_ease-in-out_infinite]"></div>
                  </div>
                </div>
                <div className="flex gap-2">
                  <div className="h-3 bg-gradient-to-r from-slate-700 via-slate-600 to-slate-700 rounded w-20 bg-[length:200%_100%] animate-[shimmer_2s_ease-in-out_infinite]"></div>
                  <div className="w-1 h-1 bg-slate-600 rounded-full"></div>
                  <div className="h-3 bg-gradient-to-r from-slate-700 via-slate-600 to-slate-700 rounded w-24 bg-[length:200%_100%] animate-[shimmer_2s_ease-in-out_infinite]"></div>
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
      <div className="max-w-5xl mx-auto py-5">
        <div className="px-32">
          <h1 className="text-2xl text-slate-50 font-semibold mb-8">
            Recent Blogs
          </h1>
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
    <div className="max-w-5xl mx-auto py-5">
      <div className="flex flex-col items-center justify-center">
        <h1 className={`text-2xl text-slate-50 font-semibold mb-8 ${theme === "dark" ? "text-slate-50" : "text-slate-900"}`}>
          Recent Blogs
        </h1>
        <div className="grid grid-cols-1 w-full sm:w-[600px]">
          {blogs.map((blog) => (
            <div onClick={() => router.push(`/blog/${blog.title}`)} className="max-w-full w-full px-4 cursor-pointer">
                <div className="relative">
                  <img src={blog.coverImg} alt="" className="w-full h-48 object-cover rounded-lg" />
                  <div className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-t from-black to-transparent rounded-lg"></div>
                </div>
                  <div className="relative bottom-12 px-4 flex justify-between items-center">
                    <div>
                      <h1 className="text-xl font-semibold text-slate-50">{blog.title}</h1>
                      <p className="text-slate-300 text-md">{blog.subtitle}</p>
                      <div className='flex gap-2'>
                        <p className="text-slate-400 text-xs">6 min read</p>
                        <div className='relative top-2 w-1 h-1 border rounded-full bg-white'></div>
                        <div className="text-slate-500 text-xs">{formatDate(blog.createdOn)}</div>
                      </div>
                    </div>
                  <div>
                      <div className="text-slate-300 text-xs">{getTimeAgo(blog.createdOn)}</div>
                  </div>
                  </div>
            </div>
          ))}
        </div>
        {blogs.length > 0 && (
          <div className="flex justify-center">
            <button 
              onClick={() => router.push('/blogs')}
              className={`group flex items-center gap-2 px-6 py-3 text-slate-300 hover:text-white border border-slate-600 hover:border-slate-400 rounded-lg transition-all duration-300 hover:bg-slate-800/50 ${theme === "dark" ? "text-slate-300" : "text-slate-900"}`}
            >
              <span className="text-sm font-medium">View More Blogs</span>
              <svg 
                className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
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
};
