"use server";

import * as AuthData from "@/data-access/auth";
import { changePasswordSchema } from "@/lib/zod/passwordSchema";

export async function changeUserPassword(oldPassword: string, newPassword: string) {

  const validated = changePasswordSchema.parse({
    oldPassword,
    newPassword,
    confirmPassword: newPassword,
  });


  const data = await AuthData.changePassword({
    old_password: validated.oldPassword,
    new_password: validated.newPassword,
  });

  return data; 
}
