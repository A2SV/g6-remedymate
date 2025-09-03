"use client";
import Link from "next/link";
import { Button } from "../ui/button";
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "../ui/table";

function RedflagsTable() {
	return (
		<div className="bg-white h-fit grow-1 p-2 rounded-sm">
			<h3 className="text-lg font-semibold pb-2">Redflags</h3>
			<Table>
				<TableCaption>A list of red flags.</TableCaption>
				<TableHeader className="bg-primary">
					<TableRow className="">
						<TableHead className="text-white">Red flag phrase(English)</TableHead>
						<TableHead className="text-white">Red flag phrase(Amharic)</TableHead>
						<TableHead className="text-white">Actions</TableHead>
					</TableRow>
				</TableHeader>
				<TableBody>
					<TableRow>
						<TableCell className="font-medium">English</TableCell>
						<TableCell>Amharic</TableCell>
						<TableCell className="flex gap-2">
							<Link
								href="/admin/redflags/1"
								scroll={false}
								className="bg-blue-900 px-2 rounded-sm flex items-center justify-center text-white"
							>
								Edit
							</Link>
							<Button variant={"destructive"}>Delete</Button>
						</TableCell>
					</TableRow>
				</TableBody>
			</Table>
		</div>
	);
}
export default RedflagsTable;
