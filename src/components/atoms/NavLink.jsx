import React, { useState } from "react";
import { Link } from "react-scroll";
import { Icon } from "@iconify/react";

function NavLink({ to, label, setToggle }) {
  return (
    <Link
      onClick={() => setToggle(false)}
      activeClass="active"
      className="text-c-grey font-medium tracking-[2px]"
      smooth
      spy
      to={to}
    >
      {label}
    </Link>
  );
}

export default NavLink;
