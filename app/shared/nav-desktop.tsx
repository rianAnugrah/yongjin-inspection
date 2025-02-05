"use client";
import React, { useState } from "react";
import { NavProps } from "@/app/types/type-nav";
import ArrayMapper from "../utils/array-mapper";
import { usePathname } from "next/navigation";
import { FaBars } from "react-icons/fa";

export default function NavDesktop(props: NavProps) {
  const { menus = [] } = props;
  const [menuOpen, setMenuOpen] = useState(false)

  const pathname = usePathname();

  return (
    <div className={`fixed h-screen left-0 top-0 px-4 transition-all duration-300 ease-out py-4 hidden lg:flex flex-col items-start gap-2 ${menuOpen ? 'w-64'  : 'w-20'} bg-[#282a2c]`}>
      <a
        onClick={() => setMenuOpen(!menuOpen)}
        className={`flex flex-col items-center gap-2 p-4 h-12 w-12 rounded-full text-white  border-[#282a2c]  hover:bg-[#1b1c1d]`}
      >
        <div><FaBars /></div>

        {/* <div className="text-xs"> {item.label}</div> */}
      </a>
      <ArrayMapper
        of={menus}
        render={(item, index) => (
          <a
            href={item.href}
            className={`flex items-center gap-2 p-4 h-12 w-full rounded-full text-white  border-[#282a2c] ${
              pathname.includes(item.href)
                ? " bg-[#1b1c1d]"
                : " bg-[transparent]"
            } hover:bg-[#1b1c1d]`}
          >
            <div>{item.icon}</div>

            {menuOpen && <div className="text-xs"> {item.label}</div> }
          </a>
        )}
      />
    </div>
  );
}
