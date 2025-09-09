export const NavBar = () => {
  return (
    <div className="w-full max-w-fit mx-auto px-6 py-4">
      <div className="flex items-center gap-3 px-3 py-2 border border-gray-600 rounded-xl bg-zinc-900">
        <div>
          <button>
<img width="30" height="30" src="https://img.icons8.com/ios-glyphs/30/FFFFFF/cryptocurrency.png" alt="cryptocurrency"/>
          </button>
        </div>
        <div>
          <button>
            <img
              width="30"
              height="30"
              src="https://img.icons8.com/ios/50/FFFFFF/twitterx--v2.png"
              alt="twitterx--v2"
            />
          </button>
        </div>
        <div>
          <button>
            <img
              width="30"
              height="30"
              src="https://img.icons8.com/ios-filled/50/FFFFFF/linkedin.png"
              alt="linkedin"
            />
          </button>
        </div>
        <div>
          <button>
            <img
              width="24"
              height="24"
              src="https://img.icons8.com/external-tal-revivo-light-tal-revivo/24/FFFFFF/external-level-up-your-coding-skills-and-quickly-land-a-job-logo-light-tal-revivo.png"
              alt="external-level-up-your-coding-skills-and-quickly-land-a-job-logo-light-tal-revivo"
            />
          </button>
        </div>
        <div>
          <button>
            <img
              width="30"
              height="30"
              src="https://img.icons8.com/ios-glyphs/30/FFFFFF/github.png"
              alt="github"
            />
          </button>
        </div>
        <div>
          <img
            width="25"
            height="35"
            src="https://img.icons8.com/ios/50/FFFFFF/vertical-line.png"
            alt="vertical-line"
          />
        </div>
        <div>
          <button className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="size-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};
