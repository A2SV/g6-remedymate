import AdminSideBar from "@/components/admin/AdminSideBar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";

export default function AdminLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<SidebarProvider>
			<AdminSideBar />
			<main className="grow-1">
				<div className="bg-white">
					<SidebarTrigger />
				</div>
				{children}
			</main>
		</SidebarProvider>
	);
}
