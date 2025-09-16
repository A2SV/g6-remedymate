import { z } from "zod";

export const changePasswordSchema = z
  .object({
    oldPassword: z.string().min(6, "Current password must be at least 6 characters"),
    newPassword: z.string().min(6, "New password must be at least 6 characters"),
    confirmPassword: z.string().min(6, "Confirm password must be at least 6 characters"),
  })
  .refine((data) => data.newPassword === data.confirmPassword, {
    path: ["confirmPassword"],
    message: "New password must match with confirm password",
  });

export const ChangePasswordResponseSchema = z.object({
  success: z.boolean(),
  message: z.string().optional(),
});

export type ChangePasswordInput = z.infer<typeof changePasswordSchema>;
export type ChangePasswordResponse = z.infer<typeof ChangePasswordResponseSchema>;
