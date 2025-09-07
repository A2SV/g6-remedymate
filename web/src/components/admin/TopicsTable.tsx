"use client";
import { Topic } from "@/data-access/topics";
import Link from "next/link";
import { useState } from "react";
import Modal from "../Modal";
import { Button } from "../ui/button";
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "../ui/table";
import AddTopic from "./AddTopic";
interface Props {
	topics: { topics: Topic[]; total_count: number; page: number; limit: number };
}
function TopicsTable({ topics }: Props) {
	const [showModal, setShowModal] = useState(false);
	return (
		<div className="bg-white h-fit grow-1 p-2 rounded-sm">
			<h3 className="text-lg font-semibold pb-2">Topics</h3>
			<Button className="text-white mb-3" onClick={() => setShowModal(true)}>
				+ Add new topic
			</Button>
			<div className="shadow-sm bg-white rounded-md overflow-y-auto border-b">
				<Table>
					<TableCaption>A list of topics.</TableCaption>
					<TableHeader className="bg-primary">
						<TableRow className="">
							<TableHead className="text-white">Topic Name</TableHead>
							<TableHead className="text-white">Language Coverage</TableHead>
							<TableHead className="text-white">Status</TableHead>
							<TableHead className="text-white">Last Updated</TableHead>
							<TableHead className="text-white">Actions</TableHead>
						</TableRow>
					</TableHeader>
					<TableBody>
						{topics.topics.map((topic, idx) => (
							<TableRow key={idx} className={idx % 2 === 0 ? "bg-white" : "bg-blue-100/40"}>
								<TableCell>{topic.topic_key}</TableCell>

								<TableCell>
									<span
										className={`px-2 py-1 rounded text-xs font-semibold ${
											topic.status === "Active"
												? "bg-green-100 text-green-700"
												: "bg-gray-200 text-gray-700"
										}`}
									>
										{topic.status}
									</span>
								</TableCell>
								<TableCell className="flex gap-2">
									<Link
										className="bg-blue-900 px-2 rounded-sm flex items-center justify-center text-white"
										href={`/admin/topics/${encodeURIComponent(topic.topic_key)}/edit`}
									>
										Edit
									</Link>
									<Button size="sm" variant="destructive">
										Delete
									</Button>
									<Button className="text-white" size="sm" variant={"default"}>
										Test
									</Button>
								</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
				{showModal && (
					<Modal onOpenChange={() => setShowModal(false)}>
						<AddTopic />
					</Modal>
				)}
			</div>
		</div>
	);
}
export default TopicsTable;
