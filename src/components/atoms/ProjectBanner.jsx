import React, { useState } from "react";
import Tilt from "react-parallax-tilt";
function ProjectBanner({ work }) {
  const [backgroundImage, setBackgroundImage] =useState(work.images[0])

  return (
    <Tilt
      tiltMaxAngleX={25}
      tiltMaxAngleY={25}
      perspective={600}
      transitionSpeed={1200}
      scale={1}
      gyroscope={true}
      glareEnable={true}
      glarePosition="all"
      glareMaxOpacity={0.7}
      glareColor="#000000"
      // glareBorderRadius="30px"
      style={{
        backgroundImage: `url(${work.images[0]})`,
        backgroundPosition: "center",
        transformStyle: "preserve-3d",
        backgroundSize: "cover",
        cursor: "pointer"

      }}
      className="preserve-3d relative ml-[50px]  flex items-center h-[300px] "
    >
      <p
        style={{
          transform: "translateZ(50px)",
        }}
        className="py-2 border-b-[5px] max-w-[50%] whitespace-pre-wrap absolute left-[-24px] z-10 bottom-[24px] text-[24px] text-c-grey font-bold "
      >
        {work.title}
      </p>

      <div style={{
        background: "linear-gradient(43deg, #1E1E1E 2.02%, rgba(0, 0, 0, 0.00) 100%)"

      }}  className="absolute  inset-0 opacity-[45%] " />
    </Tilt>
  );
}

export default ProjectBanner;
