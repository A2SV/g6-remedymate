"use server";
import { VerificationError, VerificationSuccess } from "@/types/authTypes";

const baseUrl = process.env.API_BASE;

export async function verifyUser(token: string) {
	if (!token) {
		throw new Error("Error verifying");
	}
	const url = `${baseUrl}/auth/verify?token=${token}`;
	console.log("Attempting to verify user", url);
	const response = await fetch(url);

	const responseData: VerificationSuccess | VerificationError = await response.json();
	if ("error" in responseData) {
		throw new Error(responseData.error);
	}
	return responseData;
}
