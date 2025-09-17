"use client";

import ChatHeader from "@/components/chat/ChatHeader";
import { ChatHistory } from "@/components/chat/ChatHistory";
import { ChatPage, Message } from "@/components/chat/ChatPage";
import ChatSideBar from "@/components/chat/ChatSideBar";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { saveSession } from "@/data-access/chatstorage";
import { MessageSquare } from "lucide-react";
import { useEffect, useState } from "react";

export default function HealthGuidancePage() {
	const [currentSessionId, setCurrentSessionId] = useState<string | null>(null);
	const [language, setLanguage] = useState<"en" | "am">("en");

	useEffect(() => {
		// Create a new session on page load
		const sessionId = `session-${Date.now()}`;
		setCurrentSessionId(sessionId);
		// Save a new session with a welcome message
		const welcomeMessage: Message = {
			id: "welcome",
			type: "ai",
			content:
				"Hello! I'm your HealthGuide AI assistant. I'm here to help you understand your symptoms and provide general health guidance. Please describe any symptoms you're experiencing, and I'll ask follow-up questions to better understand your situation. Remember, I'm not a replacement for professional medical care.",
			timestamp: new Date(),
			language: language,
		};
		saveSession([welcomeMessage], sessionId);
	}, []);

	const handleNewChat = () => {
		const sessionId = `session-${Date.now()}`;
		setCurrentSessionId(sessionId);
	};

	const handleLoadSession = (sessionId: string) => {
		setCurrentSessionId(sessionId);
	};

	return (
		<div className="">
			<div className="flex h-screen">
				<ChatSideBar>
					<div className="border-r bg-white/50 backdrop-blur-sm">
						<div className="p-4 border-b">
							<Button
								onClick={handleNewChat}
								className="w-full cursor-pointer flex items-center gap-2 text-white hover:opacity-90"
								style={{ backgroundColor: "#0d2a4b" }}
							>
								<MessageSquare className="h-4 w-4" />
								New Chat
							</Button>
						</div>
						<ChatHistory sessionId={currentSessionId} onLoadSession={handleLoadSession} />
					</div>
				</ChatSideBar>

				<div className="flex-1 flex flex-col">
					<ChatHeader />
					{/* Disclaimer */}
					<Card className="m-6 mb-4 p-4 bg-amber-50 border-amber-200">
						<div className="flex items-start gap-3">
							<div className="p-1 bg-amber-100 rounded-full mt-0.5">
								<div className="w-2 h-2 bg-amber-600 rounded-full" />
							</div>
							<div className="text-sm">
								<p className="font-medium text-amber-800 mb-1">Important Medical Disclaimer</p>
								<p className="text-amber-700">
									This AI assistant provides general health information only and is not a substitute
									for professional medical advice. Always consult with a qualified healthcare provider
									for medical concerns.
								</p>
							</div>
						</div>
					</Card>

					{/* Chat Interface */}
					<div className="grow-1 px-6 pb-6">
						{currentSessionId && <ChatPage language={language} sessionId={currentSessionId} />}
					</div>
				</div>
			</div>
		</div>
	);
}
