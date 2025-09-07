import { auth } from "@/auth";

const API_BASE = `${process.env.API_BASE}/admin/feedbacks`;

export type Feedback = {
	id?: string;
	sessionId: string;
	topicKey: string;
	language: "en" | "am";
	rating: number;
	message: string;
	createdAt: string;
};

export async function getFeedback(id: string): Promise<Feedback> {
	const session = await auth();
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

export async function getFeedbacks(): Promise<Feedback[]> {
	const session = await auth();
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

export async function removeFeedback(id: string): Promise<void> {
	const session = await auth();
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

export async function addFeedback(feedback: Feedback): Promise<Feedback> {
	const session = await auth();
	const response = await fetch(API_BASE, {
		method: "POST",
		body: JSON.stringify(feedback),
		headers: {
			Authorization: `Bearer ${session?.user.accessToken}`,
			"Content-Type": "application/json",
		},
	});

	const data = await response.json();
	return data;
}
