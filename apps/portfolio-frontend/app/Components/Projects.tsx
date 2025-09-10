"use client";
import axios from "axios";
import dayjs from "dayjs";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

export const Projects = () => {
  const router = useRouter();
  const [projects, setProjects] = useState<any[]>([0]);

  useEffect(() => {
    getAllProjects();
  }, []);

  const getAllProjects = async () => {
    try {
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
    }
  };
  return (
    <div className="max-w-5xl mx-auto py-5">
      <div className="flex flex-col justify-center items-center gap-3 pt-2 px-44">
        <h1 className="text-5xl text-slate-50 font-bold">Proof of work!</h1>
        <h2 className="text-2xl text-slate-200 font-semibold">
          things i’ve made real.
        </h2>
        <p className="text-center text-md text-zinc-400 font-normal">
          i’ve built, shipped, and scaled projects, from simple sites to full-on
          web & dApps. some started as experiments, some became real products.
          these are the ones that made it through.
        </p>
      </div>
      <div className="flex flex-col justify-center items-center mt-16">
        {projects.length > 0 && (
          <div className="w-fit h-fit grid grid-cols-2 gap-4 ">
            {projects.map((project) => (
              <div key={project.id} className="border border-zinc-800 mt-5 rounded-md pb-5">
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
                  <p>{project.description}</p>
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
      </div>
    </div>
  );
}
