"use client";
import { ChartArea, LogOut, NotebookPen, ShieldAlert } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
	Sidebar,
	SidebarContent,
	SidebarFooter,
	SidebarHeader,
	SidebarMenu,
	SidebarMenuButton,
	SidebarMenuItem,
} from "../ui/sidebar";

const items = [
	{
		title: "Analytics and Metrics",
		url: "/admin/analytics",
		icon: ChartArea,
	},
	{
		title: "Content Management",
		url: "/admin/topics",
		icon: NotebookPen,
	},
	{
		title: "Red-Flag Management",
		url: "/admin/redflags",
		icon: ShieldAlert,
	},
];

function AdminSideBar() {
	const pathname = usePathname();
	return (
		<Sidebar>
			<SidebarHeader className=" border-b-2 py-4 mb-4 border-white">
				<div className="flex items-center gap-4">
					<Link href="/">
						<p className=" bg-[hsl(212,70%,24%)] p-2 font-bold text-2xl rounded-2xl">RM</p>{" "}
					</Link>
					<p className="font-bold text-xl">RemedyMate</p>
				</div>
			</SidebarHeader>
			<SidebarContent>
				<SidebarMenu className="px-3">
					{items.map((item) => (
						<SidebarMenuItem key={item.title}>
							<SidebarMenuButton isActive={pathname.startsWith(item.url)} asChild>
								<a href={item.url}>
									<item.icon />
									<span>{item.title}</span>
								</a>
							</SidebarMenuButton>
						</SidebarMenuItem>
					))}
					<SidebarMenuItem>
						<SidebarMenuButton asChild>
							<div className="cursor-pointer">
								<LogOut />
								<span>Logout</span>
							</div>
						</SidebarMenuButton>
					</SidebarMenuItem>
				</SidebarMenu>
			</SidebarContent>
			<SidebarFooter>Admin</SidebarFooter>
		</Sidebar>
	);
}
export default AdminSideBar;
