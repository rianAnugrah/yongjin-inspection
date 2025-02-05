import CrudEXAmple from "@/app/shared/crud-example";
import TopBar from "@/app/shared/topbar";
import UnderConstruction from "@/app/shared/under-construction";
import UserDropdown from "@/app/shared/user-dropdown";
import React from "react";
import { AiOutlinePlusCircle } from "react-icons/ai";
import AlarmForm from "../../shared/inspect-form";
import InspectList from "@/app/shared/inspect-list";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { FaPlus } from "react-icons/fa";

export default function InspectionPage() {
  return (
    <div>
      <TopBar heading="Inspection" items={[{label:"Data list"}]} />

      <div className="flex w-full flex-col gap-2 overflow-auto h-[calc(100dvh_-_180px)] lg:h-[calc(100dvh_-_89px)] p-8">
        <div className="w-full  flex gap-4 items-center"><a href="/inspections/new">
          <Button variant="outline" className="bg-transparent"><FaPlus /> Inspeksi Baru</Button>
          </a>
          <div className="block flex-grow"></div>
          <div>
            <Input placeholder="Cari..." />
          </div>
          <div>Filter</div>
          <Select>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Waktu" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Semua</SelectItem>
              <SelectItem value="today">Hari ini</SelectItem>
              <SelectItem value="this-week">Minggu ini</SelectItem>
              <SelectItem value="this-month">Bulan ini</SelectItem>
            </SelectContent>
          </Select>

          <Select>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Semua</SelectItem>
              <SelectItem value="checked">Checked</SelectItem>
              <SelectItem value="not checked">Not Checked</SelectItem>

            </SelectContent>
          </Select>

          <Select>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Lokasi" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Semua</SelectItem>
              <SelectItem value="fc1">Factory 1</SelectItem>
              <SelectItem value="fc2">factory 2</SelectItem>
              <SelectItem value="fc3">factory 3</SelectItem>

            </SelectContent>
          </Select>

        </div>
        <InspectList />
      </div>
    </div>
  );
}
