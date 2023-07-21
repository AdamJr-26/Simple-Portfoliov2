import React, { useState, useEffect } from "react";
import MoreProjectsBanner from "../atoms/MoreProjectsBanner";
import { useScroll, useGesture, usePinch } from "@use-gesture/react";

import { animated, useSpring } from "@react-spring/web";
function MoreProjects() {
  // animation effect
  const [scrollStyle, set] = useSpring(() => ({
    transform: "perspective(500px) rotateY(0deg)",
  }));

const bind = useScroll(event => {
    set.start({
      transform: `perspective(500px) rotateY(${
        event.scrolling ? clamp(event.delta[0]) : 0
      }deg)`
    });
  });
  const clamp = (value, clampAt = 30) => {
    if (value > 0) {
      return value > clampAt ? clampAt : value;
    } else {
      return value < -clampAt ? -clampAt : value;
    }
  };
  
  const [paddingOffset, setPaddingOffset] = useState(0);
  useEffect(() => {
    const updatePaddingOffset = () => {
      const innerWidth = window.innerWidth;
      const maxWidth = 1280;
      const totalMargin =
        innerWidth > maxWidth ? innerWidth - maxWidth + 40 : 40;
      const paddingOffset = totalMargin / 2 + 40;
      setPaddingOffset(paddingOffset);
    };

    // Initial update
    updatePaddingOffset();

    // Add a resize event listener to update on window resize
    window.addEventListener("resize", updatePaddingOffset);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("resize", updatePaddingOffset);
    };
  }, []);

  return (
    <div className="z-0  relative  max-w-[100vw] w-[100vw]  justify-between min-h-[200px]">
      <div className="flex flex-col items-center h-full w-full mx-5 sm:mx-10 absolute inset-0">
        <div className="h-full w-full  max-w-[1280px] ml-[8px]">
          <div className=" h-full w-[2px] bg-c-teal" />
        </div>
      </div>
      <div
        style={{
          paddingLeft: `${paddingOffset}px`,
        }}
        className=" scroll-smooth h-full overflow-x-scroll flex items-center gap-5  py-2"
      {...bind()}
      >
        {[1, 2, 3, 4].map((project, i) => (
          <animated.div
            key={i}
            style={{ ...scrollStyle }}
            className="relative rounded-2xl flex-shrink-0 min-w-[350px] max-h-[200px] min-h-[200px] bg-c-black"
          ></animated.div>
        ))}
      </div>
    </div>
  );
}

export default MoreProjects;
