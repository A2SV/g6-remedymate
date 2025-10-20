"use client";

import React from "react";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { personalInfoSchema, PersonalInfoFormData } from "@/lib/zod/personalInfoSchema";

type Props = {
  onNext: (data: PersonalInfoFormData) => void;
  onBack: () => void;
};

export default function PersonalInfo({ onNext, onBack }: Props) {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<PersonalInfoFormData>({
    resolver: zodResolver(personalInfoSchema),
  });

  const onSubmit = (data: PersonalInfoFormData) => {
    onNext(data);
  };

  return (
    <div className="w-full h-full flex flex-col text-black items-center justify-center text-center space-y-6 px-6">
      <div className="self-start flex gap-40 items-center w-full max-w-[600px]">
        <Button
          onClick={onBack}
          className="bg-gray-200 hover:bg-gray-300 text-gray-700 rounded-full px-3 py-1 shadow"
        >
          {"<"}
        </Button>
        <h1 className="text-3xl font-semibold text-gray-800 ml-3">About You</h1>
      </div>

      <p className="text-lg text-gray-500 max-w-[500px] text-center">
        This helps us personalize your care plan.
      </p>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col items-center gap-4 w-full max-w-[400px]"
      >
        <div className="w-full">
          <Label htmlFor="fullName" className="text-left text-black mb-2">
            Full Name
          </Label>
          <Input
            type="text"
            id="fullName"
            placeholder="Jane Doe"
            {...register("fullName")}
          />
          {errors.fullName && <p className="text-red-500">{errors.fullName.message}</p>}
        </div>

        <div className="w-full">
          <Label htmlFor="age" className="text-left text-black mb-2">
            Age
          </Label>
          <Input
            type="number"
            id="age"
            placeholder="30"
            {...register("age", { valueAsNumber: true })}
          />
          {errors.age && <p className="text-red-500">{errors.age.message}</p>}
        </div>

        <div className="w-full">
          <Label htmlFor="gender" className="text-left text-black mb-2">
            Gender
          </Label>
          <Controller
            control={control}
            name="gender"
            render={({ field }) => (
              <select {...field} className="w-full border rounded px-3 py-2 text-gray-700">
                <option value="">Select Gender</option>
                <option value="female">Female</option>
                <option value="male">Male</option>
              </select>
            )}
          />
          {errors.gender && <p className="text-red-500">{errors.gender.message}</p>}
        </div>

        <div className="w-full">
          <Label htmlFor="weight" className="text-left text-black mb-2">
            Weight (kg)
          </Label>
          <Input
            type="text"
            id="weight"
            placeholder="70"
            {...register("weight", { valueAsNumber: true })}
          />
          {errors.weight && <p className="text-red-500">{errors.weight.message}</p>}
        </div>

        <div className="w-full">
          <Label htmlFor="height" className="text-left text-black mb-2">
            Height (cm)
          </Label>
          <Input
            type="text"
            id="height"
            placeholder="175"
            {...register("height", { valueAsNumber: true })}
          />
          {errors.height && <p className="text-red-500">{errors.height.message}</p>}
        </div>

        <div className="flex flex-col gap-3 w-full mt-4">
          <Button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white w-full py-3 rounded-full shadow-md text-lg"
          >
            Next
          </Button>
          <Button
            type="button"
            onClick={() => onNext({} as PersonalInfoFormData)} // skip with empty data
            variant="ghost"
            className="text-blue-500 w-full py-3 rounded-full border border-blue-500 hover:bg-blue-50 transition-all"
          >
            Skip for now
          </Button>
        </div>
      </form>
    </div>
  );
}
