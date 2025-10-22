'use client';

import { MedicalHistoryFormData } from '@/lib/zod/medicalHistorySchema';
import { Dispatch, SetStateAction, useState } from 'react';
import { Button } from '../ui/button';
import {
	Dialog,
	DialogClose,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
} from '../ui/dialog';
import { Input } from '../ui/input';
import { Label } from '../ui/label';

type ExistingCondition = { condition: string; diagnosed_date: string };
type PastSurgery = { surgery: string; date: string };
type CurrentMedication = { name: string; dosage: string; frequency: string };
type Allergy = {
	allergen: string;
	reaction: string;
	severity: 'Mild' | 'Moderate' | 'Severe';
};
type FamilyHistory = { relation: string; condition: string };
type ModalData = Partial<
	ExistingCondition &
		PastSurgery &
		CurrentMedication &
		Allergy &
		FamilyHistory
>;

type Props = {
	onNext: () => void;
	onBack: () => void;
	data: MedicalHistoryFormData | undefined;
	updateData: Dispatch<SetStateAction<MedicalHistoryFormData | undefined>>;
};

export default function MedicalHistory({
	onNext,
	onBack,
	data,
	updateData,
}: Props) {
	// initialize with example data requested
	const [existingConditions, setExistingConditions] = useState<
		ExistingCondition[]
	>(
		data?.existing_conditions || [
			{ condition: 'Hypertension', diagnosed_date: '' },
		]
	);
	const [pastSurgeries, setPastSurgeries] = useState<PastSurgery[]>(
		data?.past_surgeries || [{ surgery: 'Appendectomy', date: '' }]
	);
	const [currentMedications, setCurrentMedications] = useState<
		CurrentMedication[]
	>(
		data?.current_medications || [
			{ name: 'Lisinopril', dosage: '10mg', frequency: 'Once daily' },
		]
	);
	const [allergies, setAllergies] = useState<Allergy[]>(
		data?.allergies || [
			{ allergen: 'Penicillin', reaction: 'Hives', severity: 'Moderate' },
		]
	);
	const [familyHistory, setFamilyHistory] = useState<FamilyHistory[]>(
		data?.family_history || [
			{ relation: 'Mother', condition: 'Diabetes Type 2' },
		]
	);

	// modal state
	const [dialogOpen, setDialogOpen] = useState(false);
	const [section, setSection] = useState<
		'existing' | 'surgery' | 'medication' | 'allergy' | 'family'
	>('existing');
	const [modalData, setModalData] = useState<ModalData>({
		condition: '',
		diagnosed_date: '',
	});

	// open modal for add (no editing required per prompt)
	const openAddModal = (
		sectionName:
			| 'existing'
			| 'surgery'
			| 'medication'
			| 'allergy'
			| 'family'
	) => {
		setSection(sectionName);
		// reset modal data by section
		switch (sectionName) {
			case 'existing':
				setModalData({ condition: '', diagnosed_date: '' });
				break;
			case 'surgery':
				setModalData({ surgery: '', date: '' });
				break;
			case 'medication':
				setModalData({ name: '', dosage: '', frequency: '' });
				break;
			case 'allergy':
				setModalData({ allergen: '', reaction: '', severity: 'Mild' });
				break;
			case 'family':
				setModalData({ relation: '', condition: '' });
				break;
		}
		setDialogOpen(true);
	};

	const saveModal = () => {
		if (section === 'existing') {
			setExistingConditions((s) => [
				...s,
				{
					condition: modalData.condition ?? '',
					diagnosed_date: modalData.diagnosed_date ?? '',
				},
			]);
		} else if (section === 'surgery') {
			setPastSurgeries((s) => [
				...s,
				{
					surgery: modalData.surgery ?? '',
					date: modalData.date ?? '',
				},
			]);
		} else if (section === 'medication') {
			setCurrentMedications((s) => [
				...s,
				{
					name: modalData.name ?? '',
					dosage: modalData.dosage ?? '',
					frequency: modalData.frequency ?? '',
				},
			]);
		} else if (section === 'allergy') {
			setAllergies((s) => [
				...s,
				{
					allergen: modalData.allergen ?? '',
					reaction: modalData.reaction ?? '',
					severity: modalData.severity ?? 'Mild',
				},
			]);
		} else if (section === 'family') {
			setFamilyHistory((s) => [
				...s,
				{
					relation: modalData.relation ?? '',
					condition: modalData.condition ?? '',
				},
			]);
		}
		setDialogOpen(false);
		setSection('existing');
		setModalData({});
	};

	const removeAt = <T,>(arr: T[], set: (v: T[]) => void, idx: number) => {
		set(arr.filter((_, i) => i !== idx));
	};

	const handleNext = () => {
		updateData((prev) => ({
			...(prev ?? {}),
			existing_conditions: existingConditions,
			past_surgeries: pastSurgeries,
			current_medications: currentMedications,
			allergies: allergies,
			family_history: familyHistory,
		}));
		onNext();
	};

	return (
		<div className="relative w-full h-full flex flex-col items-center justify-center text-center space-y-6">
			<div className="self-start flex items-center w-full">
				<Button
					onClick={onBack}
					className="rounded-full cursor-pointer w-10 h-10 font-bold shadow absolute left-0 top-0"
				>
					{'<'}
				</Button>
				<h1 className="text-2xl md:text-3xl w-full font-semibold text-center">
					Medical History
				</h1>
			</div>

			<p className="text-lg text-muted-foreground text-center">
				This information is vital for accurate AI-powered suggestions.
			</p>

			<div className="w-full flex flex-col gap-10 text-left items-center">
				{/* Existing conditions */}
				<div>
					<Label className=" font-bold block mb-2 text-center">
						Chronic Conditions
					</Label>
					<div className="flex flex-wrap gap-2 items-center">
						{existingConditions.map((c, i) => (
							<div key={i} className="relative">
								<Button
									type="button"
									className="px-8 py-2 w-full border rounded-full transition hover:text-primary-foreground bg-secondary text-secondary-foreground cursor-pointer"
								>
									{c.condition}
								</Button>
								<Button
									variant="ghost"
									onClick={() =>
										removeAt(
											existingConditions,
											setExistingConditions,
											i
										)
									}
									className="rounded-full hover:bg-destructive hover:text-white absolute top-0 right-0"
								>
									×
								</Button>
							</div>
						))}
						<Button
							className="px-4 py-2 border border-dashed rounded-full hover:text-primary-foreground bg-secondary text-secondary-foreground cursor-pointer"
							onClick={() => openAddModal('existing')}
						>
							Add +
						</Button>
					</div>
				</div>

				{/* Past surgeries */}
				<div>
					<Label className=" font-bold block mb-2 text-center">
						Past Surgeries
					</Label>
					<div className="flex flex-wrap gap-2 items-center">
						{pastSurgeries.map((s, i) => (
							<div key={i} className="relative">
								<Button
									type="button"
									className="px-8 py-2 border rounded-full transition hover:text-primary-foreground bg-secondary text-secondary-foreground cursor-pointer"
								>
									{s.surgery}
								</Button>
								<Button
									variant="ghost"
									onClick={() =>
										removeAt(
											pastSurgeries,
											setPastSurgeries,
											i
										)
									}
									className="rounded-full hover:bg-destructive hover:text-white absolute top-0 right-0"
								>
									×
								</Button>
							</div>
						))}
						<Button
							className="px-4 py-2 border border-dashed rounded-full hover:text-primary-foreground bg-secondary text-secondary-foreground cursor-pointer"
							onClick={() => openAddModal('surgery')}
						>
							Add +
						</Button>
					</div>
				</div>

				{/* Current medications */}
				<div>
					<Label className=" font-bold block mb-2 text-center">
						Current Medications
					</Label>
					<div className="flex flex-wrap gap-2 items-center">
						{currentMedications.map((m, i) => (
							<div key={i} className="relative">
								<Button
									type="button"
									className="px-8 py-2 border rounded-full transition hover:text-primary-foreground bg-secondary text-secondary-foreground cursor-pointer"
								>
									{m.name}
								</Button>
								<Button
									variant="ghost"
									onClick={() =>
										removeAt(
											currentMedications,
											setCurrentMedications,
											i
										)
									}
									className="rounded-full hover:bg-destructive hover:text-white absolute top-0 right-0"
								>
									×
								</Button>
							</div>
						))}
						<Button
							className="px-4 py-2 border border-dashed rounded-full hover:text-primary-foreground bg-secondary text-secondary-foreground cursor-pointer"
							onClick={() => openAddModal('medication')}
						>
							Add +
						</Button>
					</div>
				</div>

				{/* Allergies */}
				<div>
					<Label className=" font-bold block mb-2 text-center">
						Allergies
					</Label>
					<div className="flex flex-wrap gap-2 items-center">
						{allergies.map((a, i) => (
							<div key={i} className="relative">
								<Button
									type="button"
									className="px-8 py-2 border rounded-full transition hover:text-primary-foreground bg-secondary text-secondary-foreground cursor-pointer"
								>
									{a.allergen}
								</Button>
								<Button
									variant="ghost"
									onClick={() =>
										removeAt(allergies, setAllergies, i)
									}
									className="rounded-full hover:bg-destructive hover:text-white absolute top-0 right-0"
								>
									×
								</Button>
							</div>
						))}
						<Button
							className="px-4 py-2 border border-dashed rounded-full hover:text-primary-foreground bg-secondary text-secondary-foreground cursor-pointer"
							onClick={() => openAddModal('allergy')}
						>
							Add +
						</Button>
					</div>
				</div>

				{/* Family history */}
				<div>
					<Label className=" font-bold block mb-2 text-center">
						Family History
					</Label>
					<div className="flex flex-wrap gap-2 items-center">
						{familyHistory.map((f, i) => (
							<div key={i} className="relative">
								<Button
									type="button"
									className="px-8 py-2 border rounded-full transition hover:text-primary-foreground bg-secondary text-secondary-foreground cursor-pointer"
								>
									{f.relation}
								</Button>
								<Button
									variant="ghost"
									onClick={() =>
										removeAt(
											familyHistory,
											setFamilyHistory,
											i
										)
									}
									className="rounded-full hover:bg-destructive hover:text-white absolute top-0 right-0"
								>
									×
								</Button>
							</div>
						))}
						<Button
							className="px-4 py-2 border border-dashed rounded-full hover:text-primary-foreground bg-secondary text-secondary-foreground cursor-pointer"
							onClick={() => openAddModal('family')}
						>
							Add +
						</Button>
					</div>
				</div>

				{/* Buttons */}
				<div className="flex flex-col gap-3 w-full mt-4">
					<Button
						type="button"
						onClick={handleNext}
						className="w-full py-3 shadow-md cursor-pointer"
					>
						Next
					</Button>
					<Button
						type="button"
						onClick={() => onNext()}
						className="w-full hover:text-primary-foreground bg-secondary text-secondary-foreground cursor-pointer"
					>
						Skip for now
					</Button>
				</div>
			</div>

			{/* Dialog for adding new items */}
			<Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
				<DialogContent>
					<DialogHeader>
						<DialogTitle>
							{section === 'existing' && 'Add condition'}
							{section === 'surgery' && 'Add surgery'}
							{section === 'medication' && 'Add medication'}
							{section === 'allergy' && 'Add allergy'}
							{section === 'family' && 'Add family history'}
						</DialogTitle>
						<DialogDescription>
							Fill the fields to add a new entry.
						</DialogDescription>
					</DialogHeader>

					<div className="grid gap-3 py-4">
						{section === 'existing' && (
							<>
								<Label>Condition</Label>
								<Input
									value={modalData.condition ?? ''}
									onChange={(e) =>
										setModalData({
											...modalData,
											condition: e.target.value,
										})
									}
								/>
								{/* date optional */}
								<Label className="mt-2">
									Diagnosed date (optional)
								</Label>
								<Input
									type="date"
									value={modalData.diagnosed_date ?? ''}
									onChange={(e) =>
										setModalData({
											...modalData,
											diagnosed_date: e.target.value,
										})
									}
								/>
							</>
						)}

						{section === 'surgery' && (
							<>
								<Label>Surgery</Label>
								<Input
									value={modalData.surgery ?? ''}
									onChange={(e) =>
										setModalData({
											...modalData,
											surgery: e.target.value,
										})
									}
								/>
								<Label className="mt-2">Date (optional)</Label>
								<Input
									type="date"
									value={modalData.date ?? ''}
									onChange={(e) =>
										setModalData({
											...modalData,
											date: e.target.value,
										})
									}
								/>
							</>
						)}

						{section === 'medication' && (
							<>
								<Label>Name</Label>
								<Input
									value={modalData.name ?? ''}
									onChange={(e) =>
										setModalData({
											...modalData,
											name: e.target.value,
										})
									}
								/>
								<Label className="mt-2">Dosage</Label>
								<Input
									value={modalData.dosage ?? ''}
									onChange={(e) =>
										setModalData({
											...modalData,
											dosage: e.target.value,
										})
									}
								/>
								<Label className="mt-2">Frequency</Label>
								<Input
									value={modalData.frequency ?? ''}
									onChange={(e) =>
										setModalData({
											...modalData,
											frequency: e.target.value,
										})
									}
								/>
							</>
						)}

						{section === 'allergy' && (
							<>
								<Label>Allergen</Label>
								<Input
									value={modalData.allergen ?? ''}
									onChange={(e) =>
										setModalData({
											...modalData,
											allergen: e.target.value,
										})
									}
								/>
								<Label className="mt-2">Reaction</Label>
								<Input
									value={modalData.reaction ?? ''}
									onChange={(e) =>
										setModalData({
											...modalData,
											reaction: e.target.value,
										})
									}
								/>
								<Label className="mt-2">Severity</Label>
								<select
									className="border border-border rounded-md px-2 py-2"
									value={modalData.severity ?? 'Mild'}
									onChange={(e) =>
										setModalData({
											...modalData,
											severity: e.target
												.value as Allergy['severity'],
										})
									}
								>
									<option value="Mild">Mild</option>
									<option value="Moderate">Moderate</option>
									<option value="Severe">Severe</option>
								</select>
							</>
						)}

						{section === 'family' && (
							<>
								<Label>Relation</Label>
								<Input
									value={modalData.relation ?? ''}
									onChange={(e) =>
										setModalData({
											...modalData,
											relation: e.target.value,
										})
									}
								/>
								<Label className="mt-2">Condition</Label>
								<Input
									value={modalData.condition ?? ''}
									onChange={(e) =>
										setModalData({
											...modalData,
											condition: e.target.value,
										})
									}
								/>
							</>
						)}
					</div>

					<DialogFooter>
						<DialogClose asChild>
							<Button
								variant="ghost"
								onClick={() => setDialogOpen(false)}
							>
								Cancel
							</Button>
						</DialogClose>
						<Button onClick={saveModal}>Add</Button>
					</DialogFooter>
				</DialogContent>
			</Dialog>
		</div>
	);
}
