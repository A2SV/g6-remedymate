import * as z from "zod";

export const UserLoginSchema = z.object({
	email: z.email("Invalid email address"),
	password: z.string().min(6, "Password must be at least 6 characters"),
});

const UserProfile = z.object({
	firstName: z.string().min(1, "First name is required"),
	lastName: z.string().min(1, "Last name is required"),
	age: z.coerce.number(),
	gender: z.enum(["male", "female"]),
	profilePictureUrl: z.string().optional(),
});
export const UserRegisterSchema = z.object({
	username: z.string().optional(),
	email: z.email("Invalid email address"),
	password: z.string().optional(),
	role: z.string().min(1, "Role is required"),
	personalInfo: UserProfile,
});

export type UserLogin = z.infer<typeof UserLoginSchema>;
export type UserRegister = z.infer<typeof UserRegisterSchema>;
