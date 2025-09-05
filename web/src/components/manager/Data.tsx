"use client";
import { ChevronDown, ChevronRight } from "lucide-react";
import { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Button } from "../ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "../ui/dropdown-menu";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../ui/table";

export default function Data() {
	const [role, setRole] = useState("Role");
	const [status, setStatus] = useState("Status");
	const [language, setLanguage] = useState("Language");

	const [openRole, setOpenRole] = useState(false);
	const [openStatus, setOpenStatus] = useState(false);
	const [openLanguage, setOpenLanguage] = useState(false);

	return (
		<div className=" bg-white rounded-md px-4">
			<div className="flex gap-5 py-3">
				<DropdownMenu onOpenChange={setOpenRole}>
					<DropdownMenuTrigger asChild>
						<button className="flex items-center justify-between gap-2 px-5 shadow-sm bg-primary text-white rounded h-7">
							{role}
							{openRole ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
						</button>
					</DropdownMenuTrigger>
					<DropdownMenuContent>
						<DropdownMenuItem onClick={() => setRole("Role: Admin")}>Admin</DropdownMenuItem>
						<DropdownMenuItem onClick={() => setRole("Role: Editor")}>Editor</DropdownMenuItem>
						<DropdownMenuItem onClick={() => setRole("Role: Viewer")}>Viewer</DropdownMenuItem>
					</DropdownMenuContent>
				</DropdownMenu>

				<DropdownMenu onOpenChange={setOpenStatus}>
					<DropdownMenuTrigger asChild>
						<button className="flex items-center justify-between gap-2 px-5 shadow-sm bg-primary text-white rounded h-7">
							{status}
							{openStatus ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
						</button>
					</DropdownMenuTrigger>
					<DropdownMenuContent>
						<DropdownMenuItem onClick={() => setStatus("Status: Active")}>Active</DropdownMenuItem>
						<DropdownMenuItem onClick={() => setStatus("Status: Inactive")}>Inactive</DropdownMenuItem>
						<DropdownMenuItem onClick={() => setStatus("Status: Pending")}>Pending</DropdownMenuItem>
					</DropdownMenuContent>
				</DropdownMenu>

				<DropdownMenu onOpenChange={setOpenLanguage}>
					<DropdownMenuTrigger asChild>
						<button className="flex items-center justify-between gap-2 px-5 shadow-sm bg-primary text-white rounded h-7">
							{language}
							{openLanguage ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
						</button>
					</DropdownMenuTrigger>
					<DropdownMenuContent>
						<DropdownMenuItem onClick={() => setLanguage("Language: English")}>English</DropdownMenuItem>
						<DropdownMenuItem onClick={() => setLanguage("Language: Spanish")}>Spanish</DropdownMenuItem>
						<DropdownMenuItem onClick={() => setLanguage("Language: French")}>French</DropdownMenuItem>
					</DropdownMenuContent>
				</DropdownMenu>
			</div>

			<div className="shadow-sm bg-white rounded-md overflow-y-auto border-b">
				<Table>
					<TableHeader className="text-left bg-primary">
						<TableRow className="">
							<TableHead className="text-white">ID</TableHead>
							<TableHead className="text-white">User</TableHead>
							<TableHead className="text-white">Email</TableHead>
							<TableHead className="text-white">Role</TableHead>
							<TableHead className="text-white">Language</TableHead>
							<TableHead className="text-white">Status</TableHead>
							<TableHead className="text-white">Action</TableHead>
						</TableRow>
					</TableHeader>

					<TableBody>
						<TableRow className="h-16">
							<TableCell className="">1</TableCell>
							<TableCell className="">
								<div className="flex items-center gap-3">
									<Avatar>
										<AvatarImage src="user1.png" alt="Abebe" />
										<AvatarFallback>AB</AvatarFallback>
									</Avatar>
									<div>
										<div className="font-medium">Abebe Bekele</div>
										<div className="text-sm text-gray-500">Ethiopia</div>
									</div>
								</div>
							</TableCell>
							<TableCell className="">abebe@remedymate.africa</TableCell>
							<TableCell>Manager</TableCell>
							<TableCell className="">English</TableCell>
							<TableCell className="">Active</TableCell>
							<TableCell className="flex gap-2">
								<Button className="text-white">Edit</Button>
								<Button className=" bg-red-600 hover:bg-red-500 text-white">Delete</Button>
							</TableCell>
						</TableRow>
					</TableBody>
				</Table>
			</div>

			<div className="px-3 pb-5 pt-3 shadow-2xs bg-white flex items-center justify-center">
				<div className="flex gap-5">
					<p>showing 1-5 of 1,284 users</p>
					<Button className=" bg-primary text-white h-7 w-15 rounded">prev</Button>
					<Button className=" bg-primary text-white h-7 w-15 rounded">next</Button>
				</div>
			</div>
		</div>
	);
}
