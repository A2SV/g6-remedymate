"use client";
import { Redflag } from "@/data-access/redflags";
import Link from "next/link";
import { Button } from "../ui/button";
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "../ui/table";
interface Props {
	redflags: Redflag[];
}
function RedflagsTable({ redflags }: Props) {
	return (
		<div className="bg-white p-2 rounded-sm md:col-span-2">
			<h3 className="text-lg font-semibold pb-2">Redflags</h3>
			<div className="shadow-sm bg-white rounded-md overflow-y-auto border-b">
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
						{redflags.map((redflag, idx) => (
							<TableRow key={idx}>
								<TableCell className="font-medium">{redflag.description}</TableCell>
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
						))}
					</TableBody>
				</Table>
			</div>
		</div>
	);
}
export default RedflagsTable;
