import { Button } from "../ui/button";
import { Input } from "../ui/input";
export default function Footer() {
	return (
		<div className="bg-white rounded-md p-4">
			<h3 className="text-bold text-lg">Quick Add User</h3>
			<div className="flex gap-5 py-3 ">
				<Input type="text" placeholder="Full Name" className="flex border rounded h-12 shadow-sm text-bold" />
				<Input type="text" placeholder="Email" className="flex border rounded h-12 shadow-sm text-bold" />
				<Input type="text" placeholder="Role" className="flex border rounded h-12 shadow-sm text-bold" />
			</div>
			<div className="bg-white flex items-center justify-between">
				<div className="flex gap-5">
					<Button className=" text-white  bg-primary h-10 w-20 rounded">Clear</Button>
					<Button className=" text-white  bg-primary h-10 w-20 rounded">Add User</Button>
				</div>
			</div>
		</div>
	);
}
