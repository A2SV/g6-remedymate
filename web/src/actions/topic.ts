"use server";
import { addTopic } from "@/data-access/topics";
import { AddTopicType } from "@/lib/zod/topicsSchema";

export async function addNewTopic(topic: AddTopicType) {
	console.log("Attempting to add topic");

	// helper: accept string (comma-separated) or array and return string[]
	const normalizeList = (val: unknown): string[] => {
		if (typeof val === "string")
			return val
				.split(",")
				.map((s) => s.trim())
				.filter(Boolean);
		if (Array.isArray(val))
			return val
				.map(String)
				.map((s) => s.trim())
				.filter(Boolean);
		return [];
	};

	const enSelfCare = normalizeList(topic.translations?.en?.self_care);
	const amSelfCare = normalizeList(topic.translations?.am?.self_care);
	const enOtc = normalizeList(topic.translations?.en?.otc_categories);
	const amOtc = normalizeList(topic.translations?.am?.otc_categories);
	const enSeek = normalizeList(topic.translations?.en?.seek_care_if);
	const amSeek = normalizeList(topic.translations?.am?.seek_care_if);

	const newTopic = {
		topic_key: topic.topic_key,
		name_en: topic.name_en,
		name_am: topic.name_am,
		description_en: topic.description_en,
		description_am: topic.description_am,
		status: "draft",
		is_offline_cachable: false,
		translations: {
			en: {
				self_care: enSelfCare,
				otc_categories: enOtc.map((cat) => ({ category_name: cat, safety_note: "" })),
				seek_care_if: enSeek,
				disclaimer: topic.translations?.en?.disclaimer ?? "",
			},
			am: {
				self_care: amSelfCare,
				otc_categories: amOtc.map((cat) => ({ category_name: cat, safety_note: "" })),
				seek_care_if: amSeek,
				disclaimer: topic.translations?.am?.disclaimer ?? "",
			},
		},
	};

	return addTopic(newTopic);
}
