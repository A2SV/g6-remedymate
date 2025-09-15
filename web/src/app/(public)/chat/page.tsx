"use client";

import { ChatHistory } from "@/components/chat/ChatHistory";
import { ChatPage } from "@/components/chat/ChatPage";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { MessageSquare } from "lucide-react";
import { useEffect, useState } from "react";

export default function HealthGuidancePage() {
	const [currentSessionId, setCurrentSessionId] = useState<string | null>(null);

	useEffect(() => {
		// Create a new session on page load
		const sessionId = `session-${Date.now()}`;
		setCurrentSessionId(sessionId);
	}, []);

	const handleNewChat = () => {
		const sessionId = `session-${Date.now()}`;
		setCurrentSessionId(sessionId);
	};

	const handleLoadSession = (sessionId: string) => {
		setCurrentSessionId(sessionId);
	};

	return (
		<div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
			<div className="flex h-screen">
				<div className="w-80 border-r bg-white/50 backdrop-blur-sm">
					<div className="p-4 border-b">
						<Button
							onClick={handleNewChat}
							className="w-full flex items-center gap-2 text-white hover:opacity-90"
							style={{ backgroundColor: "#0d2a4b" }}
						>
							<MessageSquare className="h-4 w-4" />
							New Chat
						</Button>
					</div>

					<div className="flex-1">
						<ChatHistory onLoadSession={handleLoadSession} />
					</div>
				</div>

				<div className="flex-1 flex flex-col">
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
					<div className="flex-1 px-6 pb-6">
						{currentSessionId && <ChatPage sessionId={currentSessionId} onNewSession={handleNewChat} />}
					</div>
				</div>
			</div>
		</div>
	);
}
