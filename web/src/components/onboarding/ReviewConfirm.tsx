'use client';

import { Button } from '../ui/button';

type Props = {
	onBack: () => void;
};

export default function Review({ onBack }: Props) {
	return (
		<div className="w-full relative flex flex-col text-foreground items-center justify-center px-8 py-12 gap-4">
			<div className="self-start flex items-center w-full">
				<Button
					onClick={onBack}
					className="cursor-pointer rounded-full w-10 h-10 font-bold shadow absolute left-0 top-0"
				>
					{'<'}
				</Button>
				<h1 className="text-3xl w-full font-semibold text-center">
					Review & Confirm
				</h1>
			</div>

			<div className="bg-card rounded-xl border border-border shadow-sm p-5 w-full">
				<div className="flex justify-between items-center mb-2">
					<h2 className="text-lg font-medium text-card-foreground">
						Personal Info
					</h2>
				</div>
				<div className="text-sm text-muted-foreground space-y-1">
					<p>Name: Jane Doe</p>
					<p>Age: 30</p>
					<p>Sex: Female</p>
					<p>Weight: 70 kg</p>
					<p>Height: 175 cm</p>
				</div>
			</div>

			<div className="bg-card rounded-xl border border-border shadow-sm p-5 w-full">
				<div className="flex justify-between items-center mb-2">
					<h2 className="text-lg font-medium text-card-foreground">
						Medical History
					</h2>
				</div>
				<div className="text-sm text-muted-foreground space-y-1">
					<p>Conditions: Diabetes</p>
					<p>Allergies: Penicillin</p>
					<p>Medications: None</p>
				</div>
			</div>

			<div className="bg-card rounded-xl border border-border shadow-sm p-5 w-full">
				<div className="flex justify-between items-center mb-2">
					<h2 className="text-lg font-medium text-card-foreground">
						Lifestyle & Habits
					</h2>
				</div>
				<div className="text-sm text-muted-foreground space-y-1">
					<p>Exercise: 3 days/week</p>
					<p>Sleep: 8 hours/night</p>
					<p>Diet: Balanced</p>
					<p>Alcohol: Yes</p>
					<p>Smoking: No</p>
				</div>
			</div>

			<p className="text-sm text-center text-muted-foreground">
				Your data is private and secure.
			</p>

			<Button className="w-full cursor-pointer py-3 rounded-full font-medium transition-all">
				Finish Setup
			</Button>
		</div>
	);
}
