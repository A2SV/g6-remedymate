import AdminHeader from "@/components/admin/AdminHeader";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { ShieldAlert } from "lucide-react";
import Link from "next/link";

// Mock data
const topics = [
	{
		id: "headache",
		name: "Headache",
		languages: ["EN", "AM"],
		status: "Active",
		updated: "2025-08-16 14:22",
	},
	{
		id: "diarrhea",
		name: "Diarrhea",
		languages: ["EN", "AM"],
		status: "Active",
		updated: "2025-08-17 09:41",
	},
	{
		id: "sore-throat",
		name: "Sore Throat",
		languages: ["EN"],
		status: "Archived",
		updated: "2025-08-12 18:02",
	},
];

export default function TopicsPage() {
	return (
		<div className="min-h-screen">
			<AdminHeader>
				<div className="flex gap-2">
					<Input type="text" placeholder="Search topics" />
					<Button className="text-white">+ Add new topic</Button>
				</div>
			</AdminHeader>
			{/* Grid: main list + right-side mobile preview */}
			<div className="container mx-auto">
				<div className="grid grid-cols-1 lg:grid-cols-3 gap-6 px-7 mt-4">
					<div className="lg:col-span-2">
						<div className="bg-white h-fit grow-1 p-2 rounded-sm">
							<h3 className="text-lg font-semibold pb-2">Topics</h3>
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
										{topics.map((topic, idx) => (
											<TableRow
												key={idx}
												className={idx % 2 === 0 ? "bg-white" : "bg-blue-100/40"}
											>
												<TableCell>{topic.name}</TableCell>
												<TableCell>
													{topic.languages.map((lang) => (
														<span
															key={lang}
															className=" bg-blue-100 rounded mr-1 text-xs font-semibold"
														>
															{lang}
														</span>
													))}
												</TableCell>
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
												<TableCell>{topic.updated}</TableCell>
												<TableCell className="flex gap-2">
													<Link
														className="bg-blue-900 px-2 rounded-sm flex items-center justify-center text-white"
														href={`/admin/topics/${encodeURIComponent(topic.id)}/edit`}
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
							</div>
						</div>
					</div>

					<aside className="lg:col-span-1">
						<div className="w-full max-w-xs mx-auto bg-white rounded-lg shadow overflow-hidden">
							<div className="p-4 space-y-3">
								<h3 className="text-lg font-semibold">Topic test result</h3>
								<div className="rounded-md overflow-hidden">
									<div className="bg-green-700 text-white px-3 py-2 font-semibold">Self-care</div>
									<div className="px-3 py-2 bg-green-50 text-sm text-gray-800">
										Hydration, rest, dark room
									</div>
								</div>

								<div className="rounded-md overflow-hidden">
									<div className="bg-orange-500 text-white px-3 py-2 font-semibold">OTC</div>
									<div className="px-3 py-3 bg-orange-50">
										<div className="flex gap-2 flex-wrap">
											<span className="bg-blue-600 text-white px-2 py-1 rounded-full text-xs">
												Pain relief
											</span>
											<span className="bg-blue-600 text-white px-2 py-1 rounded-full text-xs">
												Caffeine
											</span>
										</div>
									</div>
								</div>

								<div className="rounded-md overflow-hidden">
									<div className="bg-red-600 text-white px-3 py-2 font-semibold">
										When to seek care
									</div>
									<div className="px-3 py-3 bg-red-50 text-red-700">
										<ul className="list-disc pl-5 space-y-1 text-sm">
											<li>Severe or persistent pain</li>
											<li>Head injury, confusion</li>
											<li>Sudden worst headache</li>
										</ul>
									</div>
								</div>

								<div className="text-xs text-gray-500">
									This information is educational and not a substitute for professional medical
									advice.
								</div>
							</div>
						</div>
					</aside>
				</div>
				<div className="px-7 mb-4">
					<div className="mt-8 bg-white shadow p-4 rounded-sm">
						<h2 className="font-semibold mb-2">Offline Pack — Top 30 Topics</h2>
						<div className="space-y-2">
							{topics.map((topic, idx) => (
								<div key={idx} className="flex items-center justify-between border rounded px-3 py-2">
									<span>{topic.name}</span>
									<div className="flex items-center gap-2">
										<Button size="sm" variant="destructive">
											Remove
										</Button>
									</div>
								</div>
							))}
						</div>
						<div className="flex gap-2 mt-4">
							<Button className="text-white">Add Topic</Button>
							<Button className="text-white" variant="outline">
								Save Changes
							</Button>
						</div>
					</div>
				</div>
				<div className="px-7 mb-5">
					<div className="bg-amber-gold rounded-sm p-4 flex gap-2">
						<ShieldAlert />
						<p>Topics should be carefully edited to prevent wrong suggestions</p>
					</div>
				</div>
			</div>
		</div>
	);
}
