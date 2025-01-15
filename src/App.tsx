import { FC, useRef } from "react";

import AnimatedBackground from "@components/ui/Animatedbackground";
// import AnimatedBackground from "@components/ui/Animatedbackground";
import { BrowserRouter } from "react-router-dom";
import ChatbotEmbed from "./ChatBot";
import Contact from "@components/pages/Contact";
import Experience from "@components/pages/Experience";
import Hero from "@components/pages/Hero";
import Navbar from "@ui/NavBar";
import Portfolio from "@components/pages/Portfolio";
import Projects from "@components/pages/Projects";
import Tech from "@components/pages/Tech";

const App: FC = () => {
  const wrapperRef = useRef<HTMLDivElement | null>(null);

  return (
    <BrowserRouter>
      <div className="relative z-0 bg-[#fee440] w-full h-full">
        <Navbar />
        <ChatbotEmbed />
        <div className="wrapper" ref={wrapperRef}>
          <div id="hero" className="z-10">
            <Hero scrollContainer={wrapperRef} />
          </div>
          <div className="relative z-30 mt-[-2px]">
            <AnimatedBackground>
              <div
                id="portfolio"
                className="relative z-30 lg:px-16 md:px-12 sm:px-8 min-h-full"
              >
                <Portfolio />
              </div>

              <div
                id="experience"
                className="relative z-30 lg:px-16 md:px-12 sm:px-8 min-h-full"
              >
                <Experience />
              </div>

              <div
                id="projects"
                className="relative z-30 lg:px-16 md:px-12 sm:px-8 min-h-full"
              >
                <Projects />
              </div>

              <div
                id="tech"
                className="relative z-30 lg:px-16 md:px-12 sm:px-8 min-h-full"
              >
                <Tech />
              </div>

              <div
                id="contact"
                className="relative z-30 lg:px-16 md:px-12 sm:px-8 min-h-full"
              >
                <Contact />
              </div>
            </AnimatedBackground>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
