"use client";
import React from "react";
import { NavProps } from "@/app/types/type-nav";
import ArrayMapper from "../utils/array-mapper";
import { usePathname } from "next/navigation";

export default function NavDesktop(props: NavProps) {
  const { menus = [] } = props;

  const pathname = usePathname();

  return (
    <div className="fixed h-screen left-0 top-0 px-2 py-8 hidden lg:flex flex-col gap-2 w-32 bg-base-200">
      <ArrayMapper
        of={menus}
        render={(item, index) => (
          <a
            href={item.href}
            className={`border flex flex-col items-center gap-2 p-4 rounded  border-base-200 ${pathname.includes(item.href) ? " bg-blue-200" :" bg-base-100"} hover:bg-blue-300`}
          >
            <div>{item.icon}</div>

            <div className="text-xs"> {item.label}</div>
          </a>
        )}
      />
    </div>
  );
}
