import { UserLogin } from "@/lib/zod/authSchema";
import {
	ErrorLoginResponse,
	LoginResponse,
	RefreshToken,
	RefreshTokenResponse,
	SuccessLoginResponse,
	UnauthorizedResponse,
} from "@/types/authTypes";

const baseUrl = process.env.API_BASE;

export async function loginUser(data: UserLogin): Promise<LoginResponse | null> {
	const url = `${baseUrl}/auth/login`;
	console.log("Attempting to login user", url);
	try {
		const response = await fetch(url, {
			headers: { "Content-Type": "application/json" },
			method: "POST",
			body: JSON.stringify(data),
		});
		if (response.status === 400 || response.status === 401) {
			const responseData: UnauthorizedResponse | ErrorLoginResponse = await response.json();
			return {
				success: false,
				access_token: "",
				refresh_token: "",
				username: "",
				role: "",
				message: responseData.error,
			};
		}
		const responseData: SuccessLoginResponse = await response.json();
		return {
			success: true,
			access_token: responseData.access_token,
			refresh_token: responseData.refresh_token,
			username: responseData.username,
			role: responseData.role,
			message: "user successfuly logged in",
		};
	} catch (error) {
		console.log("Failed logging in user", error);
	}
	return null;
}

export async function refreshToken(refreshToken: RefreshToken): Promise<RefreshTokenResponse | null> {
	const url = `${baseUrl}/auth/refresh`;
	console.log("Attempting to refresh token", url);
	try {
		const response = await fetch(url, {
			method: "POST",
			body: JSON.stringify(refreshToken),
		});

		const responseData: RefreshTokenResponse = await response.json();
		return responseData;
	} catch (error) {
		console.log("Failed refreshing token", error);
	}
	return null;
}
