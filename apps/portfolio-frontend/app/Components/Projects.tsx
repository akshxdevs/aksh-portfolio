export const Projects = () => {
  return (
    <div className="max-w-5xl mx-auto pt-10">
      <div className="flex flex-col justify-center items-center gap-3 pt-2 px-44">
        <h1 className="text-5xl text-slate-50 font-bold">Proof of work!</h1>
        <h2 className="text-2xl text-slate-200 font-semibold">
          things i’ve made real.
        </h2>
        <p className="text-center text-md text-zinc-400 font-normal">
          i’ve built, shipped, and scaled projects, from simple sites to
          full-on web & dApps. some started as experiments, some became real
          products. these are the ones that made it through.
        </p>
      </div>
      <div>
        {/* {backend api code here to fetch & display projects!} */}
      </div>
    </div>
  );
};
