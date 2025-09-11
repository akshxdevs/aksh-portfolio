'use client';

import { useState, useEffect } from 'react';
import { getTimeAgo, formatDate } from '../utils/timeUtils';

interface Blog {
  id: string;
  title: string;
  subtitle: string;
  createdOn: string;
  author: {
    id: string;
    name: string | null;
    email: string;
  };
  tags: string[];
  thumbnailImg?: string;
}

interface BlogResponse {
  blogs: Blog[];
}

export const BlogSection = () => {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        setLoading(true);
        // Replace with your actual backend URL
        const response = await fetch('http://localhost:3000/api/v1/blog/getblogs');
        
        if (!response.ok) {
          throw new Error('Failed to fetch blogs');
        }
        
        const data: BlogResponse = await response.json();
        setBlogs(data.blogs.slice(0, 6)); // Show only first 6 blogs
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
        console.error('Error fetching blogs:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  if (loading) {
    return (
      <div className="max-w-5xl mx-auto py-5">
        <div className="px-32">
          <h1 className="text-2xl text-slate-50 font-semibold mb-8">
            Recent Blogs
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[...Array(6)].map((_, index) => (
              <div key={index} className="bg-slate-800 rounded-lg p-6 animate-pulse">
                <div className="h-4 bg-slate-700 rounded mb-3"></div>
                <div className="h-3 bg-slate-700 rounded mb-2"></div>
                <div className="h-3 bg-slate-700 rounded w-2/3"></div>
              </div>
            ))}
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
      <div className="flex flex-col items-center justify-center px-8">
        <h1 className="text-2xl text-slate-50 font-semibold mb-8">
          Recent Blogs
        </h1>
        <div className="grid grid-cols-1 gap-6 w-1/2">
          {blogs.map((blog) => (
            <div className='max-w-full w-full p-4 border rounded-lg border-slate-700'>
              <div className="flex justify-between items-center mb-2">
                <div>
                  <h1 className="text-xl font-semibold text-slate-50">{blog.title}</h1>
                  <p className="text-slate-300 text-md">{blog.subtitle}</p>
                </div>
                <div>
                  <div className="text-slate-400 text-xs">{getTimeAgo(blog.createdOn)}</div>
                </div>
              </div>
              <div className='flex gap-2'>
                <p className="text-slate-400 text-xs">6 min read</p>
                <div className='relative top-2 w-1 h-1 border rounded-full bg-white'></div>
                <div className="text-slate-500 text-xs">{formatDate(blog.createdOn)}</div>
              </div>

            </div>
          ))}
        </div>
        {blogs.length > 0 && (
          <div className="flex text-center mt-8 gap-2">
            <button className="text-white rounded-lg hover:text-blue-700 transition-colors font-medium">
              View All Blogs
            </button>
            <button>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
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
