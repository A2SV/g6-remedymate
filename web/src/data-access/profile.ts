
import { auth } from "@/auth";

const API_BASE = `${process.env.API_BASE}/users/profile`;

export type ProfileInfo = {
  message?: string;
  profile: {
    id: string;
    username: string;
    email: string;
    personalInfo: {
      firstName: string;
      lastName: string;
      age: number;
      gender: string;
      profilePictureUrl: string;
    };
    isVerified: boolean;
    isProfileFull: boolean;
    isActive: boolean;
    createdAt: string;
    updatedAt: string;
    lastLogin: string;
  };
};

export type ProfileInfos = {
  data: ProfileInfo[];
  pagination: {
    page: number;
    limit: number;
    total: number;
    total_pages: number;
    has_next: boolean;
    has_prev: boolean;
  };
  message: string;
};

export type UpdateProfile = {
  username: string;
  personalInfo: {
    firstName: string;
    lastName: string;
    age: number;
    gender: string;
    profilePictureUrl: string;
  };
};

export type DeleteProfile = {
  password: string;
  reason: string;
};


export async function getUserProfile(): Promise<ProfileInfo> {
  const session = await auth();
  const response = await fetch(API_BASE, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${session?.user.accessToken}`,
      "Content-Type": "application/json",
    },
  });

  if (!response.ok) {
    throw new Error(`Failed to fetch profile: ${response.status}`);
  }

  const data = await response.json();
  console.log("DEBUG profile response:", data);
  return data;
}

export async function updateProfile(profile: UpdateProfile): Promise<ProfileInfo> {
  const session = await auth();
  const response = await fetch(API_BASE, {
    method: "PUT",
    body: JSON.stringify(profile),
    headers: {
      Authorization: `Bearer ${session?.user.accessToken}`,
      "Content-Type": "application/json",
    },
  });

  if (!response.ok) {
    throw new Error(`Failed to update profile: ${response.status}`);
  }

  const data = await response.json();
  return data;
}

export async function deleteProfile(payload: DeleteProfile): Promise<{ message: string }> {
  const session = await auth();
  const response = await fetch(API_BASE, {
    method: "DELETE",
    body: JSON.stringify(payload),
    headers: {
      Authorization: `Bearer ${session?.user.accessToken}`,
      "Content-Type": "application/json",
    },
  });

  if (!response.ok) {
    throw new Error(`Failed to delete profile: ${response.status}`);
  }

  const data = await response.json();
  return data;
}

export async function getProfiles(): Promise<ProfileInfos> {
  const session = await auth();
  const API_ADMIN = `${process.env.API_BASE}/admin/users/profiles/paginated`;
  const response = await fetch(API_ADMIN, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${session?.user.accessToken}`,
      "Content-Type": "application/json",
    },
  });

  if (!response.ok) {
    throw new Error(`Failed to fetch profiles: ${response.status}`);
  }

  const data = await response.json();
  return data;
}
