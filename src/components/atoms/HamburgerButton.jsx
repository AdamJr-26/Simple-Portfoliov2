import React from "react";

function HamburgerButton({ toggle, setToggle }) {
  return (
    <div onClick={() => setToggle(!toggle)} className="rounde-xl cursor-pointer">
      <div className="relative flex flex-col h-[40px] justify-between mr-[10px]">
        <div
          className={`${
            toggle ? "h-[10px] w-[10px] rounded-full top-[50%] right-[45%] translate-x-[65%] " : "top-[50%] h-[2px] w-[30px] right-[-10px] "
          }absolute   bg-c-grey transform ease-in origin-right translate-y-[-50%] transition-all duration-[600ms]`}
        ></div>
        <div
          className={`${
            toggle ? "rotate-[-45deg]  " : "rotate-[0deg]"
          } flex  flex-row items-center transform ease-in origin-right  transition-all duration-[600ms]`}
        >
          <div className="w-[30px] h-[2px] bg-c-grey"></div>
          <div className="h-[10px] w-[10px] rounded-full bg-c-grey"></div>
        </div>
        <div
          className={`${
            toggle ? "rotate-[45deg]  " : "rotate-[0deg] "
          } flex  flex-row items-center transform ease-in origin-right  transition-all duration-[600ms]`}
        >
          <div className="w-[30px] h-[2px] bg-c-grey"></div>
          <div className="h-[10px] w-[10px] rounded-full bg-c-grey"></div>
        </div>
      </div>
    </div>
  );
}

export default HamburgerButton;
