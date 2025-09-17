"use client";
import { Sidebar, SidebarContent, SidebarMenu, SidebarMenuItem } from "@/components/ui/sidebar";
import { ReactNode } from "react";

function ChatSideBar({ children }: { children: ReactNode }) {
	return (
		<Sidebar>
			<SidebarContent className="bg-white w-full">
				<SidebarMenu>
					{children}
					<SidebarMenuItem></SidebarMenuItem>
				</SidebarMenu>
			</SidebarContent>
		</Sidebar>
	);
}
export default ChatSideBar;
