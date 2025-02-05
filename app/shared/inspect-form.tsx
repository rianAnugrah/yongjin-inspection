"use client";

import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

export default function AlarmForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full mx-auto grid grid-cols-1 gap-4 p-4 "
    >
      <div className="flex flex-col gap-2">
        <label>Datetime</label>
        <Input
          {...register("datetime", { required: true })}
          placeholder="Datetime"
        />
        {errors.datetime && <p className="text-red-500">QR Code is required</p>}
      </div>

      <div className="flex flex-col gap-2">
        <label>Modul Indikator</label>
        <Input
          {...register("indicator", { required: true })}
          placeholder="QR Code"
        />
        {errors.indicator && (
          <p className="text-red-500">QR Code is required</p>
        )}
      </div>

      <div className="flex flex-col gap-2">
        <label>Modul indikator</label>
        <RadioGroup defaultValue="off" {...register("indicator", { required: true })}>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="on" id="r1" />
            <Label htmlFor="r1">On</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="off" id="r2" />
            <Label htmlFor="r2">Off</Label>
          </div>
         
        </RadioGroup>
        {errors.device && <p className="text-red-500">QR Code is required</p>}
      </div>

      <div className="flex flex-col gap-2">
        <label>Perangkat</label>
        <RadioGroup defaultValue="missing" {...register("notes", { required: true })}>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="complete" id="r1" />
            <Label htmlFor="r1">Lengkap</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="missing" id="r2" />
            <Label htmlFor="r2">Tidak lengkap</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="broken" id="r3" />
            <Label htmlFor="r3">Rusak</Label>
          </div>
        </RadioGroup>
        {errors.device && <p className="text-red-500">QR Code is required</p>}
      </div>

      <div className="flex flex-col gap-2 col-span-1">
        <label>Notes</label>
        <Textarea
          {...register("notes", { required: true })}
          placeholder="Notes..."
        />
        {errors.notes && <p className="text-red-500">...</p>}
      </div>

      <div className="flex items-center justify-end p-2 w-full col-span-1">
        <Button variant="default" className="text-blue-300">
          Simpan
        </Button>
      </div>
    </form>
  );
}
