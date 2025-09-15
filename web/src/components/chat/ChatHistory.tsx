"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Clock, MessageSquare, Trash2 } from "lucide-react";
import { useEffect, useState } from "react";

interface Message {
	id: string;
	type: "user" | "ai";
	content: string;
	timestamp: Date;
	category?: "symptom" | "question" | "assessment" | "recommendation";
}

interface ChatSession {
	id: string;
	messages: Message[];
	title: string;
	createdAt: Date;
	lastUpdated: Date;
}

interface ChatHistoryProps {
	onLoadSession: (sessionId: string) => void;
}

export function ChatHistory({ onLoadSession }: ChatHistoryProps) {
	const [sessions, setSessions] = useState<ChatSession[]>([]);

	useEffect(() => {
		loadSessions();
	}, []);

	const loadSessions = () => {
		const savedSessions = localStorage.getItem("health-chat-sessions");
		if (savedSessions) {
			const parsedSessions: ChatSession[] = JSON.parse(savedSessions);
			setSessions(
				parsedSessions.map((session) => ({
					...session,
					createdAt: new Date(session.createdAt),
					lastUpdated: new Date(session.lastUpdated),
					messages: session.messages.map((msg) => ({
						...msg,
						timestamp: new Date(msg.timestamp),
					})),
				}))
			);
		}
	};

	const deleteSession = (sessionId: string) => {
		const updatedSessions = sessions.filter((s) => s.id !== sessionId);
		setSessions(updatedSessions);
		localStorage.setItem("health-chat-sessions", JSON.stringify(updatedSessions));
	};

	const formatDate = (date: Date) => {
		const now = new Date();
		const diffInHours = (now.getTime() - date.getTime()) / (1000 * 60 * 60);

		if (diffInHours < 24) {
			return date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
		} else if (diffInHours < 168) {
			// 7 days
			return date.toLocaleDateString([], { weekday: "short" });
		} else {
			return date.toLocaleDateString([], { month: "short", day: "numeric" });
		}
	};

	const getSessionPreview = (session: ChatSession) => {
		const userMessages = session.messages.filter((m) => m.type === "user");
		if (userMessages.length === 0) return "New conversation";
		return userMessages[0].content.slice(0, 60) + (userMessages[0].content.length > 60 ? "..." : "");
	};

	const getSessionStats = (session: ChatSession) => {
		const userMessages = session.messages.filter((m) => m.type === "user").length;
		const aiMessages = session.messages.filter((m) => m.type === "ai").length;
		return { userMessages, aiMessages };
	};

	return (
		<Card className="h-full flex flex-col border-0 shadow-none bg-transparent">
			<div className="p-4 border-b">
				<h3 className="font-semibold text-gray-900 flex items-center gap-2">
					<MessageSquare className="h-4 w-4" />
					Chat History
				</h3>
				<p className="text-sm text-gray-600 mt-1">
					{sessions.length} conversation{sessions.length !== 1 ? "s" : ""}
				</p>
			</div>

			<div className="flex-1 overflow-y-auto">
				{sessions.length === 0 ? (
					<div className="p-4 text-center text-gray-500">
						<MessageSquare className="h-8 w-8 mx-auto mb-2 opacity-50" />
						<p className="text-sm">No chat history yet</p>
						<p className="text-xs mt-1">Start a conversation to see it here</p>
					</div>
				) : (
					<div className="p-2 space-y-2">
						{sessions.map((session) => {
							const stats = getSessionStats(session);
							return (
								<div
									key={session.id}
									className="group p-3 rounded-lg border hover:bg-gray-50 transition-colors cursor-pointer"
									onClick={() => onLoadSession(session.id)}
								>
									<div className="flex items-start justify-between gap-2">
										<div className="flex-1 min-w-0">
											<h4 className="font-medium text-sm text-gray-900 truncate">
												{session.title}
											</h4>
											<p className="text-xs text-gray-600 mt-1 line-clamp-2">
												{getSessionPreview(session)}
											</p>

											<div className="flex items-center gap-2 mt-2">
												<div className="flex items-center gap-1 text-xs text-gray-500">
													<Clock className="h-3 w-3" />
													{formatDate(session.lastUpdated)}
												</div>
												<Badge variant="secondary" className="text-xs">
													{stats.userMessages + stats.aiMessages} messages
												</Badge>
											</div>
										</div>

										<Button
											variant="ghost"
											size="sm"
											className="opacity-0 group-hover:opacity-100 transition-opacity p-1 h-auto"
											onClick={(e) => {
												e.stopPropagation();
												deleteSession(session.id);
											}}
										>
											<Trash2 className="h-3 w-3 text-gray-400 hover:text-red-500" />
										</Button>
									</div>
								</div>
							);
						})}
					</div>
				)}
			</div>
		</Card>
	);
}
