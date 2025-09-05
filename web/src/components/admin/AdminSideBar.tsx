"use client";
import { ChartArea, Heart, NotebookPen, ShieldAlert } from "lucide-react";
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
		<Sidebar collapsible="icon">
			<SidebarHeader className=" border-b-2 py-4 mb-4 border-white">
				<div className="flex items-center gap-4">
					<Link href="/">
						<Heart />
					</Link>
					<p className="font-bold text-xl group-data-[collapsible=icon]:hidden">RemedyMate</p>
				</div>
			</SidebarHeader>
			<SidebarContent>
				<SidebarMenu>
					{items.map((item) => (
						<SidebarMenuItem className="px-2" key={item.title}>
							<SidebarMenuButton
								className="w-full"
								size={"lg"}
								isActive={pathname.startsWith(item.url)}
								asChild
							>
								<Link
									href={item.url}
									className="flex items-center group-data-[collapsible=icon]:justify-center"
								>
									<item.icon />
									<span className="group-data-[collapsible=icon]:hidden">{item.title}</span>
								</Link>
							</SidebarMenuButton>
						</SidebarMenuItem>
					))}
					<SidebarMenuItem></SidebarMenuItem>
				</SidebarMenu>
			</SidebarContent>
			<SidebarFooter className="group-data-[collapsible=icon]:hidden">
				Administrator
				<p className="text-xs">© {new Date().getFullYear().toString()} RemedyMate. All rights reserved.</p>
			</SidebarFooter>
		</Sidebar>
	);
}
export default AdminSideBar;
