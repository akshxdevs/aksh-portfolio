export const Contact = () => {
  return (
    <div className="max-w-5xl mx-auto py-5">
      <div className="flex flex-col gap-1 px-32">
        <h1 className="text-2xl text-slate-50 font-semibold">
          Hire Me, Meet Me, DM Me
        </h1>
        <h2 className="text-lg text-slate-200 font-normal">
          I’m currently available for internships, full-time opportunities, and
          freelance projects. If you’re looking for someone passionate, skilled,
          and ready to contribute, I’m here to help bring your ideas to life!
        </h2>
        <p className="text-md text-slate-300 mt-2">
          reach out for work, collabs, or just a chat on x. book a slot, or drop
          straight in.
        </p>
        <div className="flex gap-3 mt-2">
          <button className="border rounded-lg p-2">Hire me</button>
          <button className="border rounded-lg p-2">Get in touch</button>
        </div>
      </div>
    </div>
  );
};
