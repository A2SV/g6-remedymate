"use server";
import { auth } from "@/auth";
import { UserRegister } from "@/lib/zod/authSchema";

type RegisterError = {
	error: string;
};

type RegisterSuccess = {
	message: string;
};

export async function registerUser(user: UserRegister, baseUrl: string) {
	const session = await auth();
	const API_BASE = `${process.env.API_BASE}/register`;
	const registerData = { ...user, frontendDomain: baseUrl };
	const response = await fetch(API_BASE, {
		method: "POST",
		body: JSON.stringify(registerData),
		headers: {
			Authorization: `Bearer ${session?.user.accessToken}`,
			"Content-Type": "application/json",
		},
	});

	const data: RegisterError | RegisterSuccess = await response.json();
	if ("error" in data) {
		throw new Error(data.error);
	}
	return data;
}
