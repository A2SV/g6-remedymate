import { ChatSession, Message } from "@/components/chat/ChatPage";

export const saveSession = (updatedMessages: Message[], sessionId: string) => {
	const savedSessions = localStorage.getItem("health-chat-sessions");
	const sessions: ChatSession[] = savedSessions ? JSON.parse(savedSessions) : [];
	console.log(updatedMessages);
	const sessionIndex = sessions.findIndex((s) => s.id === sessionId);
	const userMessage = updatedMessages.find((m) => m.type === "user");
	const sessionTitle = `${
		typeof userMessage?.content === "string" ? userMessage.content.slice(0, 50) : "New Chat"
	}...`;

	const sessionData: ChatSession = {
		id: sessionId,
		messages: updatedMessages,
		title: sessionTitle,
		createdAt: sessionIndex === -1 ? new Date() : sessions[sessionIndex].createdAt,
		lastUpdated: new Date(),
	};

	if (sessionIndex === -1) {
		sessions.unshift(sessionData);
	} else {
		sessions[sessionIndex] = sessionData;
	}

	// Keep only last 20 sessions
	if (sessions.length > 20) {
		sessions.splice(20);
	}

	localStorage.setItem("health-chat-sessions", JSON.stringify(sessions));
};
