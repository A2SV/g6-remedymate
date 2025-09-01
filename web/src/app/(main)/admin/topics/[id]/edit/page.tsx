import TopicEditorClient from "@/components/TopicEditorClient";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { notFound } from "next/navigation";

// Simple mock dataset — in real app replace with fetch by id
const MOCK_TOPICS = [
	{
		id: "headache",
		name: "Headache",
		languages: ["EN", "AM"],
		status: "Active",
		selfCare: ["Hydrate well", "Rest in a dark, quiet room", "Gentle neck stretches"],
		otc: ["Pain relief", "Caffeine"],
		seekCare: ["Severe or persistent pain", "Head injury, confusion, fainting", "Sudden worst headache"],
		disclaimer: "This information is educational and not a substitute for professional medical advice.",
	},
	{
		id: "diarrhea",
		name: "Diarrhea",
		languages: ["EN", "AM"],
		status: "Active",
		selfCare: ["Fluids", "BRAT diet"],
		otc: ["Oral rehydration"],
		seekCare: ["Severe dehydration"],
		disclaimer: "",
	},
];

export default function EditTopicPage({ params }: { params: { id: string } }) {
	const topic = MOCK_TOPICS.find((t) => t.id === params.id);
	if (!topic) return notFound();

	return (
		<div className="min-h-screen bg-gray-50">
			<div className="px-7 pb-5 pt-3 shadow-2xs bg-white flex items-center justify-between">
				<div className="">
					<h1>Edit Topic — {topic.name}</h1>
				</div>
				<div className="flex gap-4 items-center">
					<Avatar>
						<AvatarImage src="https://github.com/shadcn.png" />
						<AvatarFallback>CN</AvatarFallback>
					</Avatar>
					<p>username</p>
				</div>
			</div>

			<main className="p-7">
				<div className="bg-white rounded shadow p-6">
					<h2 className="sr-only">Edit topic form</h2>
					<div className="mb-4">
						<label className="block font-semibold mb-1">Topic Name</label>
						<div className="mb-2 text-sm text-gray-700">{topic.name}</div>
					</div>

					<div className="mb-4">
						<TopicEditorClient initialTopic={topic} />
					</div>
				</div>
			</main>
		</div>
	);
}
