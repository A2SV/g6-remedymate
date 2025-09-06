import * as z from "zod";

export const UserLoginSchema = z.object({
	email: z.email("Invalid email address"),
	password: z.string().min(6, "Password must be at least 6 characters"),
});

export const UserRegisterSchema = z.object({
	username: z.string().min(1, "Username is required"),
	email: z.email("Invalid email address"),
	password: z.string().min(6, "Password must be at least 6 characters"),
	role: z.string().min(1, "Role is required"),
	firstName: z.string().min(1, "First name is required"),
	lastName: z.string().min(1, "Last name is required"),
	age: z.number(),
	gender: z.enum(["male", "female"]),
	profilePictureUrl: z.string().optional(),
});

export type UserLogin = z.infer<typeof UserLoginSchema>;
export type UserRegister = z.infer<typeof UserRegisterSchema>;
