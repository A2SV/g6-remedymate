"use client";

import type React from "react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";
import { AlertCircle, Bot, CheckCircle, Send, User } from "lucide-react";
import { useEffect, useRef, useState } from "react";

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

interface ChatInterfaceProps {
	sessionId: string;
	onNewSession: () => void;
}

export function ChatPage({ sessionId, onNewSession }: ChatInterfaceProps) {
	const [messages, setMessages] = useState<Message[]>([]);
	const [input, setInput] = useState("");
	const [isLoading, setIsLoading] = useState(false);
	const messagesEndRef = useRef<HTMLDivElement>(null);

	// Load session from localStorage
	useEffect(() => {
		const savedSessions = localStorage.getItem("health-chat-sessions");
		if (savedSessions) {
			const sessions: ChatSession[] = JSON.parse(savedSessions);
			const currentSession = sessions.find((s) => s.id === sessionId);
			if (currentSession) {
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
					category: "question",
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
				category: "question",
			};
			setMessages([welcomeMessage]);
		}
	}, [sessionId]);

	// Save session to localStorage
	const saveSession = (updatedMessages: Message[]) => {
		const savedSessions = localStorage.getItem("health-chat-sessions");
		const sessions: ChatSession[] = savedSessions ? JSON.parse(savedSessions) : [];

		const sessionIndex = sessions.findIndex((s) => s.id === sessionId);
		const sessionTitle = updatedMessages.find((m) => m.type === "user")?.content.slice(0, 50) + "..." || "New Chat";

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

	// Auto-scroll to bottom
	useEffect(() => {
		messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
	}, [messages]);

	// Mock AI response generator
	const generateAIResponse = (userMessage: string, messageHistory: Message[]): Message => {
		const lowerMessage = userMessage.toLowerCase();

		// Symptom keywords
		const symptomKeywords = [
			"pain",
			"ache",
			"hurt",
			"fever",
			"headache",
			"nausea",
			"dizzy",
			"tired",
			"cough",
			"sore",
			"swollen",
			"rash",
			"itch",
		];
		const hasSymptoms = symptomKeywords.some((keyword) => lowerMessage.includes(keyword));

		let response = "";
		let category: Message["category"] = "question";

		if (messageHistory.length <= 2) {
			// Initial symptom gathering
			if (hasSymptoms) {
				response =
					"I understand you're experiencing some symptoms. To better help you, could you please provide more details about:\n\n• When did these symptoms start?\n• How severe are they on a scale of 1-10?\n• Have you noticed any patterns or triggers?\n• Are you taking any medications currently?\n\nThis information will help me provide more targeted guidance.";
				category = "assessment";
			} else {
				response =
					"I'm here to help with your health concerns. Could you describe any symptoms you're experiencing? For example, you might mention pain, discomfort, changes in how you feel, or anything that seems unusual for you.";
				category = "question";
			}
		} else {
			// Follow-up responses
			if (
				lowerMessage.includes("severe") ||
				lowerMessage.includes("emergency") ||
				lowerMessage.includes("chest pain")
			) {
				response =
					"⚠️ Based on what you've described, these symptoms may require immediate medical attention. I strongly recommend:\n\n• Contact your healthcare provider immediately\n• Consider visiting an urgent care center or emergency room\n• Call emergency services if symptoms are severe\n\nPlease don't delay seeking professional medical care for serious symptoms.";
				category = "recommendation";
			} else if (lowerMessage.includes("better") || lowerMessage.includes("improving")) {
				response =
					"I'm glad to hear you're feeling better! Here are some general wellness tips to support your recovery:\n\n• Stay hydrated with plenty of water\n• Get adequate rest and sleep\n• Eat nutritious foods\n• Monitor your symptoms\n\nIf symptoms return or worsen, don't hesitate to consult with a healthcare professional.";
				category = "recommendation";
			} else {
				response =
					"Thank you for providing those details. Based on what you've shared, here are some general considerations:\n\n• Your symptoms could have various causes\n• Keeping track of when they occur can be helpful\n• Consider any recent changes in diet, stress, or activities\n\nI recommend discussing these symptoms with a healthcare provider who can perform a proper examination and provide personalized medical advice. Would you like me to suggest some questions you could ask your doctor?";
				category = "assessment";
			}
		}

		return {
			id: `ai-${Date.now()}`,
			type: "ai",
			content: response,
			timestamp: new Date(),
			category,
		};
	};

	const handleSend = async () => {
		if (!input.trim() || isLoading) return;

		const userMessage: Message = {
			id: `user-${Date.now()}`,
			type: "user",
			content: input.trim(),
			timestamp: new Date(),
			category: "symptom",
		};

		const updatedMessages = [...messages, userMessage];
		setMessages(updatedMessages);
		setInput("");
		setIsLoading(true);

		// Simulate AI thinking time
		setTimeout(() => {
			const aiResponse = generateAIResponse(input.trim(), messages);
			const finalMessages = [...updatedMessages, aiResponse];
			setMessages(finalMessages);
			saveSession(finalMessages);
			setIsLoading(false);
		}, 1000 + Math.random() * 2000);
	};

	const handleKeyPress = (e: React.KeyboardEvent) => {
		if (e.key === "Enter" && !e.shiftKey) {
			e.preventDefault();
			handleSend();
		}
	};

	return (
		<Card className="flex flex-col">
			{/* Messages */}
			<div className="h-[60vh] flex flex-col overflow-y-auto p-4 space-y-4">
				{messages.map((message) => (
					<div
						key={message.id}
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
							{message.category && message.type === "ai" && (
								<div className="mb-2">
									<Badge
										variant="secondary"
										className={cn(
											"text-xs",
											message.category === "recommendation" && "bg-green-100 text-green-700",
											message.category === "assessment" && "bg-blue-100 text-blue-700",
											message.category === "question" && "bg-purple-100 text-purple-700"
										)}
									>
										{message.category === "recommendation" && (
											<CheckCircle className="h-3 w-3 mr-1" />
										)}
										{message.category === "assessment" && <AlertCircle className="h-3 w-3 mr-1" />}
										{message.category}
									</Badge>
								</div>
							)}

							<div className="whitespace-pre-wrap">{message.content}</div>

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
