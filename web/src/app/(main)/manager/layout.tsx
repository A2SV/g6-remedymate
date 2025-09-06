import ManagerSideBar from "@/components/manager/ManagerSideBar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";

export default function AdminLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<SidebarProvider>
			<ManagerSideBar />
			<main className="grow-1">
				<div className="bg-white">
					<SidebarTrigger />
				</div>
				{children}
			</main>
		</SidebarProvider>
	);
}
