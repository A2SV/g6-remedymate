"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";

import { registerSchema, RegisterFormData } from "@/lib/zod/registerSchema";

function RegisterForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormData>({
    resolver: zodResolver(registerSchema),
  });

  const onSubmit = (data: RegisterFormData) => {
    console.log("Form Data:", data);
    // API call can go here
  };

  return (
    <div className="flex min-h-screen text-black items-center justify-center">
      <div className="bg-white dark:bg-gray-900 w-[400px] h-[500px] p-5 pt-8 pl-10 rounded-2xl shadow-xl">
        <div className="flex flex-col mb-4">
          <h1 className="text-[19px] font-bold text-gray-900">
            Create a new application account
          </h1>
          <Link
            href="/login"
            className="cursor-pointer font-bold text-sm text-blue-600 ml-5 mb-2"
          >
            sign in to your existing account
          </Link>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 mt-4">
          <div>
            <Label htmlFor="name">Full Name</Label>
            <Input type="text" placeholder="john doe" {...register("name")} />
            {errors.name && <p className="text-red-500">{errors.name.message}</p>}
          </div>

          <div>
            <Label htmlFor="email">Email</Label>
            <Input
              type="email"
              placeholder="user@gmail.com"
              {...register("email")}
            />
            {errors.email && <p className="text-red-500">{errors.email.message}</p>}
          </div>

          <div>
            <Label htmlFor="password">Password</Label>
            <Input
              type="password"
              placeholder="password"
              {...register("password")}
            />
            {errors.password && (
              <p className="text-red-500">{errors.password.message}</p>
            )}
          </div>

          <div>
            <Label htmlFor="confirmPassword">Confirm Password</Label>
            <Input
              type="password"
              placeholder="confirm password"
              {...register("confirmPassword")}
            />
            {errors.confirmPassword && (
              <p className="text-red-500">{errors.confirmPassword.message}</p>
            )}
          </div>

          <Button
            type="submit"
            className="w-full h-[45px] mt-3 rounded-3xl bg-blue-600 hover:bg-blue-700 text-white font-semibold transition-all duration-200"
          >
            Create Account
          </Button>
        </form>
      </div>
    </div>
  );
}

export default RegisterForm;
