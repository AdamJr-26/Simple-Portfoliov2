import React, { useEffect, useState } from "react";
import NavLink from "../atoms/NavLink";
import { navLinks } from "../../constant";
import HamburgerButton from "../atoms/HamburgerButton";
function Navbar() {
  const [active, setActive] = useState("");

  // useEffect(() => {
  //   const handleScroll = () => {
  //     const scrollTop = window.scrollY;
  //     if (scrollTop > 100) {
  //       setScrolled(true);
  //     } else {
  //       setScrolled(false);
  //     }
  //   };

  //   window.addEventListener("scroll", handleScroll);

  //   return () => window.removeEventListener("scroll", handleScroll);
  // }, []);

  // DETECTS IF MOBILE
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width:640px)");
    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };
    mediaQuery.addEventListener("change", handleMediaQueryChange);
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  const [toggle, setToggle] = useState(false);

  return (
    <>
      {isMobile ? (
        <nav
          className={`${
            toggle
              ? "bg-c-black bg-opacity-100 inset-0 h-full "
              : "bg-opacity-0 bg-none max-h-[60px] "
          } z-20 items-end  flex flex-col gap-5 right-0 bg-none  overflow-hidden top-0 duration-[600ms] fixed`}
        >
          <div className="mt-[15px] mr-[15px]">
            <HamburgerButton setToggle={setToggle} toggle={toggle} />
          </div>
          <ul className="flex flex-col  justify-end gap-5 text-end mr-[25px]">
            {navLinks.map((navlink, i) => (
              <li
                key={i}
                className={`${
                  toggle ? "opacity-1 " : "opacity-0"
                }  cursor-pointer border-c-black transition-all duration-[600ms] border-[1px]  hover:border-[1px] hover:border-c-teal px-5 py-2`}
                onClick={() => setToggle(!toggle)}
              >
                <NavLink
                  setToggle={setToggle}
                  to={navlink.to}
                  label={navlink.label}
                />
              </li>
            ))}
          </ul>
        </nav>
      ) : (
        <nav className="flex flex-row ">
          <ul className="flex flex-row  items-center justify-end gap-5">
            {navLinks.map((navlink, i) => (
              <li key={i}>
                <NavLink
                  setToggle={setToggle}
                  to={navlink.to}
                  label={navlink.label}
                />
              </li>
            ))}
          </ul>
        </nav>
      )}
    </>
  );
}

export default Navbar;
