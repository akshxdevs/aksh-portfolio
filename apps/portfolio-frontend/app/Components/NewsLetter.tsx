export const NewsLetter = () => {
  return (
    <div className="max-w-5xl mx-auto py-5">
      <div className="flex flex-col px-32">
        <h1 className="text-2xl text-slate-50 font-semibold">Newsletter</h1>
          <p className="text-md text-slate-300">
          get updates on my latest projects, blogs, and experiments. no spam,
          just what i’m building and thinking.
        </p>
        <div className="flex gap-4 p-5 border rounded-lg border-zinc-700 mt-4">
            <input type="text" placeholder="heisenberg" className="w-36 border border-zinc-600 rounded-md bg-none p-2"/>
            <input type="text" placeholder="heisenberg.druglord@gamil.com" className="w-full border border-zinc-600 rounded-md bg-none p-2"/>
            <button className="w-60 bg-orange-600 px-6 rounded-lg font-semibold">Subscribe</button>
        </div>
      </div>
    </div>
  );
};
