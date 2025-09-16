import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";

function ChatLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<SidebarProvider className="">
			<main className="grow-1">
				<div className="bg-white">
					<SidebarTrigger />
				</div>
				{children}
			</main>
		</SidebarProvider>
	);
}
export default ChatLayout;
