"use client";
import { ChartArea, NotebookPen, ShieldAlert } from "lucide-react";
import UserSideBar from "../UserSideBar";

function AdminSideBar() {
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
	return <UserSideBar navlinks={items} role="Administrator" />;
}
export default AdminSideBar;
