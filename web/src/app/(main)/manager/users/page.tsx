import Active from "@/components/manager/Active";
import AddUser from "@/components/manager/AddUser";
import Data from "@/components/manager/Data";
import ManagerHeader from "@/components/manager/Header";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { getProfiles } from "@/data-access/profile";
import { Search } from "lucide-react";
export default async function ManagerDash() {
	const users = await getProfiles();
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
				<div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
					<Data users={users} />
					<AddUser />
				</div>
			</div>
		</div>
	);
}
