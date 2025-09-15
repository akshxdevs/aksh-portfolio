"use client";
import axios from "axios";
import dayjs from "dayjs";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useTheme } from "../contexts/ThemeContext";

export const Projects = () => {
  const router = useRouter();
  const [projects, setProjects] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const { theme } = useTheme();
  useEffect(() => {
    getAllProjects();
  }, []);

  const getAllProjects = async () => {
    try {
      setLoading(true);
      const res = await axios.get(
        "http://localhost:5000/projects/getallprojects"
      );
      if (res.data) {
        setProjects(res.data);
      } else {
        toast.error("No projects found!");
      }
    } catch (error) {
      console.log(error, "Something Went Wrong");
      toast.error("Failed to fetch projects");
    } finally {
      setLoading(false);
    }
  };

  const handleProject = (projectName: string) => {
    router.push(`/project/${projectName}`);
  };

  if (loading) {
    return (
      <div className="max-w-5xl mx-auto py-5">
      <div className="flex flex-col justify-center items-center gap-3 pt-2 px-44">
        <button
          className="btn-glow relative group"
          style={{ zIndex: 10 }}
        >
          <h1 className="px-2 py-1 rounded-md bg-zinc-800 text-gray-800 dark:text-white transition-colors duration-300 relative z-10">
            Proof of work
          </h1>
        </button>
        <h2
          className={`text-5xl font-semibold ${theme === "dark" ? "text-slate-200" : "text-slate-900"}`}
        >
          Check out my latest work
        </h2>
        <p
          className={`w-[70%] text-center text-md font-normal ${theme === "dark" ? "text-zinc-400" : "text-zinc-900"}`}
        >
          I've worked on a variety of projects, from simple websites to complex
          web applications. Here are a few of my favorites.
        </p>
      </div>
        <div className="flex flex-col justify-center items-center mt-16">
          <div className="w-2/3 h-fit grid grid-cols-2 gap-4">
            {[...Array(2)].map((_, index) => (
              <div
                key={index}
                className="border border-zinc-800 mt-5 rounded-md pb-5 shadow-lg shadow-black"
              >
                <div className="rounded-md w-full h-64 bg-gradient-to-r from-slate-700 via-slate-600 to-slate-700 animate-pulse bg-[length:200%_100%] animate-[shimmer_2s_ease-in-out_infinite]"></div>

                <div className="flex justify-between mt-10 px-5">
                  <div className="flex-1">
                    <div className="h-6 bg-gradient-to-r from-slate-700 via-slate-600 to-slate-700 rounded mb-2 animate-pulse bg-[length:200%_100%] animate-[shimmer_2s_ease-in-out_infinite]"></div>
                    <div className="h-4 bg-gradient-to-r from-slate-700 via-slate-600 to-slate-700 rounded w-3/4 animate-pulse bg-[length:200%_100%] animate-[shimmer_2s_ease-in-out_infinite]"></div>
                  </div>
                  <div className="ml-4">
                    <div className="h-6 bg-gradient-to-r from-green-700 via-green-600 to-green-700 rounded-xl w-20 animate-pulse bg-[length:200%_100%] animate-[shimmer_2s_ease-in-out_infinite]"></div>
                  </div>
                </div>

                <div className="px-5 py-3">
                  <div className="h-4 bg-gradient-to-r from-slate-700 via-slate-600 to-slate-700 rounded mb-2 animate-pulse bg-[length:200%_100%] animate-[shimmer_2s_ease-in-out_infinite]"></div>
                  <div className="h-4 bg-gradient-to-r from-slate-700 via-slate-600 to-slate-700 rounded w-5/6 animate-pulse bg-[length:200%_100%] animate-[shimmer_2s_ease-in-out_infinite]"></div>
                </div>

                <div className="flex gap-3 px-5 py-2">
                  <div className="h-10 bg-gradient-to-r from-slate-700 via-slate-600 to-slate-700 rounded-lg w-24 animate-pulse bg-[length:200%_100%] animate-[shimmer_2s_ease-in-out_infinite]"></div>
                  <div className="h-10 bg-gradient-to-r from-slate-700 via-slate-600 to-slate-700 rounded-lg w-20 animate-pulse bg-[length:200%_100%] animate-[shimmer_2s_ease-in-out_infinite]"></div>
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
            <span className="text-slate-400 text-sm ml-2">
              Loading projects...
            </span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto py-5">
      <div className="flex flex-col justify-center items-center gap-3 pt-2 px-44">
        <button
          className="btn-glow relative group"
          style={{ zIndex: 10 }}
        >
          <h1 className="px-2 py-1 rounded-md bg-zinc-200 text-zinc-800 transition-colors duration-300 relative z-10">
            Proof of work
          </h1>
        </button>
        <h2
          className={`text-5xl font-semibold ${theme === "dark" ? "text-slate-200" : "text-slate-900"}`}
        >
          Check out my latest work
        </h2>
        <p
          className={`w-[70%] text-center text-md font-normal ${theme === "dark" ? "text-zinc-400" : "text-zinc-900"}`}
        >
          I've worked on a variety of projects, from simple websites to complex
          web applications. Here are a few of my favorites.
        </p>
      </div>
      <div className="flex flex-col justify-center items-center mt-10">
        {projects.length > 0 && (
          <div className="w-2/3 h-1/2 grid grid-cols-2 gap-4">
            {projects.map((project) => (
              <div
                key={project.id}
                className={`btn-glow-projects relative group border ${theme === "dark" ? "shadow-black border-zinc-700" : "shadow-zinc-100 border-zinc-200"} mt-5 rounded-lg  shadow-lg cursor-pointer`}
                style={{ zIndex: 10 }}
              >
                <div className={`relative z-10 w-full h-full pb-4 rounded-lg ${theme === "dark" ? "bg-zinc-800" : "bg-zinc-100"}`}>
                  <div onClick={() => handleProject(project.title)}>
                    <img
                      src={project.imgUrl}
                      alt="projectImg"
                      className="rounded-t-lg w-full h-48 object-cover"
                    />
                    <div className="flex justify-between mt-5 px-5">
                      <div className="flex flex-col">
                        <h1 className="text-lg font-semibold">{project.title}</h1>
                        <p className="text-zinc-400">
                          {dayjs(project.createdAt).format("MMMM YYYY")}
                        </p>
                      </div>
                      <div className="flex items-center">
                        <p className="bg-green-200 text-green-700 px-2 py-1 rounded-xl text-sm font-semibold">
                          {project.status}
                        </p>
                      </div>
                    </div>
                    <div className="px-5 py-3">
                      <p>{project.intro}</p>
                    </div>
                  </div>

                  <div className="flex gap-3 px-5 ">
                    {theme === "dark" ? (
                      <button className="flex items-center gap-1 border border-zinc-600 rounded-lg px-2 py-1">
                        <a href={project.webUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                          <img
                            width="20"
                            height="20"
                            src="https://img.icons8.com/pulsar-line/50/FFFFFF/external-link.png"
                            alt="external-link"
                            />
                            Webiste
                        </a>
                      </button>
                    ) : (
                      <button className="flex items-center gap-1 border border-zinc-600 rounded-lg px-2 py-1">
                        <a href={project.webUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                          <img
                            width="20"
                            height="20"
                            src="https://img.icons8.com/pulsar-line/48/external-link.png"
                            alt="external-link"
                            className="transition-all duration-300 group-hover:brightness-110"
                            />
                          Webiste
                        </a>
                      </button>
                    )}
                    {theme === "dark" ? (
                      <button className="flex items-center gap-1 border border-zinc-600 rounded-lg px-2 py-1">
                        <a
                          href={project.githubLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2"
                        >
                          <img
                            width="30"
                            height="30"
                            src="https://img.icons8.com/ios-glyphs/30/FFFFFF/github.png"
                            alt="github"
                            className="transition-all duration-300 group-hover:brightness-110"
                          />
                          Source
                        </a>
                      </button>
                    ) : (
                      <button className="flex items-center gap-1 border border-zinc-600 rounded-lg px-2 py-1">
                        <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                          <img
                            width="30"
                            height="30"
                            src="https://img.icons8.com/sf-regular/48/github.png"
                            alt="github"
                            className="transition-all duration-300 group-hover:brightness-110"
                          />
                        </a>
                        Source
                      </button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
        {projects.length > 0 && (
          <div className="mt-12 flex justify-center">
            <button
              onClick={() => router.push("/projects")}
              className={`group flex items-center gap-2 px-6 py-3 text-slate-300 hover:text-white border border-slate-600 hover:border-slate-400 rounded-lg transition-all duration-300 hover:bg-slate-800/50 ${theme === "dark" ? "text-slate-300" : "text-slate-900"}`}
            >
              <span className="text-sm font-medium">View More Projects</span>
              <svg
                className={`w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 ${theme === "dark" ? "text-slate-300" : "text-slate-900"}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
