"use client";

import UserDropdown from "@/app/shared/user-dropdown";
import React from "react";
import { AiOutlineCalendar, AiOutlineEnvironment, AiOutlineUnorderedList, AiOutlineWarning } from "react-icons/ai";
import {
  FaBars,
  FaBell,
  FaCalendar,
  FaFile,
  FaLocationArrow,
} from "react-icons/fa";
import {
  FaLocationPin,
  FaLocationPinLock,
  FaMapLocation,
  FaMapLocationDot,
} from "react-icons/fa6";

export default function DashboardPage() {
  return (
    <div className="flex w-full flex-col gap-2">
      {/* TOP BAR */}
      <div className="border-b-2 w-full py-4 flex items-center justify-between">
        <p className="font-bold text-3xl">Dashboard</p>
        <UserDropdown />
      </div>

      <div className="flex w-full flex-col gap-2 overflow-auto h-[calc(100dvh_-_180px)] lg:h-[calc(100dvh_-_118px)] pb-8">
        <h1 className="text-xl mt-4 flex gap-2">
          {" "}
          <AiOutlineUnorderedList /> Overview
        </h1>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2">
          <div className="flex flex-col border rounded-lg p-4 items-center">
            <div>Daily Checks</div>
            <div className="text-2xl font-bold">22/124</div>
          </div>
          <div className="flex flex-col border rounded-lg p-4 items-center">
            <div>Daily Checks</div>
            <div className="text-2xl font-bold">22/124</div>
          </div>
          <div className="flex flex-col border rounded-lg p-4 items-center">
            <div>Daily Checks</div>
            <div className="text-2xl font-bold">22/124</div>
          </div>
          <div className="flex flex-col border rounded-lg p-4 items-center">
            <div>Daily Checks</div>
            <div className="text-2xl font-bold">22/124</div>
          </div>
        </div>

        {/* ACTION NEEDED */}

        <h1 className="text-xl mt-4 flex gap-2">
          {" "}
          <FaBell /> Notifications
        </h1>

        <DashboardItem />
        <DashboardItem />
        <DashboardItem />
        <DashboardItem />
        <DashboardItem />
        <DashboardItem />
        <DashboardItem />
        <DashboardItem />
        <DashboardItem />
        <DashboardItem />
        <DashboardItem />
        <DashboardItem />
        <DashboardItem />
        <DashboardItem />
        <DashboardItem />
        <DashboardItem />
        <DashboardItem />
      </div>
    </div>
  );
}

const DashboardItem = () => {
  return (
    <div className="border rounded-lg w-full p-4 flex flex-col items-center justify-between ">
      <div className="flex flex-col w-full items-start gap-0">
        <div className="">Daily Check Hydrant</div>
        <div className="flex w-full items-center gap-2  text-sm text-gray-500">
          <div className="text-base">
            <AiOutlineEnvironment />
          </div>
          <div>Yongjin 2</div>
          <div className="text-base">
            <AiOutlineCalendar />
          </div>
          <div className="text-red-500">20 October</div>
          <div className="text-base">
            <AiOutlineWarning />
          </div>
          <div className="text-white px-2 py-[2px] text-xs rounded-full bg-yellow-500">
            Not checked
          </div>
          <div className="flex flex-grow"></div>
          <button className="border p-2 w-20 rounded font-bold bg-gray-100 hover:bg-gray-200">
            Go
          </button>
        </div>
      </div>
    </div>
  );
};
