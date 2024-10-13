"use client";
import React from "react";
import { NavProps } from "@/app/types/type-nav";
import ArrayMapper from "../utils/array-mapper";

export default function NavDesktop(props: NavProps) {
  const { menus } = props;

  return (
    <div className="fixed h-screen left-0 top-0 px-2 py-8 flex flex-col gap-2 w-20 bg-base-200">
      <ArrayMapper
        of={menus}
        render={(item, index) => (
          <a
            href={item.href}
            className="border flex flex-col items-center gap-2 p-2 rounded border-base-200 bg-base-100 hover:bg-blue-600"
          >
            <div>{item.icon}</div>

            <div className="text-xs"> {item.label}</div>
          </a>
        )}
      />
    </div>
  );
}
