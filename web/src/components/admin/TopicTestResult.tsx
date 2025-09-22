"use client";
import { Topic } from "@/data-access/topics";

export default function TopicTestResult({ topic }: { topic: Topic | null }) {
	if (!topic) {
		return (
			<div className="w-full max-w-xs mx-auto bg-white rounded-lg shadow overflow-hidden">
				<div className="p-6 text-center">
					<h3 className="text-lg font-semibold mb-2">Topic test result</h3>
					<p className="text-sm text-gray-600">
						Select a topic from the list to view a test result preview here.
					</p>
				</div>
			</div>
		);
	}

	const otc = Array.isArray(topic.translations?.en?.otc_categories)
		? topic.translations.en.otc_categories
				.map((c: string | { category_name: string }) => (typeof c === "string" ? c : c.category_name))
				.join(", ")
		: typeof topic.translations?.en?.otc_categories === "string"
		? topic.translations.en.otc_categories
		: "";

	const seek = Array.isArray(topic.translations?.en?.seek_care_if)
		? topic.translations.en.seek_care_if.join(", ")
		: typeof topic.translations?.en?.seek_care_if === "string"
		? topic.translations.en.seek_care_if
		: "";

	return (
		<div className="w-full max-w-xs mx-auto bg-white rounded-lg shadow overflow-hidden">
			<div className="p-4 space-y-3">
				<h3 className="text-lg font-semibold">Topic test result — {topic.topic_key}</h3>

				<div className="rounded-md overflow-hidden">
					<div className="bg-green-700 text-white px-3 py-2 font-semibold">Self-care</div>
					<div className="px-3 py-2 bg-green-50 text-sm text-gray-800">
						{(Array.isArray(topic.translations?.en?.self_care)
							? topic.translations.en.self_care.join(", ")
							: topic.translations?.en?.self_care) || ""}
					</div>
				</div>

				<div className="rounded-md overflow-hidden">
					<div className="bg-orange-500 text-white px-3 py-2 font-semibold">OTC</div>
					<div className="px-3 py-3 bg-orange-50">
						<div className="flex gap-2 flex-wrap">
							{otc
								.split(",")
								.filter(Boolean)
								.map((t, i) => (
									<span key={i} className="bg-blue-600 text-white px-2 py-1 rounded-full text-xs">
										{t.trim()}
									</span>
								))}
						</div>
					</div>
				</div>

				<div className="rounded-md overflow-hidden">
					<div className="bg-red-600 text-white px-3 py-2 font-semibold">When to seek care</div>
					<div className="px-3 py-3 bg-red-50 text-red-700">
						<ul className="list-disc pl-5 space-y-1 text-sm">
							{seek
								.split(",")
								.filter(Boolean)
								.map((s, i) => (
									<li key={i}>{s.trim()}</li>
								))}
						</ul>
					</div>
				</div>

				<div className="text-xs text-gray-500">
					This information is educational and not a substitute for professional medical advice.
				</div>
			</div>
		</div>
	);
}
