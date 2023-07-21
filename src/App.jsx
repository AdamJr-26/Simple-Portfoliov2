import { useState } from "react";
import "react-horizontal-scrolling-menu/dist/styles.css";

import { BrowserRouter } from "react-router-dom";
import About from "./components/organisms/About";
import Home from "./components/organisms/Home";
import Works from "./components/organisms/Works";
import Skills from "./components/organisms/Skills";
import Contact from "./components/organisms/Contact";
import ParticlesJS from "./components/organisms/ParticleJS";
import Projects from "./components/organisms/Projects";
import MoreProjects from "./components/organisms/MoreProjects";
function App() {
  return (
    <BrowserRouter>
      <div className="relative  flex justify-center  overflow-hidden ">
        <div className="w-full -z-10 fixed inset-0">
          {/* particles bg */}
          <ParticlesJS />
        </div>
        <div className="w-full flex py-5 flex-col items-center">
          <div className="z-0 w-full max-w-[1280px] px-5 sm:px-10 ">
            <Home />
            <Works />
            <Projects />
          </div>
          <MoreProjects />
          <div className="z-0 w-full max-w-[1280px]  px-5 sm:px-10 ">
            <Skills />
            <Contact />
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
