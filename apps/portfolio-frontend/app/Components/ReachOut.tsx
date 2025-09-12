export const ReachOut = () => {
  return (
    <div className="max-w-5xl mx-auto py-5">
      <div className="flex flex-col justify-center items-center px-32">
        <h1 className="text-4xl text-slate-50 font-semibold">Get in Touch</h1>
      </div>
      <div className="px-44 py-10">
        <p className="text-2xl text-zinc-200">Got questions? Talk to me.</p>
        <div className="flex space-x-4 mt-4">
          <button className="border rounded-lg p-2">Book a meet</button>
          <button className="border rounded-lg p-2 hover:bg-gradient-to-r hover:from-blue-400 hover:to-blue-800 transition-all duration-300">
            <a href={`https://x.com/akshxdevs`} target="_blank" rel="noopener noreferre" className="flex items-center gap-1">
              <img
                  width="20"
                  height="20"
                  src="https://img.icons8.com/ios/50/FFFFFF/twitterx--v2.png"
                  alt="twitterx--v2"
                  className="transition-all duration-300 group-hover:brightness-110"
                />
              Chat on twitter
            </a>
          </button>
        </div>
      </div>
      <div className="px-44">
        <h1 className="text-2xl text-slate-50 font-semibold">Reach Me by Email</h1>
        <form
          action="https://getform.io/f/bdrnmkxb"
          method="POST"
          className="w-full flex flex-col gap-3 mt-4"
        >
          <h2>Your Email</h2>
          <input
            type="email"
            name="email"
            required
            className="w-full px-4 py-3 text-black bg-slate-50 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-400 shadow-sm transition-all duration-300"
            placeholder="Your Email"
          />
          <h2>Your Message</h2>
          <textarea
            name="message"
            required
            placeholder="Drop a message, let’s connect!"
            className="w-full px-4 py-3 h-32 text-black bg-slate-50 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-400 shadow-sm transition-all duration-300 resize-none"
          />
          <button
            type="submit"
            className="w-full px-6 py-3 bg-gradient-to-r from-zinc-700 to-black text-white font-medium rounded-lg shadow-md hover:from-zinc-70 hover:to-black transition-all duration-300 hover:shadow-lg hover:-translate-y-1 active:scale-95"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};
