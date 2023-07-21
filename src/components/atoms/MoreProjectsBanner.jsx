import React, { useState } from "react";
import Tilt from "react-parallax-tilt";
import { projects } from "../../constant";

function MoreProjectsBanner({ itemId }) {
  return (
    <Tilt
      style={{
        position: "relative",
        backgroundPosition: "center",
        transformStyle: "preserve-3d",
        backgroundSize: "cover",
        cursor: "pointer",
      }}
      className="h-[200px] my-5 min-w-[300px] bg-c-teal preserve-3d relative ml-[50px]  flex items-center"
      // tiltAngleXInitial={20}
      // tiltAngleYInitial={0}
      tiltMaxAngleX={25}
      tiltMaxAngleY={25}
      perspective={600}
      transitionSpeed={1200}
      scale={1.03}
      gyroscope={true}
      glareEnable={true}
      glarePosition="all"
      glareMaxOpacity={0.7}
      glareColor="#000000"
    >
      <div className="w-full h-full">
        <p
          style={{
            transform: "translateZ(50px)",
          }}
          className="py-2 border-b-[2px] max-w-[50%] whitespace-pre-wrap absolute left-[-24px] z-10 bottom-[16px] text-[16px] text-c-grey font-bold "
        >
          " work.title"
        </p>
        <div
          style={{
            background:
              "linear-gradient(43deg, #1E1E1E 2.02%, rgba(0, 0, 0, 0.00) 100%)",
          }}
          className="absolute  inset-0 opacity-[45%] "
        />
      </div>
    </Tilt>
  );
}

export default MoreProjectsBanner;
