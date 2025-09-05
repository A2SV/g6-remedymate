"use client";
import { Users } from "lucide-react";
import UserSideBar from "../UserSideBar";

function ManagerSideBar() {
	const items = [
		{
			title: "Users",
			url: "/manager/users",
			icon: Users,
		},
	];
	return <UserSideBar navlinks={items} role="Manager" />;
}
export default ManagerSideBar;
