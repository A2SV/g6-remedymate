"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import * as React from "react";
import { signIn } from "next-auth/react";

export default function LoginPage() {
  const [state, setState] = React.useState({ message: "", status: "" });
  const [isPending, startTransition] = React.useTransition();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); 
    const formData = new FormData(e.currentTarget);

    startTransition(async () => {
      const email = formData.get("email") as string;
      const password = formData.get("password") as string;

      const result = await signIn("credentials", {
        redirect: false,
        email,
        password,
      });

      if (result?.error) {
        setState({ message: result.error, status: "error" });
      } else {
        setState({ message: "Login successful!", status: "success" });
      }
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-2xl shadow-md w-[1000px] max-w-[1000px]">
        <h3 className="text-2xl font-bold">Welcome Back</h3>
        <h3 className="mt-1 block w-full mb-7 text-gray-700 font-medium text-sm">
          Sign in to continue to RemedyMate
        </h3>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <Input
              type="email"
              id="email"
              name="email"
              className="mt-1 block w-full h-13"
              placeholder="Enter your email"
              required
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <Input
              type="password"
              id="password"
              name="password"
              className="mt-1 block w-full h-13"
              placeholder="Enter your password"
              required
            />
          </div>

          <div className="flex items-center justify-between mb-6">
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                className="h-4 w-4 text-blue-600 rounded border-gray-300"
              />
              <span className="text-gray-700">Remember me</span>
            </label>
            <a href="#" className="text-[#0D2A4B] hover:underline text-sm">
              Forgot password?
            </a>
          </div>

          <Button
            type="submit"
            className="w-full bg-[#103158] text-white hover:bg-[#0D2A4B]"
          >
            {isPending ? "Signing In..." : "Sign In"}
          </Button>
        </form>

        {state.message && (
          <p
            className={`mt-4 text-sm ${
              state.status === "error" ? "text-red-600" : "text-green-600"
            }`}
          >
            {state.message}
          </p>
        )}
      </div>
    </div>
  );
}
