"use client";
import { updateTopicAction } from "@/actions/updateTopic";
import { Input } from "@/components/ui/input";
import { deleteTopic } from "@/data-access/topics";
import { useRouter } from "next/navigation";
import { KeyboardEvent, useState, useTransition } from "react";
import { toast } from "sonner";
import { Button } from "../ui/button";

type Topic = {
	topic_key: string;
	name_en: string;
	name_am: string;
	description_en: string;
	description_am: string;
	translations: {
		en: {
			safety_note?: string;
			self_care?: string[] | string;
			otc_categories?: { category_name?: string }[] | string;
			seek_care_if?: string[] | string;
			disclaimer?: string;
		};
		am: {
			self_care?: string[] | string;
			otc_categories?: { category_name?: string }[] | string;
			seek_care_if?: string[] | string;
			disclaimer?: string;
			safety_note?: string;
		};
	};
};

export default function TopicEditorClient({ initialTopic, topicKey }: { initialTopic: Topic; topicKey: string }) {
	const [otc, setOtc] = useState<string[]>(
		// Normalize otc_categories: it may be an array of objects or a comma-separated string or undefined
		Array.isArray(initialTopic?.translations?.en?.otc_categories)
			? initialTopic.translations.en.otc_categories.map((c) =>
					typeof c === "string" ? c : (c as { category_name?: string }).category_name ?? ""
			  )
			: typeof initialTopic?.translations?.en?.otc_categories === "string"
			? initialTopic.translations.en.otc_categories
					.split(",")
					.map((s) => s.trim())
					.filter(Boolean)
			: []
	);
	const [otcInput, setOtcInput] = useState("");
	const [seek, setSeek] = useState<string[]>(
		// Normalize seek_care_if: may be an array of strings, a comma-separated string, or undefined
		Array.isArray(initialTopic?.translations?.en?.seek_care_if)
			? (initialTopic.translations.en.seek_care_if as string[])
			: typeof initialTopic?.translations?.en?.seek_care_if === "string"
			? initialTopic.translations.en.seek_care_if
					.split(",")
					.map((s) => s.trim())
					.filter(Boolean)
			: []
	);
	const [isPending, startTransition] = useTransition();
	const router = useRouter();
	// AMHARIC fields
	const [amOtc, setAmOtc] = useState<string[]>(
		Array.isArray(initialTopic?.translations?.am?.otc_categories)
			? initialTopic.translations.am.otc_categories.map((c) =>
					typeof c === "string" ? c : (c as { category_name?: string }).category_name ?? ""
			  )
			: typeof initialTopic?.translations?.am?.otc_categories === "string"
			? initialTopic.translations.am.otc_categories
					.split(",")
					.map((s) => s.trim())
					.filter(Boolean)
			: []
	);
	const [amOtcInput, setAmOtcInput] = useState("");
	const [amSeek, setAmSeek] = useState<string[]>(
		Array.isArray(initialTopic?.translations?.am?.seek_care_if)
			? (initialTopic.translations.am.seek_care_if as string[])
			: typeof initialTopic?.translations?.am?.seek_care_if === "string"
			? initialTopic.translations.am.seek_care_if
					.split(",")
					.map((s) => s.trim())
					.filter(Boolean)
			: []
	);
	const [amDisclaimer, setAmDisclaimer] = useState<string>(initialTopic.translations.am.disclaimer || "");

	// helper to normalize otc_categories (array of objects or CSV string) into string[]
	function normalizeOtc(raw: unknown): string[] {
		if (!raw) return [];
		if (Array.isArray(raw)) {
			return raw
				.map((c) => (typeof c === "string" ? c : (c as { category_name?: string }).category_name ?? ""))
				.filter(Boolean);
		}
		if (typeof raw === "string")
			return raw
				.split(",")
				.map((s) => s.trim())
				.filter(Boolean);
		return [];
	}

	function addOtcFromInput() {
		const value = otcInput.trim();
		if (!value) return;
		if (otc.includes(value)) {
			setOtcInput("");
			return;
		}
		setOtc((s) => [...s, value]);
		setOtcInput("");
	}

	function onOtcKey(e: KeyboardEvent<HTMLInputElement>) {
		if (e.key === "Enter") {
			e.preventDefault();
			addOtcFromInput();
		}
	}

	function removeOtc(i: number) {
		setOtc((s) => s.filter((_, idx) => idx !== i));
	}

	function addSeekItem() {
		setSeek((s) => [...s, ""]);
	}

	function addAmOtcFromInput() {
		const value = amOtcInput.trim();
		if (!value) return;
		if (amOtc.includes(value)) {
			setAmOtcInput("");
			return;
		}
		setAmOtc((s) => [...s, value]);
		setAmOtcInput("");
	}

	function removeAmOtc(i: number) {
		setAmOtc((s) => s.filter((_, idx) => idx !== i));
	}

	function addAmSeekItem() {
		setAmSeek((s) => [...s, ""]);
	}

	function updateAmSeekItem(i: number, value: string) {
		setAmSeek((s) => s.map((it, idx) => (idx === i ? value : it)));
	}

	function removeAmSeekItem(i: number) {
		setAmSeek((s) => s.filter((_, idx) => idx !== i));
	}

	function updateSeekItem(i: number, value: string) {
		setSeek((s) => s.map((it, idx) => (idx === i ? value : it)));
	}

	function removeSeekItem(i: number) {
		setSeek((s) => s.filter((_, idx) => idx !== i));
	}

	function onSave() {
		startTransition(async () => {
			try {
				const updatedTopic = {
					...initialTopic,
					translations: {
						...initialTopic.translations,
						en: {
							...initialTopic.translations.en,
							otc_categories: otc.join(","),
							seek_care_if: seek.join(","),
							self_care: initialTopic.translations.en.self_care
								? Array.isArray(initialTopic.translations.en.self_care)
									? initialTopic.translations.en.self_care.join(",")
									: initialTopic.translations.en.self_care
								: "",
						},
						am: {
							...initialTopic.translations.am,
							otc_categories: amOtc.join(","),
							seek_care_if: amSeek.join(","),
							self_care: initialTopic.translations.am.self_care
								? Array.isArray(initialTopic.translations.am.self_care)
									? initialTopic.translations.am.self_care.join(",")
									: initialTopic.translations.am.self_care
								: "",
							disclaimer: amDisclaimer,
						},
					},
				};
				// prefer the topic_key from the topic itself (fetched from API); fall back to the route param
				const keyToUse = updatedTopic.topic_key ?? topicKey;
				const saved = await updateTopicAction(keyToUse, {
					...updatedTopic,
					translations: {
						en: {
							...updatedTopic.translations.en,
							otc_categories: otc.join(","),
							seek_care_if: seek.join(","),
							self_care: Array.isArray(updatedTopic.translations.en.self_care)
								? updatedTopic.translations.en.self_care.join(",")
								: updatedTopic.translations.en.self_care
								? updatedTopic.translations.en.self_care
								: "",
							safety_note:
								(updatedTopic.translations.en as Topic["translations"]["en"]).safety_note ?? "",
							disclaimer: updatedTopic.translations.en.disclaimer ?? "",
						},
						am: {
							...updatedTopic.translations.am,
							otc_categories: amOtc.join(","),
							seek_care_if: amSeek.join(","),
							self_care: Array.isArray(updatedTopic.translations.am.self_care)
								? updatedTopic.translations.am.self_care.join(",")
								: typeof updatedTopic.translations.am.self_care === "string"
								? updatedTopic.translations.am.self_care
								: "",
							safety_note:
								(updatedTopic.translations.am as Topic["translations"]["am"]).safety_note ?? "",
							disclaimer: amDisclaimer,
						},
					},
				});
				// update local UI with saved values so OTC shows immediately
				try {
					const savedEn = saved?.translations?.en?.otc_categories;
					const savedAm = saved?.translations?.am?.otc_categories;
					const newOtc = normalizeOtc(savedEn);
					const newAmOtc = normalizeOtc(savedAm);
					if (newOtc.length) setOtc(newOtc);
					if (newAmOtc.length) setAmOtc(newAmOtc);
				} catch (e) {
					console.log(e);
				}

				toast.success("Topic updated successfully");
				// Refresh server-rendered data so the page shows the updated topic
				try {
					router.refresh();
				} catch (e) {
					console.log(e);
				}
			} catch (e) {
				console.log(e);
				toast.error("Failed to update topic");
			}
		});
	}

	function onDelete() {
		startTransition(async () => {
			try {
				await deleteTopic(topicKey);
				toast.success("Topic deleted successfully");
				window.history.back();
			} catch (e) {
				console.log(e);
				toast.error("Failed to delete topic");
			}
		});
	}

	return (
		<div>
			<div className="mb-4">
				<label className="block font-semibold mb-2">OTC Categories</label>
				<div className="rounded-lg border p-3 bg-white">
					<div className="flex flex-wrap gap-2 mb-3">
						{otc.map((t, i) => (
							<span
								key={i}
								className="inline-flex items-center gap-2 bg-blue-800 text-white px-3 py-1 rounded-full text-sm"
							>
								{t}
								<button
									aria-label={`remove ${t}`}
									onClick={() => removeOtc(i)}
									className="ml-1 inline-flex items-center justify-center w-5 h-5 rounded-full bg-blue-700/80 text-xs"
								>
									×
								</button>
							</span>
						))}
					</div>

					{/* Delete button moved to bottom with other actions */}
					<Input
						placeholder="Type and press Enter to add..."
						value={otcInput}
						onChange={(e) => setOtcInput(e.target.value)}
						onKeyDown={onOtcKey}
					/>
				</div>
			</div>

			<div className="mb-4">
				<label className="block font-semibold mb-2">When to Seek Care</label>
				<div className="rounded-lg border p-3 bg-white space-y-2">
					{seek.map((item, idx) => (
						<div key={idx} className="flex items-center gap-2">
							<Input
								value={item}
								onChange={(e) => updateSeekItem(idx, e.target.value)}
								className="flex-1"
							/>
							<button
								onClick={() => removeSeekItem(idx)}
								className="p-2 rounded bg-gray-100 text-gray-700"
								aria-label="remove-item"
							>
								🗑
							</button>
						</div>
					))}

					<div>
						<button
							onClick={addSeekItem}
							className="inline-flex items-center gap-2 px-3 py-1 rounded bg-blue-700 text-white text-sm"
						>
							+ Add Item
						</button>
					</div>
				</div>
			</div>

			<div className="mb-6">
				<label className="block font-semibold mb-2">Disclaimer</label>
				<div className="rounded-lg border bg-gray-50 p-3 text-sm text-gray-700">
					{initialTopic.translations.en.disclaimer}
				</div>
			</div>

			<hr className="my-6" />

			<div className="mb-4">
				<label className="block font-semibold mb-2">OTC Categories (AM)</label>
				<div className="rounded-lg border p-3 bg-white">
					<div className="flex flex-wrap gap-2 mb-3">
						{amOtc.map((t, i) => (
							<span
								key={i}
								className="inline-flex items-center gap-2 bg-blue-800 text-white px-3 py-1 rounded-full text-sm"
							>
								{t}
								<button
									aria-label={`remove ${t}`}
									onClick={() => removeAmOtc(i)}
									className="ml-1 inline-flex items-center justify-center w-5 h-5 rounded-full bg-blue-700/80 text-xs"
								>
									×
								</button>
							</span>
						))}
					</div>

					<Input
						placeholder="Type and press Enter to add..."
						value={amOtcInput}
						onChange={(e) => setAmOtcInput(e.target.value)}
						onKeyDown={(e) => {
							if (e.key === "Enter") {
								e.preventDefault();
								addAmOtcFromInput();
							}
						}}
					/>
				</div>
			</div>

			<div className="mb-4">
				<label className="block font-semibold mb-2">When to Seek Care (AM)</label>
				<div className="rounded-lg border p-3 bg-white space-y-2">
					{amSeek.map((item, idx) => (
						<div key={idx} className="flex items-center gap-2">
							<Input
								value={item}
								onChange={(e) => updateAmSeekItem(idx, e.target.value)}
								className="flex-1"
							/>
							<button
								onClick={() => removeAmSeekItem(idx)}
								className="p-2 rounded bg-gray-100 text-gray-700"
								aria-label="remove-item"
							>
								🗑
							</button>
						</div>
					))}

					<div>
						<button
							onClick={addAmSeekItem}
							className="inline-flex items-center gap-2 px-3 py-1 rounded bg-blue-700 text-white text-sm"
						>
							+ Add Item
						</button>
					</div>
				</div>
			</div>

			<div className="mb-6">
				<label className="block font-semibold mb-2">Disclaimer (AM)</label>
				<div className="rounded-lg border bg-gray-50 p-3 text-sm text-gray-700">
					<Input value={amDisclaimer} onChange={(e) => setAmDisclaimer(e.target.value)} />
				</div>
			</div>

			<div className="flex items-center gap-3">
				<Button variant={"destructive"} onClick={() => window.history.back()}>
					⟲ Cancel
				</Button>
				<Button onClick={onSave} disabled={isPending}>
					💾 Save Changes
				</Button>
				<Button variant={"destructive"} onClick={onDelete} disabled={isPending}>
					🗑 Delete Topic
				</Button>
			</div>
		</div>
	);
}
