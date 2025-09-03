import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Apple, SendIcon, ShieldAlert, Smartphone } from "lucide-react";

export default function ChatboxPage() {
	return (
		<div className="relative flex items-center justify-center">
			<div className="w-full md:w-9/10 max-w-[800px] mx-auto bg-white dark:bg-gray-800">
				<header className="flex justify-between px-6 py-4 shadow-md h-[50px]">
					<h1 className="top-3 font-bold text-center flex-1">Symptom Checker</h1>
				</header>
				<div className="h-[60vh] flex flex-col p-3 overflow-y-auto space-y-2">
					<div className="w-fit max-w-[70%] rounded-lg bg-gray-200 px-4 py-2 text-gray-900">
						Hello, how are you?
					</div>

					<div className="w-fit max-w-[70%] self-end rounded-lg bg-blue-600 px-4 py-2 text-white">
						I’m good, thanks! And you?
					</div>

					<div className="w-fit max-w-[70%] rounded-lg bg-gray-200 px-4 py-2 text-gray-900">Doing well!</div>

					<div className="w-fit max-w-[70%] self-end rounded-lg bg-blue-600 px-4 py-2 text-white">
						That’s great to hear.
					</div>
				</div>

				<footer className="px-3 py-4 border-t">
					<div className="flex items-center gap-2 relative">
						<div className="relative flex-1">
							<Input type="text" placeholder="Type a message..." className="w-full h-[50px] pl-3 pr-14" />
							<div className="absolute right-3 bottom-1 w-10 h-10  rounded-full flex items-center justify-center cursor-pointer">
								<SendIcon />
							</div>
						</div>
					</div>
					<div className="mt-5">
						<div className="bg-amber-gold rounded-sm p-4 flex flex-col md:flex-row items-center gap-2">
							<div className="flex gap-3 items-start">
								<ShieldAlert className="w-1/4" />
								<p className="grow-1">
									This is a demo version of the application. please download the mobile app.
								</p>
							</div>
							<div className="flex flex-col gap-3 md:flex-row">
								<Button variant="default" className="bg-[hsl(160,84%,25%)] flex items-center gap-2">
									<Smartphone className="w-6 h-6 text-white" /> Get it on Android
								</Button>
								<Button variant="secondary" className="bg-[#F59E0B] flex items-center gap-2">
									<Apple className="w-6 h-6 text-black" /> Download for iOS
								</Button>
							</div>
						</div>
					</div>
				</footer>
			</div>
		</div>
	);
}
