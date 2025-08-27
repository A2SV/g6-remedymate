import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Textarea } from "@/components/ui/textarea";
import { ShieldAlert } from "lucide-react";

function RedFlagsManagement() {
	return (
		<div className="flex flex-col gap-4 min-h-screen">
			<div className="px-7 pb-5 pt-3 shadow-2xs bg-white flex items-center justify-between">
				<div className="flex gap-2">
					<Input type="text" placeholder="Search red-flag phrases" />
					<Button>+ Add new phrase</Button>
				</div>
				<div className="flex gap-4 items-center">
					<Avatar>
						<AvatarImage src="https://github.com/shadcn.png" />
						<AvatarFallback>CN</AvatarFallback>
					</Avatar>
					<p>username</p>
				</div>
			</div>
			<div className="grow-1 px-7 flex gap-4">
				<div className="bg-white h-fit grow-1 p-2 rounded-sm">
					<Table>
						<TableCaption>A list of red flags.</TableCaption>
						<TableHeader className="bg-primary">
							<TableRow className="">
								<TableHead className="w-[100px] text-white">Red flag phrase(English)</TableHead>
								<TableHead className="text-white">Red flag phrase(Amharic)</TableHead>
								<TableHead className="text-white">Actions</TableHead>
							</TableRow>
						</TableHeader>
						<TableBody>
							<TableRow>
								<TableCell className="font-medium">English</TableCell>
								<TableCell>Amharic</TableCell>
								<TableCell className="flex gap-2">
									<Button className="bg-blue-900">Edit</Button>
									<Button className="bg-red-600">Delete</Button>
								</TableCell>
							</TableRow>
						</TableBody>
					</Table>
				</div>
				<div className="bg-white h-fit p-2 rounded-sm w-1/3">
					<form className=" flex flex-col gap-2">
						<h3>Test reg flag detection</h3>
						<Textarea className="resize-none" placeholder="Enter a simple phrase" />
						<Button className="w-full">Run test</Button>
					</form>
				</div>
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
