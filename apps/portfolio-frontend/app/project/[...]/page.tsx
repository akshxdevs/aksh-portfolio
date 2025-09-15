"use client";
import axios from "axios";
import dayjs from "dayjs";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useTheme } from "../../contexts/ThemeContext";

export default function ProjectPage() {
  const router = useRouter();
  const [project, setProject] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const { theme } = useTheme();
  const params = useParams();

  const projectName = Array.isArray(params[""])
    ? decodeURIComponent(params[""][0] || "")
    : decodeURIComponent(params[""] || "");

  useEffect(() => {
    if (projectName) {
      getProject();
    } else {
      setLoading(false);
    }
  }, [projectName]);

  const getProject = async () => {
    try {
      setLoading(true);
      const res = await axios.get(
        `${process.env.NEXT_PUBLIC_PORTFOLIO_API_URL}/projects/getproject/${encodeURIComponent(projectName)}`
      );

      if (res.data) {
        setProject(res.data);
        toast.success("Project fetched successfully!");
      } else {
        toast.error("Project not found!");
        router.push("/");
      }
    } catch (error) {
      console.error("Error fetching project:", error);
      toast.error("Failed to fetch project");
      router.push("/");
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen transition-colors duration-300" style={{backgroundColor: 'var(--background)', color: 'var(--foreground)'}}>
        <div className="max-w-5xl mx-auto py-32">
          {/* Back Button Skeleton */}
          <div className="flex gap-4 mb-8">
            <div className="flex items-center gap-2 px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg">
              <div className="w-5 h-5 bg-gray-300 dark:bg-gray-600 rounded animate-pulse"></div>
              <div className="w-20 h-4 bg-gray-300 dark:bg-gray-600 rounded animate-pulse"></div>
            </div>
          </div>

          {/* Project Content Skeleton */}
          <div className="flex flex-col justify-center items-center">
            <div className="w-full max-w-4xl">
              <div className="rounded-md pb-5">
                {/* Title and Date Skeleton */}
                <div className="flex flex-col justify-center items-center px-5 pb-5">
                  <div className="w-64 h-10 bg-gray-300 dark:bg-gray-600 rounded animate-pulse mb-2"></div>
                  <div className="w-32 h-4 bg-gray-300 dark:bg-gray-600 rounded animate-pulse"></div>
                </div>
                
                {/* Image Skeleton */}
                <div className="w-full h-96 bg-gray-300 dark:bg-gray-600 rounded-md animate-pulse mb-4"></div>

                {/* Description Skeleton */}
                <div className="px-5 py-3 mb-4">
                  <div className="space-y-2">
                    <div className="w-full h-4 bg-gray-300 dark:bg-gray-600 rounded animate-pulse"></div>
                    <div className="w-4/5 h-4 bg-gray-300 dark:bg-gray-600 rounded animate-pulse"></div>
                    <div className="w-3/4 h-4 bg-gray-300 dark:bg-gray-600 rounded animate-pulse"></div>
                  </div>
                </div>

                {/* Tech Stack and Links Skeleton */}
                <div className="px-5 flex justify-between items-end">
                  {/* Tech Stack Skeleton */}
                  <div className="flex flex-wrap gap-2 justify-center items-center">
                    <div className="w-16 h-8 bg-gray-300 dark:bg-gray-600 rounded-lg animate-pulse"></div>
                    <div className="w-20 h-8 bg-gray-300 dark:bg-gray-600 rounded-lg animate-pulse"></div>
                    <div className="w-14 h-8 bg-gray-300 dark:bg-gray-600 rounded-lg animate-pulse"></div>
                    <div className="w-18 h-8 bg-gray-300 dark:bg-gray-600 rounded-lg animate-pulse"></div>
                  </div>
                  
                  {/* Links Skeleton */}
                  <div className="flex justify-center items-center gap-3">
                    <div className="flex items-center gap-1 border border-gray-300 dark:border-gray-600 rounded-lg p-1">
                      <div className="w-5 h-5 bg-gray-300 dark:bg-gray-600 rounded animate-pulse"></div>
                      <div className="w-16 h-4 bg-gray-300 dark:bg-gray-600 rounded animate-pulse"></div>
                    </div>
                    <div className="flex items-center gap-1 border border-gray-300 dark:border-gray-600 rounded-lg p-1">
                      <div className="w-5 h-5 bg-gray-300 dark:bg-gray-600 rounded animate-pulse"></div>
                      <div className="w-12 h-4 bg-gray-300 dark:bg-gray-600 rounded animate-pulse"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (!project) {
    return (
      <div className="min-h-screen transition-colors duration-300" style={{backgroundColor: 'var(--background)', color: 'var(--foreground)'}}>
        <div className="max-w-5xl mx-auto py-32 flex flex-col justify-center items-center gap-4">
          <div className="text-6xl">😞</div>
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-white">Project Not Found</h2>
          <p className="text-gray-600 dark:text-gray-400">The project you're looking for doesn't exist.</p>
          <button 
            onClick={() => router.push("/")}
            className="px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-colors duration-200"
          >
            Back to Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen transition-colors duration-300" style={{backgroundColor: 'var(--background)', color: 'var(--foreground)'}}>
    <div className="max-w-5xl mx-auto py-32">
        <div className="flex gap-4 mb-8">
          <button 
            onClick={() => router.push("/")}
            className="flex items-center gap-2 px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200"
          >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
              className="size-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6.75 15.75 3 12m0 0 3.75-3.75M3 12h18"
            />
          </svg>
            <span className="text-gray-800 dark:text-white">Back to Main</span>
        </button>
      </div>

      <div className="flex flex-col justify-center items-center">
        <div className="w-fit h-fit">
          <div className="mt-5 rounded-md pb-5">
            <div className="flex flex-col justify-center items-center px-5 pb-5">
                <h1 className="text-4xl font-semibold text-gray-800 dark:text-white">{project.title}</h1>
                <p className="text-gray-600 dark:text-gray-400">
                {dayjs(project.createdAt).format("MMMM YYYY")}
              </p>
            </div>
            <img
              src={project.imgUrl}
              alt="projectImg"
              className="rounded-md w-full h-96 object-cover"
            />

            <div className="px-5 py-3">
                <p className="text-gray-700 dark:text-gray-300">{project.description}</p>
            </div>
            <div className="flex justify-between">
              <div className="flex flex-wrap gap-2 justify-center items-center">
                {project.techStack.map((tag: any) => (
                  <p
                    key={tag}
                      className="border border-gray-300 dark:border-gray-600 rounded-lg px-3 py-1 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors text-gray-800 dark:text-white"
                  >
                    {tag}
                  </p>
                ))}
              </div>
              <div className="flex justify-center items-center gap-3">
                <a
                  href={project.webUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                    className="flex items-center gap-1 border border-gray-300 dark:border-gray-600 rounded-lg p-1 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                >
                  {theme === "dark" ? (
                    <img
                      width="20"
                      height="20"
                      src="https://img.icons8.com/pulsar-line/50/FFFFFF/external-link.png"
                      alt="external-link"
                    />
                  ) : (
                    <img
                      width="20"
                      height="20"
                      src="https://img.icons8.com/pulsar-line/48/external-link.png"
                      alt="external-link"
                      className="transition-all duration-300 group-hover:brightness-110"
                    />
                  )}
                    <span className="text-gray-800 dark:text-white">Website</span>
                </a>
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                    className="flex items-center gap-1 border border-gray-300 dark:border-gray-600 rounded-lg p-1 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                >
                  {theme === "dark" ? (
                    <img
                      width="20"
                      height="20"
                      src="https://img.icons8.com/ios-glyphs/30/FFFFFF/github.png"
                      alt="github"
                      className="transition-all duration-300 group-hover:brightness-110"
                    />
                  ) : (
                    <img
                      width="20"
                      height="20"
                      src="https://img.icons8.com/sf-regular/48/github.png"
                      alt="github"
                      className="transition-all duration-300 group-hover:brightness-110"
                    />
                  )}
                    <span className="text-gray-800 dark:text-white">Source</span>
                </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
