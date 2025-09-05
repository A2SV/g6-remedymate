"use client";
import { signOut } from "next-auth/react";
import Link from "next/link";
import { ReactNode } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Button } from "../ui/button";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "../ui/dropdown-menu";

function ManagerHeader({ children }: { children: ReactNode }) {
	return (
		<div className="px-7 pb-5 pt-3 shadow-2xs bg-white flex items-center justify-between">
			{children}
			<div className="flex gap-4 items-center">
				<DropdownMenu>
					<DropdownMenuTrigger>
						<Avatar>
							<AvatarImage className="cursor-pointer" src="https://github.com/shadcn.png" />
							<AvatarFallback>CN</AvatarFallback>
						</Avatar>
					</DropdownMenuTrigger>
					<DropdownMenuContent className="md:w-60">
						<DropdownMenuLabel>My Account</DropdownMenuLabel>
						<DropdownMenuSeparator />
						<DropdownMenuItem>
							<Link href="/manager/profile">Profile</Link>
						</DropdownMenuItem>
						<DropdownMenuItem>
							<Button className="w-full text-white" onClick={() => signOut()}>
								Logout
							</Button>
						</DropdownMenuItem>
					</DropdownMenuContent>
				</DropdownMenu>
				<p>username</p>
			</div>
		</div>
	);
}
export default ManagerHeader;
