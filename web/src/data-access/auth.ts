
import { auth } from "@/auth";

const API_BASE = `${process.env.API_BASE}/auth/change-password`;

export type ChangePasswordPayload = {
  old_password: string;
  new_password: string;
};

export type ChangePasswordResponse = {
  message?: string;
};

export async function changePassword(payload: ChangePasswordPayload): Promise<ChangePasswordResponse> {
  const session = await auth();
  const response = await fetch(API_BASE, {
    method: "POST",
    body: JSON.stringify(payload), 
    headers: {
      Authorization: `Bearer ${session?.user.accessToken}`,
      "Content-Type": "application/json",
    },
  });

  if (!response.ok) {
    let errorMsg = `Failed to change password: ${response.status}`;
    try {
      const errData = await response.json();
      if (errData?.error) errorMsg = errData.error;
    } catch {}
    throw new Error(errorMsg);
  }

  const data = await response.json();
  return data;
}
