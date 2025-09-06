import Active from "@/components/manager/Active";
import AddUser from "@/components/manager/AddUser";
import Data from "@/components/manager/Data";
import ManagerHeader from "@/components/manager/Header";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
export default function ManagerDash() {
	return (
		<div className="min-h-screen">
			<ManagerHeader>
				<div className="flex gap-2">
					<Input type="text" placeholder="Search users" />
					<Button className="text-white">
						<Search />
					</Button>
				</div>
			</ManagerHeader>
			<div className="container mx-auto px-7 my-4 flex flex-col gap-4">
				<Active />
				<Data />
				<AddUser />
			</div>
		</div>
	);
}
