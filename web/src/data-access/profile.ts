import { auth } from "@/auth";

const session = await auth();
const API_BASE = `${process.env.API_BASE}/users/profile`;

export type ProfileInfo = {
	message?: string;
	profile?: {
		id: string;
		username: string;
		email: string;
		personalInfo: {
			firstName: string;
			lastName: string;
			age: 0;
			gender: string;
			profilePictureUrl: string;
		};
		isVerified: true;
		isProfileFull: true;
		isActive: true;
		createdAt: string;
		updatedAt: string;
		lastLogin: string;
	};
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
	const response = await fetch(API_BASE, {
		method: "GET",
		headers: {
			Authorization: `Bearer ${session?.user.accessToken}`,
			"Content-Type": "application/json",
		},
	});

	const data = await response.json();
	return data;
}

export async function updateProfile(profile: UpdateProfile): Promise<ProfileInfo> {
	const response = await fetch(API_BASE, {
		method: "PUT",
		body: JSON.stringify(profile),
		headers: {
			Authorization: `Bearer ${session?.user.accessToken}`,
			"Content-Type": "application/json",
		},
	});

	const data = await response.json();
	return data;
}

export async function deleteProfile(): Promise<{ message: string }> {
	const response = await fetch(API_BASE, {
		method: "DELETE",
		headers: {
			Authorization: `Bearer ${session?.user.accessToken}`,
			"Content-Type": "application/json",
		},
	});

	const data = await response.json();
	return data;
}
