"use server";
import { addTopic } from "@/data-access/topics";
import { AddTopicType } from "@/lib/zod/topicsSchema";

export async function addNewTopic(topic: AddTopicType) {
	console.log("Attempting to add topic");
	const newTopic = {
		topic_key: topic.topic_key,
		name_en: topic.name_en,
		name_am: topic.name_am,
		description_en: topic.description_en,
		description_am: topic.description_am,
		translations: {
			en: {
				self_care: topic.translations.en.self_care.split(","),
				otc_categories: topic.translations.en.self_care.split(",").map((cat) => ({ category_name: cat })),
				seek_care_if: topic.translations.en.seek_care_if.split(","),
				disclaimer: topic.translations.en.disclaimer,
			},
			am: {
				self_care: topic.translations.am.self_care.split(","),
				otc_categories: topic.translations.am.self_care.split(",").map((cat) => ({ category_name: cat })),
				seek_care_if: topic.translations.am.seek_care_if.split(","),
				disclaimer: topic.translations.am.disclaimer,
			},
		},
	};

	return addTopic(newTopic);
}
