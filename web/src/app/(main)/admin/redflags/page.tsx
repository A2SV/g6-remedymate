import AdminHeader from "@/components/AdminHeader";
import RedflagsTable from "@/components/RedflagsTable";
import RedflagTest from "@/components/RedflagTest";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ShieldAlert } from "lucide-react";

function RedFlagsManagement() {
	return (
		<div className="flex flex-col gap-4 min-h-screen">
			<AdminHeader>
				<div className="flex gap-2">
					<Input type="text" placeholder="Search red-flag phrases" />
					<Button>+ Add new phrase</Button>
				</div>
			</AdminHeader>
			<div className="grow-1 px-7 flex gap-4">
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
	);
}
export default RedFlagsManagement;
