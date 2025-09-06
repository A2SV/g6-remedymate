import { auth } from "@/auth";

const session = await auth();
const API_BASE = `${process.env.API_BASE}/admin/redflags`;

export type Redflag = {
	id?: string;
	keywords: string[];
	language: "en" | "am";
	level: "GREEN" | "RED" | "ORANGE";
	description: string;
	createdAt?: string;
	updatedAt?: string;
};

export async function getRedflag(id: string): Promise<Redflag> {
	const response = await fetch(`${API_BASE}/${id}`, {
		method: "GET",
		headers: {
			Authorization: `Bearer ${session?.user.accessToken}`,
			"Content-Type": "application/json",
		},
	});

	const data = await response.json();
	return data;
}

export async function getRedflags(): Promise<Redflag[]> {
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

export async function addRedflag(redflag: Redflag): Promise<Redflag> {
	const response = await fetch(API_BASE, {
		method: "POST",
		body: JSON.stringify(redflag),
		headers: {
			Authorization: `Bearer ${session?.user.accessToken}`,
			"Content-Type": "application/json",
		},
	});

	const data = await response.json();
	return data;
}

export async function updateRedflag(id: string, redflag: Redflag): Promise<Redflag> {
	const response = await fetch(`${API_BASE}/${id}`, {
		method: "PUT",
		body: JSON.stringify(redflag),
		headers: {
			Authorization: `Bearer ${session?.user.accessToken}`,
			"Content-Type": "application/json",
		},
	});

	const data = await response.json();
	return data;
}

export async function deleteRedflag(id: string): Promise<void> {
	const response = await fetch(`${API_BASE}/${id}`, {
		method: "DELETE",
		headers: {
			Authorization: `Bearer ${session?.user.accessToken}`,
			"Content-Type": "application/json",
		},
	});

	const data = await response.json();
	return data;
}
