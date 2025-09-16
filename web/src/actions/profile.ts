"use server"; 

import * as ProfileData from "@/data-access/profile";
import {
  ProfileInfoSchema,
  Profile,
  UpdateProfile,
  DeleteProfileSchema,
} from "@/lib/zod/profileSchema";

export async function fetchUserProfile(): Promise<Profile | null> {
  try {
    const data = await ProfileData.getUserProfile();
    console.log("Backend response (fetchUserProfile):", data);

    const parsed = ProfileInfoSchema.safeParse(data);
    if (!parsed.success) {
      console.error("Zod parsing error:", parsed.error.format());
      return null;
    }
    return parsed.data.profile;
  } catch (err) {
    console.error("Error in fetchUserProfile:", err);
    return null;
  }
}


export async function editUserProfile(profile: UpdateProfile) {
  try {
    const sanitizedProfile: UpdateProfile = {
      ...profile,
      personalInfo: {
        ...profile.personalInfo,
        profilePictureUrl: profile.personalInfo.profilePictureUrl || "",
      },
    };

    const data = await ProfileData.updateProfile(sanitizedProfile);
    console.log("Backend response (editUserProfile):", data);

    const parsed = ProfileInfoSchema.safeParse(data);
    if (!parsed.success) {
      console.error("Zod validation failed:", parsed.error.format());
      throw new Error("Invalid backend response");
    }
    return parsed.data;
  } catch (err) {
    console.error("Error in editUserProfile:", err);
    throw err;
  }
}

export async function removeProfile(password: string, reason: string) {
  try {
    const body = DeleteProfileSchema.parse({ password, reason });
    const data = await ProfileData.deleteProfile(body);
    console.log("Backend response (removeProfile):", data);
    return data;
  } catch (err) {
    console.error("Error in removeProfile:", err);
    throw err;
  }
}
