"use client";

import { Button } from "../ui/button";

export default function DashboardButtons() {
	return (
		<div className="flex gap-3 mb-4">
			<Button className="flex-1 flex flex-col justify-start items-start bg-white hover:bg-gray-100 h-25 shadow-md">
				<span className="text-sm ">Total Users</span>
				<span className="text-3xl font-bold">1,284</span>
			</Button>

			<Button className="flex-1 flex flex-col justify-start items-start bg-white hover:bg-gray-100 h-25 shadow-md">
				<span className="text-sm ">Active(30d)</span>
				<span className="text-3xl font-bold">847</span>
			</Button>
			<Button className="flex-1 flex flex-col justify-start items-start bg-white hover:bg-gray-100 h-25 shadow-md">
				<span className="text-sm ">New This Week</span>
				<span className="text-3xl font-bold">62</span>
			</Button>
			<Button className="flex-1 flex flex-col justify-start items-start bg-white hover:bg-gray-100 h-25 shadow-md">
				<span className="text-sm ">Admins</span>
				<span className="text-3xl font-bold">14</span>
			</Button>
		</div>
	);
}
