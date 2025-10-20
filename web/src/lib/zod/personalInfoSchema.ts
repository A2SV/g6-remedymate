import * as z from "zod";

export const personalInfoSchema = z.object({
  fullName: z.string().min(2, "Full name is required"),
  age: z.number().min(1, "Age must be greater than 0"),
  gender: z.enum(["male", "female"], "Please select your gender"),
  weight: z.number().min(1, "Weight must be greater than 0"),
  height: z.number().min(1, "Height must be greater than 0"),
});

export type PersonalInfoFormData = z.infer<typeof personalInfoSchema>;
