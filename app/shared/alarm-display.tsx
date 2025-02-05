"use client";

import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import InputContainer from "./input-container";

export default function AlarmDisplay() {
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
      className="w-full mx-auto space-y-4 p-4 "
    >
      <InputContainer label="ID Alarm">
        <Input {...register("id", { required: true })} placeholder="Alarm ID" />
        {errors.id && <p className="text-red-500">ID Alarm required</p>}
      </InputContainer>

      <InputContainer label="Factory">
        <Input
          {...register("factory", { required: true })}
          placeholder="Factory"
        />
        {errors.factory && <p className="text-red-500">Factory is required</p>}
      </InputContainer>

      <InputContainer label="No Alarm">
        <Input
          {...register("noAlarm", { required: true })}
          placeholder="No Alarm"
        />
        {errors.noAlarm && <p className="text-red-500">No Alarm is required</p>}
      </InputContainer>

      <InputContainer label="Area">
        <Input {...register("area", { required: true })} placeholder="Area" />
        {errors.area && <p className="text-red-500">Area is required</p>}
      </InputContainer>

      <InputContainer label="Lokasi">
        <Input
          {...register("location", { required: true })}
          placeholder="Location"
        />
        {errors.location && (
          <p className="text-red-500">Location is required</p>
        )}
      </InputContainer>

      <InputContainer label="Zona">
        <Input {...register("zone", { required: true })} placeholder="Zone" />
        {errors.zone && <p className="text-red-500">Zone is required</p>}
      </InputContainer>
      {/* <Button type="submit">Submit</Button> */}
    </form>
  );
}
