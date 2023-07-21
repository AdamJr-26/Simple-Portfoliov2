import React from "react";
import { Icon } from "@iconify/react";

function ContactLinks() {
  return (
    <div className="w-full xsm:w-fit bg-c-black flex flex-row justify-between items-center gap-[32px] p-2 px-4 rounded-full">
      <a href="" className="text-[32px] hover:text-c-teal text-c-grey">
        <Icon icon="mdi:github" />
      </a>
      <a href="" className="text-[32px] hover:text-c-teal text-c-grey">
        <Icon icon="mdi:linkedin" />
      </a>
      <a href="" className="text-[32px] hover:text-c-teal text-c-grey">
        <Icon icon="ic:baseline-facebook" />
      </a>
      <a href="" className="text-[32px] hover:text-c-teal text-c-grey">
        <Icon icon="simple-icons:indeed" />
      </a>
    </div>
  );
}

export default ContactLinks;
