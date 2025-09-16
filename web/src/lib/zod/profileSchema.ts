import { z } from "zod";

export const PersonalInfoSchema = z.object({
  firstName: z.string(),
  lastName: z.string(),
  age: z.number(),
  gender: z.string(),
  profilePictureUrl: z.string().default(""),
});

export const ProfileSchema = z.object({
  id: z.string(),
  username: z.string(),
  email: z.string().email(),
  personalInfo: PersonalInfoSchema,
  isVerified: z.boolean(),
  isProfileFull: z.boolean(),
  isActive: z.boolean(),
  createdAt: z.string(), 
  updatedAt: z.string(),
  lastLogin: z.string(),
});

export const ProfileInfoSchema = z.object({
  message: z.string(),
  profile: ProfileSchema,
});

export const DeleteProfileSchema = z.object({
  password: z.string().min(6, "Password is required"),
  reason: z.string().min(1, "Reason is required"),
});

export type PersonalInfo = z.infer<typeof PersonalInfoSchema>;
export type Profile = z.infer<typeof ProfileSchema>;
export type ProfileInfo = z.infer<typeof ProfileInfoSchema>;
export type UpdateProfile = {
  username: string;
  personalInfo: PersonalInfo;
};
export type DeleteProfile = z.infer<typeof DeleteProfileSchema>;
