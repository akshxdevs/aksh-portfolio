export const NewsLetter = () => {
  return (
    <div className="max-w-5xl mx-auto py-5">
      <div className="flex flex-col px-32">
        <h1 className="text-2xl text-slate-50 font-semibold">Newsletter</h1>
        <p className="text-md text-slate-300">
          get updates on my latest projects, blogs, and experiments. no spam,
          just what i’m building and thinking.
        </p>
        <div className="flex gap-4 p-3 border rounded-lg border-zinc-800 mt-4">
          <input
            type="text"
            placeholder="heisenberg"
            className="w-36 border border-zinc-600 rounded-md bg-transparent p-2"
          />
          <div className="flex justify-between  w-full border border-zinc-600 rounded-md ">
            <input
              type="email"
              placeholder="heisenberg.druglord@gmail.com"
              className="w-full outline-none bg-transparent p-2"
            />
            <button className="w-56 bg-orange-600 px-6 rounded-md font-semibold">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
