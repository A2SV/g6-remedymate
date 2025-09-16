"use server";

import { Message } from "@/components/chat/ChatPage";
import { addChat, Conversation } from "@/data-access/conversations";

export async function sendMessage(message: Message) {
	const reply = !!message.chatId;
	const converse: Conversation = reply
		? {
				conversation_id: message.chatId,
				answer: message.content,
				language: message.language,
				user_id: message.id,
		  }
		: {
				conversation_id: message.chatId,
				symptom: message.content,
				language: message.language,
				user_id: message.id,
		  };

	const data = await addChat(converse);

	return data;
}
