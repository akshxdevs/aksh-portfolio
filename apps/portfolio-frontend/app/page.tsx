import { AppBar } from "./Components/AppBar";
import { BlogSection } from "./Components/BlogSection";
import { Contact } from "./Components/Contact";
import { Education } from "./Components/Education";
import { Experience } from "./Components/Experience";
import { Footer } from "./Components/Footer";
import { GitHubContributionGraph } from "./Components/GitHubContributionGraph";
import { MyIntro } from "./Components/MyIntro";
import { NavBar } from "./Components/NavBar";
import { NewsLetter } from "./Components/NewsLetter";
import { Projects } from "./Components/Projects";
import { ReachOut } from "./Components/ReachOut";
import { SupportSection } from "./Components/SupportSection";
import { TechStack } from "./Components/TechStack";

export default function Home() {
  return (
    <div className="min-h-screen transition-colors duration-300" style={{backgroundColor: 'var(--background)', color: 'var(--foreground)'}}>
      <div>
        <AppBar />
      </div>
      <div>
        <MyIntro />
      </div>
      <div>
        <TechStack />
      </div>
      <div>
        <Experience />
      </div>
      <div>
        <Projects />
      </div>
      <div>
        <GitHubContributionGraph />
      </div>
      <div>
        <Education />
      </div>
      <div>
        <BlogSection />
      </div>
      <div>
        <Contact />
      </div>
      <div>
        <NewsLetter />
      </div>
      <div>
        <ReachOut />
      </div>
      <div>
        <SupportSection />
      </div>
      <div>
        <Footer />
      </div>
      <div className="fixed bottom-5 left-1/2 -translate-x-1/2">
        <NavBar />
      </div>
    </div>
  );
}
