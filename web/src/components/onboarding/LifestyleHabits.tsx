// ...existing code...
'use client';

import { useState } from 'react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Label } from '../ui/label';

type Props = {
	onNext: () => void;
	onBack: () => void;
};

export default function LifestyleHabits({ onNext, onBack }: Props) {
	const [exercise, setExercise] = useState(3);
	const [sleep, setSleep] = useState(8);
	const [diet, setDiet] = useState('Balanced');
	const [smoker, setSmoker] = useState(false);
	const [drinker, setDrinker] = useState(true);

	return (
		<div className="relative w-full h-full flex flex-col items-center justify-center text-center space-y-6 px-8 py-12 gap-4">
			<div className="self-start flex items-center w-full">
				<Button
					onClick={onBack}
					className="cursor-pointer rounded-full w-10 h-10 font-bold shadow absolute left-0 top-0"
				>
					{'<'}
				</Button>
				<h1 className="text-3xl w-full font-semibold text-center">
					Lifestyle & Habits
				</h1>
			</div>

			<p className="text-lg text-muted-foreground text-center">
				This helps us understand your overall wellness.
			</p>

			<div className="w-full">
				<Label className="block mb-2">Exercise Frequency</Label>
				<Input
					type="range"
					min="0"
					max="7"
					value={exercise}
					onChange={(e) => setExercise(Number(e.target.value))}
					className="w-full accent-primary"
				/>
				<p className="text-center text-sm mt-1 text-muted-foreground">
					{exercise} days/week
				</p>
			</div>

			<div className="w-full">
				<Label className="block mb-2">Sleep Duration</Label>
				<Input
					type="range"
					min="4"
					max="12"
					value={sleep}
					onChange={(e) => setSleep(Number(e.target.value))}
					className="w-full accent-primary"
				/>
				<p className="text-center text-sm mt-1 text-muted-foreground">
					{sleep} hours/night
				</p>
			</div>

			<div>
				<Label className="block mb-2">Dietary Habits</Label>
				<div className="flex gap-2">
					{['Balanced', 'Vegetarian', 'Keto'].map((d) => (
						<Button
							key={d}
							onClick={() => setDiet(d)}
							className={`px-4 py-2 border rounded-full transition hover:text-primary-foreground bg-secondary text-secondary-foreground cursor-pointer ${
								diet === d ? 'border-primary' : ''
							}`}
						>
							{d}
						</Button>
					))}
				</div>
			</div>

			<div className="w-full">
				<Label className="block mb-2 text-muted-foreground">
					Smoking & Alcohol
				</Label>
				<div className="flex gap-2">
					<button
						onClick={() => setSmoker(!smoker)}
						className={`flex-1 py-2 rounded-full border text-sm transition-all cursor-pointer ${
							smoker
								? 'bg-destructive text-destructive-foreground border-destructive'
								: 'bg-card border-border hover:bg-muted'
						}`}
					>
						🚬 {smoker ? 'Smoker' : 'Non-Smoker'}
					</button>

					<button
						onClick={() => setDrinker(!drinker)}
						className={`flex-1 py-2 rounded-full border text-sm transition-all ${
							drinker
								? 'bg-primary text-primary-foreground border-primary'
								: 'bg-card border-border hover:bg-muted'
						}`}
					>
						🍷 {drinker ? 'Drinker' : 'Non-Drinker'}
					</button>
				</div>
			</div>

			<div className="flex flex-col gap-3 w-full mt-4">
				<Button
					type="submit"
					onClick={onNext}
					className="w-full py-3 shadow-md cursor-pointer"
				>
					Review & Confirm
				</Button>
				<Button
					type="button"
					onClick={onNext}
					className="w-full hover:text-primary-foreground bg-secondary text-secondary-foreground cursor-pointer"
				>
					Skip for now
				</Button>
			</div>
		</div>
	);
}
