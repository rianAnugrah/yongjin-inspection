"use client";

import UserDropdown from "./user-dropdown";

export default function TopBar(props) {
  const { heading = "_HEADING" } = props;
  return (
    <div className="border-[#4A5050] border-b w-full py-6 px-8 flex items-center justify-between">
      <p className=" text-2xl">{props.heading}</p>
      <UserDropdown />
    </div>
  );
}
