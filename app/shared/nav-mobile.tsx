"use client";
import React from "react";
import { NavProps } from "@/app/types/type-nav";
import ArrayMapper from "../utils/array-mapper";
import { usePathname } from "next/navigation";

export default function NavMobile(props: NavProps) {
  const { menus = [] } = props;

  const pathname = usePathname();

  return (
    <div className="fixed w-full left-0 bottom-0 p-2 justify-between flex gap-2 lg:hidden h-20 bg-base-200">
      <ArrayMapper
        of={menus}
        render={(item, index) => (
          <a
            href={item.href}
            className={`border flex flex-col items-center gap-2 w-1/5 justify-center rounded flex-grow border-base-200 ${pathname.includes(item.href) ? " bg-blue-200" :" bg-base-100"} hover:bg-blue-300`}
          >
            <div>{item.icon}</div>

            <div className="text-xs"> {item.label}</div>
          </a>
        )}
      />
    </div>
  );
}
