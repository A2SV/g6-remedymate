import { auth } from "@/auth";

const API_BASE = `${process.env.API_BASE}/admin/topics`;

export type Topic = {
	id?: string;
	topic_key: string;
	name_en: string;
	name_am: string;
	description_en: string;
	description_am: string;
	status?: string;
	is_offline_cachable?: string;
	translations: {
		en: {
			self_care: string[];
			otc_categories: [
				{
					category_name: string;
					safety_note: string;
				}
			];
			seek_care_if: string[];
			disclaimer: string;
		};
		am: {
			self_care: string[];
			otc_categories: [
				{
					category_name: string;
					safety_note: string;
				}
			];
			seek_care_if: string[];
			disclaimer: string;
		};
	};
	version?: 0;
	created_at?: string;
	updated_at?: string;
	created_by?: string;
	updated_by?: string;
};

export async function getTopic(topic_key: string): Promise<Topic> {
	const session = await auth();
	const response = await fetch(`${API_BASE}/${topic_key}`, {
		method: "GET",
		headers: {
			Authorization: `Bearer ${session?.user.accessToken}`,
			"Content-Type": "application/json",
		},
	});

	const data = await response.json();
	return data;
}

export async function getTopics(): Promise<{ topics: Topic[]; total_count: number; page: number; limit: number }> {
	const session = await auth();
	const response = await fetch(API_BASE, {
		method: "GET",
		headers: {
			Authorization: `Bearer ${session?.user.accessToken}`,
			"Content-Type": "application/json",
		},
	});
	const data = await response.json();
	console.log(data);
	return data;
}

export async function addTopic(topic: Topic): Promise<Topic> {
	const session = await auth();
	const response = await fetch(API_BASE, {
		method: "POST",
		body: JSON.stringify(topic),
		headers: {
			Authorization: `Bearer ${session?.user.accessToken}`,
			"Content-Type": "application/json",
		},
	});

	const data = await response.json();
	return data;
}

export async function updateTopic(topic_key: string, topic: Topic): Promise<Topic> {
	const session = await auth();
	const response = await fetch(`${API_BASE}/${topic_key}`, {
		method: "PUT",
		body: JSON.stringify(topic),
		headers: {
			Authorization: `Bearer ${session?.user.accessToken}`,
			"Content-Type": "application/json",
		},
	});

	const data = await response.json();
	return data;
}

export async function deleteTopic(topic_key: string): Promise<void> {
	const session = await auth();
	const response = await fetch(`${API_BASE}/${topic_key}`, {
		method: "DELETE",
		headers: {
			Authorization: `Bearer ${session?.user.accessToken}`,
			"Content-Type": "application/json",
		},
	});

	const data = await response.json();
	return data;
}
