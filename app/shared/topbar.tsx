"use client";

import { FaBell, FaChevronRight, FaEnvelope } from "react-icons/fa";
import UserDropdown from "./user-dropdown";

export default function TopBar(props) {
  const { heading = "_HEADING", items = [] } = props;
  return (
    <div className="border-[#282a2c]  border-b w-full py-6 px-8 flex items-center justify-between">
      <div className="text-lg flex gap-2 items-center">
        <div>{props.heading}</div>
        {items.length > 0 &&
          items.map((item, index) => {
            return (
              <>
                <FaChevronRight className="text-xs" />
                <div className="">{item.label}</div>
              </>
            );
          })}
      </div>
          <div className="flex flex-grow">

          </div>
      <div className="flex items-center mr-4 gap-2">
        <div className=" w-7 h-7 flex items-center justify-center relative">
          <div className="absolute -top-0 -right-0 bg-red-500 rounded-full text-xs p-[6px]"></div>
          <FaEnvelope />
        </div>
        <div className=" w-7 h-7 flex items-center justify-center relative">
          <div className="absolute -top-0 -right-0 bg-red-500 rounded-full text-xs p-[6px]"></div>

          <FaBell />
        </div>
      </div>
      <UserDropdown />
    </div>
  );
}
