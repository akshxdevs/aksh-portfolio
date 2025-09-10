export const Contact = () => {
  return (
    <div className="max-w-5xl mx-auto py-5">
      <div className="flex flex-col gap-1 px-32">
        <h1 className="text-2xl text-slate-50 font-semibold">
          Hire Me, Meet Me, DM Me
        </h1>
        <p className="text-md text-slate-300">
          reach out for work, collabs, or just a chat on x. book a slot, or drop
          straight in.
        </p>
        <div className="flex gap-3 mt-2">
          <button className="border rounded-lg p-2">Hire me</button>
          <button className="border rounded-lg p-2">Book a meet</button>
          <button className="border rounded-lg p-2">Get in touch</button>
        </div>
      </div>
    </div>
  );
};
