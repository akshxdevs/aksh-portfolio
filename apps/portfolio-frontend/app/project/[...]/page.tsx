"use client";
import axios from "axios";
import dayjs from "dayjs";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

export default function ProjectPage() {
  const router = useRouter();
  const [project, setProject] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const params = useParams();
  
  // For catch-all routes [...], the params are under an empty string key
  const projectName = Array.isArray(params[""]) 
    ? decodeURIComponent(params[""][0] || "")
    : decodeURIComponent(params[""] || "");
  
  console.log("Decoded projectName:", projectName);
  
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
      console.log("Fetching project:", projectName); 
      const res = await axios.get(
        `http://localhost:5000/projects/getproject/${encodeURIComponent(projectName)}`
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

  // Loading state
  if (loading) {
    return (
      <div className="max-w-5xl mx-auto py-32 flex justify-center items-center">
        <div className="text-white text-xl">Loading project...</div>
      </div>
    );
  }

  // No project found
  if (!project) {
    return (
      <div className="max-w-5xl mx-auto py-32 flex justify-center items-center">
        <div className="text-white text-xl">Project not found</div>
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
        <h1 className="text-5xl text-slate-50 font-bold">Proof of work!</h1>
        <h2 className="text-2xl text-slate-200 font-semibold">
          things i've made real.
        </h2>
        <p className="text-center text-md text-zinc-400 font-normal">
          i've built, shipped, and scaled projects, from simple sites to full-on
          web & dApps. some started as experiments, some became real products.
          these are the ones that made it through.
        </p>
      </div>
      
      <div className="flex flex-col justify-center items-center mt-16">
        <div className="w-fit h-fit">
          <div className="border border-zinc-800 mt-5 rounded-md pb-5">
            <img
              src={project.imgUrl}
              alt="projectImg"
              className="rounded-md w-full h-64 object-cover"
            />
            <div className="flex justify-between mt-10 px-5">
              <div>
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
              <p>{project.description}</p>
            </div>
            <div className="flex gap-3 px-5 py-2">
              <a 
                href={project.webUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-1 border border-zinc-600 rounded-lg p-2 hover:bg-zinc-800 transition-colors"
              >
                <img
                  width="20"
                  height="20"
                  src="https://img.icons8.com/pulsar-line/50/FFFFFF/external-link.png"
                  alt="external-link"
                />
                Website
              </a>
              <a 
                href={project.githubLink} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-1 border border-zinc-600 rounded-lg p-2 hover:bg-zinc-800 transition-colors"
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
