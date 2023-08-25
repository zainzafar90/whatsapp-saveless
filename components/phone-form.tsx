"use client";

import { useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { cn } from "@/lib/utils";
import { formSchema } from "@/validations/form";
import { buttonVariants } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";

type FormData = z.infer<typeof formSchema>;

export const PhoneForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  async function onSubmit(data: FormData) {
    window.open(`https://wa.me/${data.phone}`);
  }

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid gap-2">
          <div className="grid gap-1">
            <Label className="sr-only" htmlFor="phone">
              Phone
            </Label>
            <Input
              id="phone"
              placeholder="+11234567890"
              type="text"
              autoCapitalize="none"
              autoComplete="phone"
              autoCorrect="off"
              {...register("phone")}
            />
            {errors?.phone && (
              <p className="px-1 text-xs text-red-600">
                {errors.phone.message}
              </p>
            )}
            <p className="px-1 text-xs text-gray-600 font-light">
              Make sure to use <strong>country</strong> code before the number.
            </p>
          </div>
          <button className={cn(buttonVariants())}>Open Chat</button>
        </div>
      </form>
    </>
  );
};
