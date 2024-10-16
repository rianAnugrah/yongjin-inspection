import React from "react";

export default function UserDropdown() {
  return (
    <div className="flex items-center gap-2">
      <div className="">
        <p className="font-bold text-sm">Gary Yudo</p>
        <p className="font-normal text-xs text-gray-500">god mode</p>
      </div>

      <div className=" rounded-full h-10 w-10 bg-teal-200 flex text-base items-center justify-center">
        <div>GY</div>
      </div>
    </div>
  );
}
