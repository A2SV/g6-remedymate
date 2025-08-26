import AdminSideBar from "@/components/AdminSideBar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";

export default function AdminLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<SidebarProvider>
			<AdminSideBar />
			<main>
				<SidebarTrigger />
				{children}
			</main>
		</SidebarProvider>
	);
}
