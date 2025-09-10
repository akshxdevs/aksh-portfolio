import { AppBar } from "./Components/AppBar";
import { BlogSection } from "./Components/BlogSection";
import { Contact } from "./Components/Contact";
import { Footer } from "./Components/Footer";
import { MyIntro } from "./Components/MyIntro";
import { NavBar } from "./Components/NavBar";
import { NewsLetter } from "./Components/NewsLetter";
import { Projects } from "./Components/Projects";
import { ReachOut } from "./Components/ReachOut";
import { SupportSection } from "./Components/SupportSection";
import { TechStack } from "./Components/TechStack";

export default function Home() {
  return (
    <div>
      <div>
        <AppBar />
      </div>
      <div>
        {/* <MyIntro/> */}
      </div>
      <div>
        <TechStack/>
      </div>
      <div>
        <Projects/>
      </div>
      <div>
        <BlogSection/>
      </div>
      <div>
        <NewsLetter/>
      </div>
      <div>
        <ReachOut/>
      </div>
      <div>
        <Contact/>
      </div>
      <div>
        <SupportSection/>
      </div>
      <div>
        <Footer/>
      </div>
      <div className="fixed bottom-5 left-1/2 -translate-x-1/2 w-full">
        <NavBar />
      </div>
    </div>
  );
}
