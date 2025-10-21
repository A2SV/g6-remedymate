'use client';

import { useState } from 'react';
import { Button } from '../ui/button';
import { Label } from '../ui/label';

type Props = {
	onNext: (data: {
		conditions: string[];
		allergies: string[];
		medications: string[];
		none: boolean;
	}) => void;
	onBack: () => void;
};

export default function MedicalHistory({ onNext, onBack }: Props) {
	const [conditions, setConditions] = useState<string[]>([]);
	const [allergies, setAllergies] = useState<string[]>([]);
	const [medications, setMedications] = useState<string[]>([]);
	const [none, setNone] = useState(false);

	const handleToggle = (
		item: string,
		list: string[],
		setList: (arr: string[]) => void
	) => {
		if (list.includes(item)) {
			setList(list.filter((i) => i !== item));
		} else {
			setList([...list, item]);
		}
	};

	const handleNext = () => {
		if (
			none ||
			conditions.length > 0 ||
			allergies.length > 0 ||
			medications.length > 0
		) {
			onNext({ conditions, allergies, medications, none });
		}
	};

	return (
		<div className="relative w-full h-full flex flex-col items-center justify-center text-center space-y-6 px-8 py-12">
			<div className="self-start flex items-center w-full">
				<Button
					onClick={onBack}
					className="rounded-full cursor-pointer w-10 h-10 font-bold shadow absolute left-0 top-0"
				>
					{'<'}
				</Button>
				<h1 className="text-3xl w-full font-semibold text-center">
					Medical History
				</h1>
			</div>

			<p className="text-lg text-muted-foreground text-center">
				This information is vital for accurate AI-powered suggestions.
			</p>

			<div className="w-full max-w-[500px] flex flex-col gap-5 text-left">
				<div>
					<Label className="block mb-2 font-medium">
						Chronic Conditions
					</Label>
					<div className="flex flex-wrap gap-2">
						{['Hypertension', 'Diabetes', 'Asthma'].map((cond) => (
							<Button
								key={cond}
								type="button"
								onClick={() =>
									handleToggle(
										cond,
										conditions,
										setConditions
									)
								}
								className={`px-4 py-2 border rounded-full transition hover:text-primary-foreground bg-secondary text-secondary-foreground cursor-pointer ${
									conditions.includes(cond)
										? 'border-primary'
										: ''
								}`}
								disabled={none}
							>
								{cond}
							</Button>
						))}
						<Button
							className="px-4 py-2 border border-dashed rounded-full hover:text-primary-foreground bg-secondary text-secondary-foreground cursor-pointer"
							disabled={none}
						>
							Add +
						</Button>
					</div>
				</div>

				<div>
					<Label className="block mb-2 font-medium">Allergies</Label>
					<div className="flex flex-wrap gap-2">
						{['Penicillin', 'Pollen'].map((allergy) => (
							<Button
								key={allergy}
								type="button"
								onClick={() =>
									handleToggle(
										allergy,
										allergies,
										setAllergies
									)
								}
								className={`px-4 py-2 border rounded-full transition hover:text-primary-foreground bg-secondary text-secondary-foreground cursor-pointer ${
									allergies.includes(allergy)
										? 'border-primary'
										: ''
								}`}
								disabled={none}
							>
								{allergy}
							</Button>
						))}
						<Button
							className="px-4 py-2 border border-dashed rounded-full hover:text-primary-foreground bg-secondary text-secondary-foreground cursor-pointer"
							disabled={none}
						>
							Add +
						</Button>
					</div>
				</div>

				<div>
					<Label className="block mb-2 font-medium">
						Current Medications
					</Label>
					<div className="flex flex-wrap gap-2">
						{['Metformin'].map((med) => (
							<Button
								key={med}
								type="button"
								onClick={() =>
									handleToggle(
										med,
										medications,
										setMedications
									)
								}
								className={`px-4 py-2 border rounded-full transition hover:text-primary-foreground bg-secondary text-secondary-foreground cursor-pointer${
									medications.includes(med)
										? 'border-primary'
										: ''
								}`}
								disabled={none}
							>
								{med}
							</Button>
						))}
						<Button
							className="px-4 py-2 border border-dashed rounded-full hover:text-primary-foreground bg-secondary text-secondary-foreground cursor-pointer"
							disabled={none}
						>
							Add +
						</Button>
					</div>
				</div>
				{/* Buttons */}
				<div className="flex flex-col gap-3 w-full mt-4">
					<Button
						type="submit"
						onClick={handleNext}
						className="w-full py-3 shadow-md cursor-pointer"
					>
						Next
					</Button>
					<Button
						type="button"
						onClick={() =>
							onNext({ conditions, allergies, medications, none })
						}
						className="w-full hover:text-primary-foreground bg-secondary text-secondary-foreground cursor-pointer"
					>
						Skip for now
					</Button>
				</div>
			</div>
		</div>
	);
}
