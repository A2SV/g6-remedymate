"use client";
import { addNewTopic } from "@/actions/topic";
import { AddTopicSchema, AddTopicType } from "@/lib/zod/topicsSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Legend } from "recharts";
import { toast } from "sonner";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import LoadingSpinner from "../ui/LoadingSpinner";
import { Textarea } from "../ui/textarea";

function AddTopic() {
	const {
		handleSubmit,
		formState: { errors },
		reset,
		register,
	} = useForm({ resolver: zodResolver(AddTopicSchema) });
	const [isLoading, setIsLoading] = useState(false);
	async function onSubmit(data: AddTopicType) {
		console.log(data);
		setIsLoading(true);
		try {
			const response = await addNewTopic(data);
			console.log(response);
			if ("error" in response) {
				throw response.error;
			}
			toast.success("topic added successfuly");
		} catch (error) {
			console.log(error);
			toast.error("cant add topic");
		}
		setIsLoading(false);
	}
	return (
		<form onSubmit={handleSubmit(onSubmit)} className=" relative grid md:grid-cols-2 gap-4 bg-white p-4 rounded-md">
			<div className="flex flex-col gap-2">
				<div>
					<Label htmlFor="topic_key">Topic Key</Label>
					<Input {...register("topic_key")} type="text" name="topic_key" id="topic_key" />
					{errors.topic_key && <p className="text-red-600 text-sm">{errors.topic_key.message}</p>}
				</div>
				<div>
					<Label htmlFor="name_en">Name (EN)</Label>
					<Input {...register("name_en")} type="text" name="name_en" id="name_en" />
					{errors.name_en && <p className="text-red-600 text-sm">{errors.name_en.message}</p>}
				</div>
				<div>
					<Label htmlFor="name_am">Name (AM)</Label>
					<Input {...register("name_am")} type="text" name="name_am" id="name_am" />
					{errors.name_am && <p className="text-red-600 text-sm">{errors.name_am.message}</p>}
				</div>
				<div>
					<Label htmlFor="description_en">Description (EN)</Label>
					<Textarea {...register("description_en")} name="description_en" id="description_en" />
					{errors.description_en && <p className="text-red-600 text-sm">{errors.description_en.message}</p>}
				</div>
				<div>
					<Label htmlFor="description_am">Description (AM)</Label>
					<Textarea {...register("description_am")} name="description_am" id="description_am" />
				</div>
				<fieldset className="my-5">
					<Legend>Translations (EN)</Legend>
					<div className="mb-5">
						<Label htmlFor="translations.en.self_care">Self Care (EN)</Label>
						<Input
							type="text"
							id="translations.en.self_care"
							placeholder="Self care"
							{...register("translations.en.self_care")}
						/>
						{errors.translations?.en?.self_care && (
							<p className="text-red-600 text-sm">{errors.translations.en?.self_care.message}</p>
						)}
					</div>
					<div className="mb-5">
						<Label htmlFor="translations.en.otc_categories[0].category_name">OTC Category Name (EN)</Label>
						<Input
							type="text"
							id="translations.en.otc_categories[0].category_name"
							placeholder="Category Name"
							{...register("translations.en.otc_categories")}
						/>
						{errors.translations?.en?.otc_categories && (
							<p className="text-red-600 text-sm">{errors.translations.en?.otc_categories.message}</p>
						)}
					</div>
					<div className="mb-5">
						<Label htmlFor="translations.en.safety_note">Safety Note (EN)</Label>
						<Input
							type="text"
							id="translations.en.safety_note"
							placeholder="Safety Note"
							{...register("translations.en.safety_note")}
						/>
						{errors.translations?.en?.safety_note && (
							<p className="text-red-600 text-sm">{errors.translations.en?.safety_note.message}</p>
						)}
					</div>
					<div className="mb-5">
						<Label htmlFor="translations.en.seek_care_if">Seek Care If (EN)</Label>
						<Input
							type="text"
							id="translations.en.seek_care_if"
							placeholder="Comma separated"
							{...register("translations.en.seek_care_if")}
						/>
						{errors.translations?.en?.seek_care_if && (
							<p className="text-red-600 text-sm">{errors.translations.en?.seek_care_if.message}</p>
						)}
					</div>
					<div className="mb-5">
						<Label htmlFor="translations.en.disclaimer">Disclaimer (EN)</Label>
						<Textarea
							{...register("translations.en.disclaimer")}
							name="translations.en.disclaimer"
							id="translations.en.disclaimer"
						/>
						{errors.translations?.en?.disclaimer && (
							<p className="text-red-600 text-sm">{errors.translations.en?.disclaimer.message}</p>
						)}
					</div>
				</fieldset>
			</div>
			<fieldset className="">
				<Legend>Translations (AM)</Legend>
				<div className="mb-5">
					<Label htmlFor="translations.am.self_care">Self Care (AM)</Label>
					<Input
						type="text"
						lang="am"
						id="translations.am.self_care"
						placeholder="Self care"
						{...register("translations.am.self_care")}
					/>
					{errors.translations?.am?.self_care && (
						<p className="text-red-600 text-sm">{errors.translations.am?.self_care.message}</p>
					)}
				</div>
				<div className="mb-5">
					<Label htmlFor="translations.am.otc_categories[0].category_name">OTC Category Name (AM)</Label>
					<Input
						lang="am"
						type="text"
						id="translations.am.otc_categories[0].category_name"
						placeholder="Category Name"
						{...register("translations.am.otc_categories")}
					/>
					{errors.translations?.am?.otc_categories && (
						<p className="text-red-600 text-sm">{errors.translations.am?.otc_categories.message}</p>
					)}
				</div>
				<div className="mb-5">
					<Label htmlFor="translations.am.otc_categories[0].safety_note">Safety Note (AM)</Label>
					<Input
						lang="am"
						type="text"
						id="translations.am.otc_categories[0].safety_note"
						placeholder="Safety Note"
						{...register("translations.am.safety_note")}
					/>
					{errors.translations?.am?.safety_note && (
						<p className="text-red-600 text-sm">{errors.translations.am?.safety_note.message}</p>
					)}
				</div>
				<div className="mb-5">
					<Label htmlFor="translations.am.seek_care_if">Seek Care If (AM)</Label>
					<Input
						lang="am"
						type="text"
						id="translations.am.seek_care_if"
						placeholder="Comma separated"
						{...register("translations.am.seek_care_if")}
					/>
					{errors.translations?.am?.seek_care_if && (
						<p className="text-red-600 text-sm">{errors.translations.am?.seek_care_if.message}</p>
					)}
				</div>
				<div className="mb-5">
					<Label htmlFor="translations.am.disclaimer">Disclaimer (AM)</Label>
					<Textarea lang="am" {...register("translations.am.disclaimer")} id="translations.am.disclaimer" />
					{errors.translations?.am?.disclaimer && (
						<p className="text-red-600 text-sm">{errors.translations.am?.disclaimer.message}</p>
					)}
				</div>
				<div className="flex gap-2">
					<Button type="button" onClick={() => reset()} className="text-white">
						Clear
					</Button>
					<Button type="submit" className="text-white">
						Submit
					</Button>
				</div>
			</fieldset>
			{isLoading && <LoadingSpinner />}
		</form>
	);
}
export default AddTopic;
