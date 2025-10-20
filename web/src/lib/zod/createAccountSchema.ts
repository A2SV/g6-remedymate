import * as z from "zod";

export const createAccountSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

export type CreateAccountFormData = z.infer<typeof createAccountSchema>;
