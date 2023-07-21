import React from "react";
import Navbar from "../molecules/Navbar";
import Logo from "../atoms/Logo";
import ContactLinks from "../atoms/ContactLinks";

function Home() {
  return (
    <section
      id="home"
      className="w-full flex flex-col justify-between min-h-[100vh]"
    >
      <div className="w-full flex flex-row justify-between ">
        <Logo />
        <Navbar />
      </div>
      <div className="flex-1" />
      <div className="flex-1 flex w-full ">
        <div className="flex flex-col items-center">
          <div className="h-[10px] w-[10px] border-[2px] border-c-teal bg-c-dark rounded-full" />
          <div className="h-full w-[2px] bg-c-teal" />
        </div>
        <div className="flex flex-col justify-between gap-5 ml-[10px]">
          <div>
            <div>
              <p className="text-[16px] text-[#A0A0A0] tracking-[2px]">
                <span>{"<"}</span>
                <span >Start</span>
                <span>{" />"}</span>
              </p>
            </div>
            <div>
              <div className=" font-bold tracking-[5px]">
                <span className="text-c-grey text-[48px] ">Hi, I'm</span>
                <span className="text-c-teal text-[64px]"> Adam</span>
              </div>
            </div>
            <div className="max-w-[720px]">
              <p className="text-[16px] font-meidum sm:text-[24px] tracking-[2px] text-c-grey">
                I am currently looking for an opportunity to show off my best
                potential in <span className="font-bold">web development</span>.
              </p>
            </div>
          </div>
          <div className="mb-20">
            <ContactLinks />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
