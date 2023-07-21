import React from "react";
import ProjectBanner from "../atoms/ProjectBanner";
import { works, projects } from "../../constant/index";
function Works() {
  return (
    <section
      id="work"
      className="w-full flex flex-col justify-between min-h-[100vh]"
    >
      <div className="flex-1 flex w-full ">
        <div className="flex ml-[4px] flex-col  items-center">
          <div className="h-full w-[2px] bg-c-teal" />
        </div>
        <div className="flex mt-[25px] ">
          <div className="flex ml-[-6px] flex-col  items-center">
            <div className=" h-[10px] w-[10px] border-[2px] border-c-teal bg-c-dark rounded-full" />
          </div>
          <div className="relative sm:ml-[10px] flex flex-col gap-10">
            <p className="absolute text-c-teal text-[300px] top-[0px] left-[50%] opacity-25 font-bold whitespace-nowrap ">
              WORK EXPERIENCE
            </p>
            <div>
              <p className="text-[48px] font-bold text-c-grey">
                WORK EXPERIENCE
              </p>

              <p className="text-[#A0A0A0]">
                A short introduction about my works. yeah it should not take too
                long.
              </p>
            </div>
            <div className="flex flex-col gap-10">
              {works.map((work, i) => (
                <div key={i} className=" flex flex-col gap-10">
                  <div className="">
                    <div className="flex flex-wrap items-center">
                      <p className="text-[16px] font-bold text-c-grey mr-2">
                        {work.role}
                      </p>
                      <p className="h-[5px] w-[5px] bg-c-grey rounded-full mr-2"></p>
                      <p className="text-[16px] font-bold text-c-grey">
                        {work.company}
                      </p>
                    </div>
                    <p className="text-[#A0A0A0] font-medium text-[14px]">
                      {work.date}
                    </p>
                  </div>
                  <ProjectBanner work={work} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Works;
