import React from 'react'

function Skills() {
  return (
    <section
    id="skill"
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
        <div className="relative ml-[10px]">
          <p className="absolute text-c-teal text-[300px] top-[0px] left-[50%] opacity-25 font-bold whitespace-nowrap ">
            SKILLS
          </p>
          <div>
            <p className="text-[48px] font-bold text-c-grey">
              SKILLS
            </p>
            <p className="text-[#A0A0A0]">
              A short introduction about my skills. yeah it should not take too
              long.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Skills