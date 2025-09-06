import AdminHeader from "@/components/admin/AdminHeader";
import RedflagsTable from "@/components/admin/RedflagsTable";
import RedflagTest from "@/components/admin/RedflagTest";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ShieldAlert } from "lucide-react";

function RedFlagsManagement() {
	return (
		<div className="flex flex-col gap-4 min-h-screen">
			<AdminHeader>
				<div className="flex gap-2">
					<Input type="text" placeholder="Search red-flag phrases" />
					<Button className="text-white">+ Add new phrase</Button>
				</div>
			</AdminHeader>
			<div className="container mx-auto flex flex-col min-h-screen">
				<div className="px-7 grid md:grid-cols-3 grid-cols-1  gap-4 mb-auto">
					<RedflagsTable />
					<RedflagTest />
				</div>
				<div className="px-7 mb-5">
					<div className="bg-amber-gold rounded-sm p-4 flex gap-2">
						<ShieldAlert />
						<p>
							Red flag rules must be reviewed carefully. only trusted amdins can edit. Changes affect user
							safety immediately
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}
export default RedFlagsManagement;
