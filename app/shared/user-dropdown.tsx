import React from "react";
import { FaBell, FaEnvelope } from "react-icons/fa";

export default function UserDropdown() {
  return (
    <div className="flex items-center gap-4">
      <div className=" w-7 h-7 flex items-center justify-center relative">
        <div className="absolute -top-0 -right-0 bg-red-500 rounded-full text-xs p-[6px]"></div>
        <FaEnvelope />
      </div>
      <div  className=" w-7 h-7 flex items-center justify-center relative">
      <div className="absolute -top-0 -right-0 bg-red-500 rounded-full text-xs p-[6px]"></div>

        <FaBell />
      </div>
      <div className="">
        <p className="font-bold text-sm text-right">Gary Yudo</p>
        <p className="font-normal text-xs text-right text-gray-500">god mode</p>
      </div>

      <div className=" rounded-full h-10 w-10 bg-gray-500 flex text-base items-center justify-center">
        <div>GY</div>
      </div>
    </div>
  );
}
