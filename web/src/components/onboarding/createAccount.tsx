"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { createAccountSchema, CreateAccountFormData } from "@/lib/zod/createAccountSchema";

type Props = {
  onNext: (data: CreateAccountFormData) => void;
  onBack: () => void;
};

export default function CreateAccount({ onNext, onBack }: Props) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateAccountFormData>({
    resolver: zodResolver(createAccountSchema),
  });

  const onSubmit = (data: CreateAccountFormData) => {
    // Only call onNext if validation passes
    onNext(data);
  };

  return (
    <div className="w-full h-full flex flex-col items-center justify-center text-center space-y-6 px-6">
      <div className="self-start flex gap-30">
        <Button
          onClick={onBack}
          className="bg-gray-200 hover:bg-gray-300 text-gray-700 rounded-full px-3 py-1 shadow"
        >
          {"<"} 
        </Button>
        <h1 className="text-3xl text-right font-semibold text-gray-800">
          Create Your Account
        </h1>
      </div>

      <p className="text-lg text-gray-500 max-w-[500px]">
        Let’s get you set up to start your health journey.
      </p>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col items-center gap-4 w-full max-w-[400px]"
      >
        <div className="w-full mb-5">
          <Label htmlFor="email" className="text-left mb-3 text-black">
            Email
          </Label>
          <Input
            type="email"
            id="email"
            placeholder="your@gmail.com"
            className="w-full"
            {...register("email")}
          />
          {errors.email && <p className="text-red-500">{errors.email.message}</p>}
        </div>

        <div className="w-full">
          <Label htmlFor="password" className="text-black text-left mb-3">
            Password
          </Label>
          <Input
            type="password"
            id="password"
            placeholder="••••••••"
            className="w-full"
            {...register("password")}
          />
          {errors.password && <p className="text-red-500">{errors.password.message}</p>}
        </div>

        <Button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 text-white w-full py-3 rounded-full shadow-md text-lg transition-all"
        >
          Sign Up
        </Button>
      </form>

      <div className="text-gray-400">or continue with social login</div>
    </div>
  );
}
