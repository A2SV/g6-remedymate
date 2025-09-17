"use server";
import { updateTopic } from "@/data-access/topics";
import { AddTopicType } from "@/lib/zod/topicsSchema";

// Accept topic and topic_key as parameters
export async function updateTopicAction(topic_key: string, topic: AddTopicType) {
	// Transform AddTopicType to the Topic type expected by updateTopic
	const updatedTopic = {
		topic_key: topic.topic_key,
		name_en: topic.name_en,
		name_am: topic.name_am,
		description_en: topic.description_en,
		description_am: topic.description_am,
		// `AddTopicType` doesn't include these fields; guard and coerce if present
		status: (topic as unknown as { status?: string })?.status ?? "active",
		is_offline_cachable: (topic as unknown as { is_offline_cachable?: boolean })?.is_offline_cachable ?? false,
		translations: {
			en: {
				self_care: Array.isArray(topic.translations.en.self_care)
					? topic.translations.en.self_care
					: typeof topic.translations.en.self_care === "string"
						? topic.translations.en.self_care.split(",").map((s) => s.trim())
						: [],
				otc_categories: Array.isArray(topic.translations.en.otc_categories)
					? topic.translations.en.otc_categories.map((cat: unknown) => {
						const c = cat as { category_name?: string; safety_note?: string } | string;
						if (typeof c === "string") return { category_name: c, safety_note: "" };
						return { category_name: c.category_name ?? "", safety_note: c.safety_note ?? "" };
					  })
					: typeof topic.translations.en.otc_categories === "string"
					? topic.translations.en.otc_categories
						.split(",")
						.map((s) => ({ category_name: s.trim(), safety_note: "" }))
					: [],
				seek_care_if: Array.isArray(topic.translations.en.seek_care_if)
					? topic.translations.en.seek_care_if
					: typeof topic.translations.en.seek_care_if === "string"
						? topic.translations.en.seek_care_if.split(",").map((s) => s.trim())
						: [],
				disclaimer: topic.translations.en.disclaimer,
			},
			am: {
				self_care: Array.isArray(topic.translations.am.self_care)
					? topic.translations.am.self_care
					: typeof topic.translations.am.self_care === "string"
						? topic.translations.am.self_care.split(",").map((s) => s.trim())
						: [],
				otc_categories: Array.isArray(topic.translations.am.otc_categories)
					? topic.translations.am.otc_categories.map((cat: unknown) => {
						const c = cat as { category_name?: string; safety_note?: string } | string;
						if (typeof c === "string") return { category_name: c, safety_note: "" };
						return { category_name: c.category_name ?? "", safety_note: c.safety_note ?? "" };
					  })
					: typeof topic.translations.am.otc_categories === "string"
					? topic.translations.am.otc_categories
						.split(",")
						.map((s) => ({ category_name: s.trim(), safety_note: "" }))
					: [],
				seek_care_if: Array.isArray(topic.translations.am.seek_care_if)
					? topic.translations.am.seek_care_if
					: typeof topic.translations.am.seek_care_if === "string"
						? topic.translations.am.seek_care_if.split(",").map((s) => s.trim())
						: [],
				disclaimer: topic.translations.am.disclaimer,
			},
		},
	};

	return updateTopic(topic_key, updatedTopic);
}
