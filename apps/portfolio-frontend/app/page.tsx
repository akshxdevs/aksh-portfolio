'use client';
import { useState, useEffect } from 'react';
import { AppBar } from "./Components/AppBar";
import { AnimatedBackground } from "./Components/AnimatedBackground";
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
      <div className="relative z-10">
        <AppBar />
      </div>
      <AnimatedBackground />
      <div className="relative z-10">
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
      
      <div className="fixed bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white/20 via-white/10 to-transparent dark:from-gray-900/20 dark:via-gray-900/10 dark:to-transparent pointer-events-none z-10"></div>
      <div className="fixed bottom-5 left-1/2 -translate-x-1/2 z-20">
        <NavBar />
      </div>
    </div>
  );
}
