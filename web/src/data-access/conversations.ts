const API_BASE = `${process.env.API_BASE}/conversation`;

export type Conversation = {
	conversation_id?: string;
	symptom?: string;
	language: "en" | "am";
	answer?: string;
	user_id?: string;
};

export type ConversationResponse = {
	conversation_id: string;
	heading: string;
	subheading: string;
	question: {
		id: 1;
		text: string;
		type: string;
		required: boolean;
	};
	is_complete: boolean;
	current_step: number;
	total_steps: number;
	is_new_conversation: boolean;
};

export type ConversationError = {
	error: string;
	details: string;
};

export type RemedyResponse = {
	conversation_id: string;
	heading: string;
	subheading: string;
	message: string;
	is_complete: true;
	current_step: 4;
	total_steps: 4;
	remedy: {
		session_id: string;
		triage: {
			level: "GREEN" | "ORANGE" | "RED";
			red_flags: string[];
			message: string;
		};
		guidance_card: {
			topic_key: string;
			language: "en" | "am";
			self_care: string[];
			otc_categories: {
				category_name: string;
				safety_note: string;
			}[];
			seek_care_if: string[];
			disclaimer: string[];
			is_offline: boolean;
		};
	};
	is_new_conversation: boolean;
};

export async function addChat(chat: Conversation): Promise<ConversationResponse | ConversationError | RemedyResponse> {
	const response = await fetch(API_BASE, {
		method: "POST",
		body: JSON.stringify(chat),
		headers: {
			"Content-Type": "application/json",
		},
	});

	const data = await response.json();
	return data;
}
