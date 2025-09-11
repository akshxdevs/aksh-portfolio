"use client";
import axios from "axios";
import dayjs from "dayjs";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

export const Projects = () => {
  const router = useRouter();
  const [projects, setProjects] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getAllProjects();
  }, []);

  const getAllProjects = async () => {
    try {
      setLoading(true);
      const res = await axios.get(
        "http://localhost:5000/projects/getallprojects"
      );
      if (res.data && res.data.length > 0) {
        setProjects(res.data);
        console.log(res.data);

        toast.success("Projects fetched successfully!");
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
    router.push(`/project/${projectName}`)
  }

  if (loading) {
    return (
      <div className="max-w-5xl mx-auto py-5">
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
          <div className="w-2/3 h-fit grid grid-cols-2 gap-4">
            {[...Array(2)].map((_, index) => (
              <div key={index} className="border border-zinc-800 mt-5 rounded-md pb-5 shadow-lg shadow-black">
                {/* Image skeleton */}
                <div className="rounded-md w-full h-64 bg-gradient-to-r from-slate-700 via-slate-600 to-slate-700 animate-pulse bg-[length:200%_100%] animate-[shimmer_2s_ease-in-out_infinite]"></div>
                
                {/* Content skeleton */}
                <div className="flex justify-between mt-10 px-5">
                  <div className="flex-1">
                    <div className="h-6 bg-gradient-to-r from-slate-700 via-slate-600 to-slate-700 rounded mb-2 animate-pulse bg-[length:200%_100%] animate-[shimmer_2s_ease-in-out_infinite]"></div>
                    <div className="h-4 bg-gradient-to-r from-slate-700 via-slate-600 to-slate-700 rounded w-3/4 animate-pulse bg-[length:200%_100%] animate-[shimmer_2s_ease-in-out_infinite]"></div>
                  </div>
                  <div className="ml-4">
                    <div className="h-6 bg-gradient-to-r from-green-700 via-green-600 to-green-700 rounded-xl w-20 animate-pulse bg-[length:200%_100%] animate-[shimmer_2s_ease-in-out_infinite]"></div>
                  </div>
                </div>
                
                {/* Description skeleton */}
                <div className="px-5 py-3">
                  <div className="h-4 bg-gradient-to-r from-slate-700 via-slate-600 to-slate-700 rounded mb-2 animate-pulse bg-[length:200%_100%] animate-[shimmer_2s_ease-in-out_infinite]"></div>
                  <div className="h-4 bg-gradient-to-r from-slate-700 via-slate-600 to-slate-700 rounded w-5/6 animate-pulse bg-[length:200%_100%] animate-[shimmer_2s_ease-in-out_infinite]"></div>
                </div>
                
                {/* Buttons skeleton */}
                <div className="flex gap-3 px-5 py-2">
                  <div className="h-10 bg-gradient-to-r from-slate-700 via-slate-600 to-slate-700 rounded-lg w-24 animate-pulse bg-[length:200%_100%] animate-[shimmer_2s_ease-in-out_infinite]"></div>
                  <div className="h-10 bg-gradient-to-r from-slate-700 via-slate-600 to-slate-700 rounded-lg w-20 animate-pulse bg-[length:200%_100%] animate-[shimmer_2s_ease-in-out_infinite]"></div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Loading indicator */}
          <div className="mt-8 flex items-center gap-2">
            <div className="flex gap-1">
              <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce [animation-delay:-0.3s]"></div>
              <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce [animation-delay:-0.15s]"></div>
              <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce"></div>
            </div>
            <span className="text-slate-400 text-sm ml-2">Loading projects...</span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto py-5">
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
        {projects.length > 0 && (
          <div className="w-2/3 h-fit grid grid-cols-2 gap-4">
            {projects.map((project) => (
              <div onClick={()=>handleProject(project.title)} key={project.id} className="border border-zinc-800 mt-5 rounded-md pb-5 shadow-lg shadow-black">
                <img
                  src={project.imgUrl}
                  alt="projectImg"
                  className="rounded-md w-full h-64 object-cover"
                />
                <div className="flex justify-between mt-10 px-5">
                  <div>
                    <h1 className="text-lg font-semibold">{project.title}</h1>
                    <p className="text-zinc-400">{dayjs(project.createdAt).format("MMMM YYYY")}</p>
                  </div>
                  <div className="flex items-center"><p className="bg-green-200 text-green-700 px-2 py-1 rounded-xl text-sm font-semibold">{project.status}</p></div>
                </div>
                <div className="px-5 py-3">
                  <p>{project.intro}</p>
                </div>
                <div className="flex gap-3 px-5 py-2">
                  <button className="flex items-center gap-1 border border-zinc-600 rounded-lg p-2">
                    <img
                      width="20"
                      height="20"
                      src="https://img.icons8.com/pulsar-line/50/FFFFFF/external-link.png"
                      alt="external-link"
                    />
                    Webiste
                  </button>
                  <button className="flex items-center gap-1 border border-zinc-600 rounded-lg p-2">
                    <img
                      width="30"
                      height="30"
                      src="https://img.icons8.com/ios-glyphs/30/FFFFFF/github.png"
                      alt="github"
                      className="transition-all duration-300 group-hover:brightness-110"
                    />
                    Source
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
        {projects.length > 0 && (
          <div className="mt-12 flex justify-center">
            <button 
              onClick={() => router.push('/projects')}
              className="group flex items-center gap-2 px-6 py-3 text-slate-300 hover:text-white border border-slate-600 hover:border-slate-400 rounded-lg transition-all duration-300 hover:bg-slate-800/50"
            >
              <span className="text-sm font-medium">View More Projects</span>
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
      </div>
    </div>
  );
}
