import { auth } from "@/auth";

// Build a robust API base URL.
// If `process.env.API_BASE` is set and already contains an `/api` path, use it as-is.
// Otherwise append `/api/v1` to the prefix. If the env var is missing, fall back
// to the relative `/api/v1` so Next.js will proxy requests to the backend.
const rawPrefix = process.env.API_BASE ?? "";
let API_BASE: string;
if (!rawPrefix) {
	API_BASE = "/api/v1/admin"; // relative fallback
} else if (/\/api(\/|$)/.test(rawPrefix)) {
	// env already contains /api (for example: https://host/api/v1)
	// Ensure we don't duplicate the /admin segment if already present
	API_BASE = rawPrefix.endsWith("/admin") ? rawPrefix : `${rawPrefix}/admin`;
} else {
	API_BASE = `${rawPrefix}/api/v1/admin`;
}

export type Topic = {
	id?: string;
	topic_key?: string;
	name_en: string;
	name_am: string;
	description_en: string;
	description_am: string;
	status: string;
	is_offline_cachable: boolean;
	translations: {
		en: {
			self_care: string[];
			otc_categories: {
				category_name: string;
				safety_note: string;
			}[];
			seek_care_if: string[];
			disclaimer: string;
		};
		am: {
			self_care: string[];
			otc_categories: {
				category_name: string;
				safety_note: string;
			}[];
			seek_care_if: string[];
			disclaimer: string;
		};
	};
	version?: number;
	revision_history?: unknown[];
	created_at?: string;
	updated_at?: string;
	created_by?: string;
	updated_by?: string;
};

export async function getTopic(topic_key: string): Promise<Topic> {
	const session = await auth();
	const response = await fetch(`${API_BASE}/topic/${encodeURIComponent(topic_key)}`, {
		method: "GET",
		headers: {
			Authorization: `Bearer ${session?.user.accessToken}`,
			"Content-Type": "application/json",
		},
	});

	if (!response.ok) {
		const text = await response.text();
		throw new Error(`Failed to fetch topic: ${response.status} ${response.statusText} - ${text}`);
	}

	try {
		return await response.json();
	} catch (e) {
		console.log(e);
		throw new Error("Failed to parse topic data: Response is not valid JSON");
	}
}

export async function getTopics(
	page = 1,
	limit = 50
): Promise<{ topics: Topic[]; total_count: number; page: number; limit: number }> {
	const session = await auth();
	// Build a straightforward URL string. If API_PREFIX is empty this becomes a relative path like
	// /api/v1/admin/topics?page=1&limit=50 which will be handled by the Next.js server.
	const url = `${API_BASE}/topics?page=${encodeURIComponent(String(page))}&limit=${encodeURIComponent(
		String(limit)
	)}`;

	const response = await fetch(url, {
		method: "GET",
		headers: {
			Authorization: `Bearer ${session?.user.accessToken}`,
			"Content-Type": "application/json",
		},
	});

	if (!response.ok) {
		const text = await response.text();
		throw new Error(`Failed to fetch topics: ${response.status} ${response.statusText} - ${text}`);
	}

	const data = await response.json();
	if (!data.topics) data.topics = [];
	return data;
}

export async function addTopic(topic: Topic): Promise<Topic> {
	const session = await auth();
	const response = await fetch(`${API_BASE}/topic`, {
		method: "POST",
		body: JSON.stringify(topic),
		headers: {
			Authorization: `Bearer ${session?.user.accessToken}`,
			"Content-Type": "application/json",
		},
	});

	if (!response.ok) {
		const text = await response.text();
		throw new Error(`Failed to create topic: ${response.status} ${response.statusText} - ${text}`);
	}

	return await response.json();
}

export async function updateTopic(topic_key: string, topic: Topic): Promise<Topic> {
	const session = await auth();

	const payload = {
		name_en: topic.name_en,
		name_am: topic.name_am,
		description_en: topic.description_en,
		description_am: topic.description_am,
		is_offline_cachable: topic.is_offline_cachable,
		status: topic.status,
		translations: {
			en: {
				self_care: topic.translations.en.self_care,
				otc_categories: topic.translations.en.otc_categories.map((cat) => ({
					category_name: cat.category_name,
					safety_note: cat.safety_note || "",
				})),
				seek_care_if: topic.translations.en.seek_care_if,
				disclaimer: topic.translations.en.disclaimer,
			},
			am: {
				self_care: topic.translations.am.self_care,
				otc_categories: topic.translations.am.otc_categories.map((cat) => ({
					category_name: cat.category_name,
					safety_note: cat.safety_note || "",
				})),
				seek_care_if: topic.translations.am.seek_care_if,
				disclaimer: topic.translations.am.disclaimer,
			},
		},
	};

	const response = await fetch(`${API_BASE}/topics/${encodeURIComponent(topic_key)}`, {
		method: "PUT",
		body: JSON.stringify(payload),
		headers: {
			Authorization: `Bearer ${session?.user.accessToken}`,
			"Content-Type": "application/json",
		},
	});

	if (!response.ok) {
		const text = await response.text();
		throw new Error(`Failed to update topic: ${response.status} ${response.statusText} - ${text}`);
	}

	return await response.json();
}

export async function deleteTopic(topic_key: string): Promise<void> {
	const session = await auth();
	const response = await fetch(`${API_BASE}/topics/${encodeURIComponent(topic_key)}`, {
		method: "DELETE",
		headers: {
			Authorization: `Bearer ${session?.user.accessToken}`,
			"Content-Type": "application/json",
		},
	});

	if (!response.ok) {
		const text = await response.text();
		throw new Error(`Failed to delete topic: ${response.status} ${response.statusText} - ${text}`);
	}

	return;
}
