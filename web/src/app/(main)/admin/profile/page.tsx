import AdminHeader from "@/components/admin/AdminHeader";
import Account from "@/components/Profile/Account";
import Activity from "@/components/Profile/Activity";
import Administrator from "@/components/Profile/Administrator";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const ProfilePage = () => {
	return (
		<div className="">
			<AdminHeader>
				<div className="flex gap-2">
					<Input type="text" placeholder="Search topics" />
					<Button className="text-white">+ Add new topic</Button>
				</div>
			</AdminHeader>
			<div className="container mx-auto">
				<div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-10 mt-5 px-7">
					<h1 className="font-bold text-2xl mb-3 sm:mb-0">Profile Management</h1>

					<div className="flex gap-2 flex-wrap">
						<Button className="cursor-pointer" variant={"destructive"}>
							Discard
						</Button>
						<Button className="cursor-pointer text-white">Save Profile</Button>
					</div>
				</div>
				<div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10 px-7">
					<Administrator />
					<div>
						<Account />
						<Activity />
					</div>
				</div>
			</div>
		</div>
	);
};

export default ProfilePage;
