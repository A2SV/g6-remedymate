import * as z from "zod";

const ApprovedBlocks = z.object({
	self_care: z.string().min(1, "self care advice is required"),
	otc_categories: z.string().min(1, "OTC categories is required"),
	safety_note: z.string().min(1, "safety note is required"),
	seek_care_if: z.string().min(1, "seek care advice is required"),
	disclaimer: z.string().min(1, "disclaimer is required"),
});

const Translations = z.object({
	en: ApprovedBlocks,
	am: ApprovedBlocks,
});
export const AddTopicSchema = z.object({
	topic_key: z.string().min(1, "topic key is required"),
	name_en: z.string().min(1, "english name is required"),
	name_am: z.string().min(1, "amharic name is required"),
	description_en: z.string().min(1, "english description is required"),
	description_am: z.string().min(1, "amharic description is required"),
	translations: Translations,
});

export type AddTopicType = z.infer<typeof AddTopicSchema>;
