"use client";
import { Input } from "@/components/ui/input";

export default function InputContainer(props) {
  const { label } = props;

  return (
    <div className="w-full mx-auto flex items-center">
      <label className="w-[180px]">{label}</label>
      {props.children}
    </div>
  );
}
