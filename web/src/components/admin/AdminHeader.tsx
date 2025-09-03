import { ReactNode } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

function AdminHeader({ children }: { children: ReactNode }) {
	return (
		<div className="px-7 pb-5 pt-3 shadow-2xs bg-white flex items-center justify-between">
			{children}
			<div className="flex gap-4 items-center">
				<Avatar>
					<AvatarImage src="https://github.com/shadcn.png" />
					<AvatarFallback>CN</AvatarFallback>
				</Avatar>
				<p>username</p>
			</div>
		</div>
	);
}
export default AdminHeader;
