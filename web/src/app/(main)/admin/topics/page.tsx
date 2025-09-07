import AdminHeader from "@/components/admin/AdminHeader";
import TopicsTable from "@/components/admin/TopicsTable";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { getTopics } from "@/data-access/topics";
import { ShieldAlert } from "lucide-react";

export default async function TopicsPage() {
	const topics = await getTopics();
	console.log(topics);
	return (
		<div className="min-h-screen">
			<AdminHeader>
				<div className="flex gap-2">
					<Input type="text" placeholder="Search topics" />
				</div>
			</AdminHeader>
			{/* Grid: main list + right-side mobile preview */}
			<div className="container mx-auto">
				<div className="grid grid-cols-1 lg:grid-cols-3 gap-6 px-7 mt-4">
					<div className="lg:col-span-2">
						<TopicsTable topics={topics} />
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
							{topics.topics.map((topic, idx) => (
								<div key={idx} className="flex items-center justify-between border rounded px-3 py-2">
									<span>{topic.topic_key}</span>
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
