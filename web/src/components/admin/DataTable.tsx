"use client";

import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "../ui/table";

type DataRow = {
	topic: string;
	sessions: number;
	duration: string;
	redFlag: string;
};

type DataTableProps = {
	data: DataRow[];
};

export default function DataTable({ data }: DataTableProps) {
	return (
		<div className="bg-white h-fit grow-1 p-2 rounded-sm">
			<Table>
				<TableCaption>A list of top topics.</TableCaption>
				<TableHeader className="bg-primary">
					<TableRow className="">
						<TableHead className="text-white">Topic</TableHead>
						<TableHead className="text-white">Sessions</TableHead>
						<TableHead className="text-white">Avg. Duration</TableHead>
						<TableHead className="text-white">% Red-Flag</TableHead>
					</TableRow>
				</TableHeader>
				<TableBody>
					{data.map((row, idx) => (
						<TableRow key={idx} className={idx % 2 === 0 ? "bg-white" : "bg-blue-100/40"}>
							<TableCell className="px-6 py-3 font-medium text-foreground">{row.topic}</TableCell>
							<TableCell className="px-6 py-3">{row.sessions.toLocaleString()}</TableCell>
							<TableCell className="px-6 py-3">{row.duration}</TableCell>
							<TableCell className="px-6 py-3">{row.redFlag}</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</div>
	);
}
