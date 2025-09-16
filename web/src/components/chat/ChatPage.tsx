"use client";

import type React from "react";

import { sendMessage } from "@/actions/chat";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { saveSession } from "@/data-access/chatstorage";
import { cn } from "@/lib/utils";
import { Bot, Send, User } from "lucide-react";
import { useEffect, useRef, useState } from "react";

export interface Message {
	id: string;
	type: "user" | "ai";
	content: string | React.ReactNode;
	timestamp: Date;
	chatId?: string;
	language: "en" | "am";
}

export interface ChatSession {
	id: string;
	messages: Message[];
	title: string;
	createdAt: Date;
	lastUpdated: Date;
}

interface ChatInterfaceProps {
	sessionId: string;
	language: "en" | "am";
}

export function ChatPage({ sessionId, language }: ChatInterfaceProps) {
	const [messages, setMessages] = useState<Message[]>([]);
	const [input, setInput] = useState("");
	const [isLoading, setIsLoading] = useState(false);
	const messagesEndRef = useRef<HTMLDivElement>(null);
	const [chatId, setChatId] = useState<string | undefined>();

	// Load session from localStorage
	useEffect(() => {
		const savedSessions = localStorage.getItem("health-chat-sessions");
		if (savedSessions) {
			const sessions: ChatSession[] = JSON.parse(savedSessions);
			const currentSession = sessions.find((s) => s.id === sessionId);
			if (currentSession && currentSession.messages.length > 0) {
				setMessages(
					currentSession.messages.map((m) => ({
						...m,
						timestamp: new Date(m.timestamp),
					}))
				);
			} else {
				// New session - start with welcome message
				const welcomeMessage: Message = {
					id: "welcome",
					type: "ai",
					content:
						"Hello! I'm your HealthGuide AI assistant. I'm here to help you understand your symptoms and provide general health guidance. Please describe any symptoms you're experiencing, and I'll ask follow-up questions to better understand your situation. Remember, I'm not a replacement for professional medical care.",
					timestamp: new Date(),
					language: language,
				};
				setMessages([welcomeMessage]);
			}
		} else {
			// First time - start with welcome message
			const welcomeMessage: Message = {
				id: "welcome",
				type: "ai",
				content:
					"Hello! I'm your HealthGuide AI assistant. I'm here to help you understand your symptoms and provide general health guidance. Please describe any symptoms you're experiencing, and I'll ask follow-up questions to better understand your situation. Remember, I'm not a replacement for professional medical care.",
				timestamp: new Date(),
				language: language,
			};
			setMessages([welcomeMessage]);
		}
		setChatId(undefined);
	}, [sessionId, language]);

	const handleSend = async () => {
		if (!input.trim() || isLoading) return;

		const userMessage: Message = {
			id: `user-${Date.now()}`,
			type: "user",
			content: input.trim(),
			timestamp: new Date(),
			language,
			chatId,
		};

		const updatedMessages = [...messages, userMessage];
		setMessages(updatedMessages); // only updates state
		setInput("");
		setIsLoading(true);

		try {
			const resp = await sendMessage(userMessage);

			let aiResponse: Message;

			if ("error" in resp) {
				aiResponse = {
					id: `ai-${Date.now()}`,
					type: "ai",
					content: resp.error,
					timestamp: new Date(),
					language,
				};
			} else if ("remedy" in resp) {
				// Store as serializable object
				aiResponse = {
					id: `ai-${Date.now()}`,
					type: "ai",
					content: JSON.stringify({
						selfCare: resp.remedy.guidance_card.self_care,
						otcCategories: resp.remedy.guidance_card.otc_categories,
						seekCareIf: resp.remedy.guidance_card.seek_care_if,
					}),
					timestamp: new Date(),
					language,
					chatId: resp.conversation_id,
				};
				setChatId(resp.conversation_id);
			} else {
				aiResponse = {
					id: `ai-${Date.now()}`,
					type: "ai",
					content: resp.question.text,
					timestamp: new Date(),
					language,
					chatId: resp.conversation_id,
				};
				setChatId(resp.conversation_id);
			}

			setMessages((prev) => [...prev, aiResponse]);
		} catch (error) {
			console.error(error);
			const aiResponse: Message = {
				id: `ai-${Date.now()}`,
				type: "ai",
				content: "Error occurred, please try again later.",
				timestamp: new Date(),
				language,
			};
			setMessages((prev) => [...prev, aiResponse]);
		} finally {
			setIsLoading(false);
		}
	};

	// persist session automatically whenever messages change
	useEffect(() => {
		if (messages.length > 0) {
			saveSession(messages, sessionId);
		}
		messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
	}, [messages, sessionId]);

	const handleKeyPress = (e: React.KeyboardEvent) => {
		if (e.key === "Enter" && !e.shiftKey) {
			e.preventDefault();
			handleSend();
		}
	};

	return (
		<Card className="flex flex-col">
			{/* Messages */}
			<div className="grow-1 flex flex-col h-[50vh] overflow-y-auto p-4 space-y-4">
				{messages.map((message) => (
					<div
						key={message.timestamp.getTime()}
						className={cn("flex gap-3", message.type === "user" ? "justify-end" : "justify-start")}
					>
						{message.type === "ai" && (
							<div
								className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center"
								style={{ backgroundColor: "#0d2a4b" }}
							>
								<Bot className="h-4 w-4 text-white" />
							</div>
						)}

						<div
							className={cn(
								"max-w-[80%] rounded-lg p-3 text-sm",
								message.type === "user" ? "text-white" : "bg-gray-100 text-gray-900"
							)}
							style={message.type === "user" ? { backgroundColor: "#0d2a4b" } : {}}
						>
							<div className="whitespace-pre-wrap">
								{(() => {
									// Try to parse rich AI content
									if (message.type === "ai" && typeof message.content === "string") {
										try {
											const parsed = JSON.parse(message.content as string);
											if (
												parsed &&
												(parsed.selfCare?.length ||
													parsed.otcCategories?.length ||
													parsed.seekCareIf?.length)
											) {
												return (
													<div className="space-y-4">
														{parsed.selfCare?.length > 0 && (
															<div className="border-l-4 border-green-500 bg-green-50 p-3 rounded">
																<div className="font-semibold text-green-700 mb-1">
																	Self Care Advice
																</div>
																<ul className="list-disc ml-5 text-green-800">
																	{parsed.selfCare.map(
																		(advice: string, idx: number) => (
																			<li key={idx}>{advice}</li>
																		)
																	)}
																</ul>
															</div>
														)}
														{parsed.otcCategories?.length > 0 && (
															<div className="border-l-4 border-orange-500 bg-orange-50 p-3 rounded">
																<div className="font-semibold text-orange-700 mb-1">
																	Over-the-Counter Advice
																</div>
																<ul className="list-disc ml-5 text-orange-800">
																	{parsed.otcCategories.map(
																		(
																			advice: { safety_note: string },
																			idx: number
																		) => (
																			<li key={idx}>{advice.safety_note}</li>
																		)
																	)}
																</ul>
															</div>
														)}
														{parsed.seekCareIf?.length > 0 && (
															<div className="border-l-4 border-red-500 bg-red-50 p-3 rounded">
																<div className="font-semibold text-red-700 mb-1">
																	Seek Care Advice
																</div>
																<ul className="list-disc ml-5 text-red-800">
																	{parsed.seekCareIf.map(
																		(advice: string, idx: number) => (
																			<li key={idx}>{advice}</li>
																		)
																	)}
																</ul>
															</div>
														)}
													</div>
												);
											}
										} catch {
											// Not JSON, just render as text
										}
									}
									// Default: render as text or ReactNode
									return message.content;
								})()}
							</div>

							<div
								className={cn(
									"text-xs mt-2 opacity-70",
									message.type === "user" ? "text-blue-100" : "text-gray-500"
								)}
							>
								{message.timestamp.toLocaleTimeString()}
							</div>
						</div>

						{message.type === "user" && (
							<div
								className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center"
								style={{ backgroundColor: "#0d2a4b" }}
							>
								<User className="h-4 w-4 text-white" />
							</div>
						)}
					</div>
				))}

				{isLoading && (
					<div className="flex gap-3 justify-start">
						<div
							className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center"
							style={{ backgroundColor: "#0d2a4b" }}
						>
							<Bot className="h-4 w-4 text-white" />
						</div>
						<div className="bg-gray-100 rounded-lg p-3 text-sm">
							<div className="flex items-center gap-2">
								<div className="flex space-x-1">
									<div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" />
									<div
										className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
										style={{ animationDelay: "0.1s" }}
									/>
									<div
										className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
										style={{ animationDelay: "0.2s" }}
									/>
								</div>
								<span className="text-gray-500">Analyzing your symptoms...</span>
							</div>
						</div>
					</div>
				)}

				<div ref={messagesEndRef} />
			</div>

			{/* Input */}
			<div className="border-t p-4">
				<div className="flex gap-2">
					<Textarea
						value={input}
						onChange={(e) => setInput(e.target.value)}
						onKeyPress={handleKeyPress}
						placeholder="Describe your symptoms in detail..."
						className="min-h-[60px] resize-none"
						disabled={isLoading}
					/>
					<Button
						onClick={handleSend}
						disabled={!input.trim() || isLoading}
						className="px-4 text-white hover:opacity-90"
						style={{ backgroundColor: "#0d2a4b" }}
					>
						<Send className="h-4 w-4" />
					</Button>
				</div>
				<p className="text-xs text-gray-500 mt-2">Press Enter to send, Shift+Enter for new line</p>
			</div>
		</Card>
	);
}
