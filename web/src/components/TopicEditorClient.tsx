"use client";
import { Input } from "@/components/ui/input";
import { KeyboardEvent, useState } from "react";
import { Button } from "./ui/button";

type Topic = {
	id: string;
	name: string;
	languages: string[];
	status: string;
	selfCare: string[];
	otc: string[];
	seekCare: string[];
	disclaimer: string;
};

export default function TopicEditorClient({ initialTopic }: { initialTopic: Topic }) {
	const [otc, setOtc] = useState<string[]>(initialTopic.otc || []);
	const [otcInput, setOtcInput] = useState("");
	const [seek, setSeek] = useState<string[]>(initialTopic.seekCare || []);

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

	function updateSeekItem(i: number, value: string) {
		setSeek((s) => s.map((it, idx) => (idx === i ? value : it)));
	}

	function removeSeekItem(i: number) {
		setSeek((s) => s.filter((_, idx) => idx !== i));
	}

	function onSave() {
		// Replace with real API call
		console.log("Saving topic", { otc, seek });
		alert("Saved to console (mock)");
	}

	return (
		<div>
			<div className="mb-4">
				<label className="block font-semibold mb-2">Name</label>
				<Input
					placeholder="Topic name"
					value={otcInput}
					onChange={(e) => setOtcInput(e.target.value)}
					onKeyDown={onOtcKey}
				/>
			</div>
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
				<div className="rounded-lg border bg-gray-50 p-3 text-sm text-gray-700">{initialTopic.disclaimer}</div>
			</div>

			<div className="flex items-center gap-3">
				<Button variant={"destructive"} onClick={() => window.history.back()}>
					⟲ Cancel
				</Button>
				<Button onClick={onSave}>💾 Save Changes</Button>
			</div>
		</div>
	);
}
