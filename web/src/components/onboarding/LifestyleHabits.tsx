'use client';

import { LifeStyleHabitPayload } from '@/types/onboarding';
import { Dispatch, SetStateAction, useState } from 'react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Label } from '../ui/label';

type Props = {
	onNext: () => void;
	onBack: () => void;
	data: LifeStyleHabitPayload | undefined;
	updateData: Dispatch<SetStateAction<LifeStyleHabitPayload | undefined>>;
};

export default function LifestyleHabits({
	onNext,
	onBack,
	data,
	updateData,
}: Props) {
	const [exercise, setExercise] = useState<number>(
		data?.physical_activity.frequency_per_week || 3
	); // frequency_per_week
	const [sleep, setSleep] = useState<number>(
		data?.sleep.average_duration_hours || 8
	); // average_duration_hours (will allow .5)
	const [diet, setDiet] = useState<string>(
		data?.dietary_habits.diet_type || 'Omnivore'
	);

	// new dietary fields
	const [mealsPerDay, setMealsPerDay] = useState<number>(
		data?.dietary_habits.meals_per_day || 3
	);
	const [vegServings, setVegServings] = useState<number>(
		data?.dietary_habits.vegetable_intake_servings_per_day || 4
	);
	const [waterLiters, setWaterLiters] = useState<number>(
		data?.dietary_habits.daily_water_intake_liters || 2.5
	);

	// physical activity primary type
	const [primaryActivity, setPrimaryActivity] = useState<string>(
		data?.physical_activity.primary_type || 'Walking'
	);

	// substance use
	const [smokingStatus, setSmokingStatus] = useState<string>(
		data?.substance_use.smoking_status || 'Non-smoker'
	); // Non-smoker | Former | Smoker
	const [alcoholRange, setAlcoholRange] = useState<string>(
		data?.substance_use.alcohol_consumption_per_week || '0-2 drinks'
	);

	// stress & occupation
	const [stressLevel, setStressLevel] = useState<string>(
		data?.stress.level || 'Moderate'
	); // Low | Moderate | High
	const [occupation, setOccupation] = useState<string>(
		data?.occupation || 'Teacher'
	);

	// existing toggles kept for UI parity
	const [smoker, setSmoker] = useState(false);
	const [drinker, setDrinker] = useState(true);

	const buildPayload = () => ({
		dietary_habits: {
			diet_type: diet,
			meals_per_day: mealsPerDay,
			vegetable_intake_servings_per_day: vegServings,
			daily_water_intake_liters: Number(waterLiters),
		},
		physical_activity: {
			frequency_per_week: exercise,
			primary_type: primaryActivity,
		},
		substance_use: {
			smoking_status: smokingStatus,
			alcohol_consumption_per_week: alcoholRange,
		},
		sleep: {
			average_duration_hours: Number(sleep),
		},
		stress: {
			level: stressLevel,
		},
		occupation,
	});
	const handleNext = () => {
		updateData((prev) => ({ ...prev, ...buildPayload() }));
		onNext();
	};

	return (
		<div className="relative w-full h-full flex flex-col items-center justify-center text-center space-y-6 gap-4">
			<div className="self-start flex items-center w-full">
				<Button
					onClick={onBack}
					className="cursor-pointer rounded-full w-10 h-10 font-bold shadow absolute left-0 top-0"
				>
					{'<'}
				</Button>
				<h1 className="text-2xl md:text-3xl w-full font-semibold text-center">
					Lifestyle & Habits
				</h1>
			</div>

			<p className="text-lg text-muted-foreground text-center">
				This helps us understand your overall wellness.
			</p>

			{/* Diet type */}
			<div className="w-full flex flex-col items-center">
				<Label className="block mb-2">Diet Type</Label>
				<div className="flex flex-wrap justify-center gap-2">
					{['Omnivore', 'Vegetarian', 'Vegan', 'Pescatarian'].map(
						(d) => (
							<Button
								key={d}
								onClick={() => setDiet(d)}
								className={`px-4 bg-secondary text-secondary-foreground hover:text-white py-2 border rounded-full transition cursor-pointer ${
									diet === d
										? 'bg-primary text-primary-foreground'
										: ''
								}`}
							>
								{d}
							</Button>
						)
					)}
				</div>
			</div>

			{/* Meals per day */}
			<div className="w-full">
				<Label className="block mb-2">Meals per day</Label>
				<Input
					type="range"
					min={1}
					max={6}
					value={mealsPerDay}
					onChange={(e) => setMealsPerDay(Number(e.target.value))}
					className="w-full accent-primary"
				/>
				<p className="text-center text-sm mt-1 text-muted-foreground">
					{mealsPerDay} meals/day
				</p>
			</div>

			{/* Vegetable intake */}
			<div className="w-full">
				<Label className="block mb-2">Vegetable servings per day</Label>
				<Input
					type="range"
					min={0}
					max={10}
					value={vegServings}
					onChange={(e) => setVegServings(Number(e.target.value))}
					className="w-full accent-primary"
				/>
				<p className="text-center text-sm mt-1 text-muted-foreground">
					{vegServings} servings/day
				</p>
			</div>

			{/* Water intake */}
			<div className="w-full">
				<Label className="block mb-2">
					Daily water intake (liters)
				</Label>
				<Input
					type="range"
					min={0}
					max={6}
					step={0.1}
					value={waterLiters}
					onChange={(e) => setWaterLiters(Number(e.target.value))}
					className="w-full accent-primary"
				/>
				<p className="text-center text-sm mt-1 text-muted-foreground">
					{waterLiters.toFixed(1)} L/day
				</p>
			</div>

			{/* Physical activity */}
			<div className="w-full">
				<Label className="block mb-2">Physical activity</Label>
				<div className="grid grid-cols-1 md:grid-cols-2 gap-3">
					<div>
						<Label className="block mb-2">Frequency per week</Label>
						<Input
							type="range"
							min={0}
							max={7}
							value={exercise}
							onChange={(e) =>
								setExercise(Number(e.target.value))
							}
							className="w-full accent-primary"
						/>
						<p className="text-center text-sm mt-1 text-muted-foreground">
							{exercise} days/week
						</p>
					</div>

					<div>
						<Label className="block mb-2">
							Primary activity type
						</Label>
						<select
							value={primaryActivity}
							onChange={(e) => setPrimaryActivity(e.target.value)}
							className="w-full border border-border rounded-md px-3 py-2"
						>
							<option>Walking</option>
							<option>Running</option>
							<option>Gym</option>
							<option>Cycling</option>
							<option>Swimming</option>
							<option>Other</option>
						</select>
					</div>
				</div>
			</div>

			{/* Substance use */}
			<div className="w-full ">
				<div className="flex flex-col md:flex-row gap-4 items-center">
					<div className="flex flex-col items-center gap-2">
						<Label className="block mb-2">Smoking status</Label>
						<div className="flex gap-2">
							{['Non-smoker', 'Former', 'Smoker'].map((s) => (
								<Button
									key={s}
									onClick={() => {
										setSmokingStatus(s);
										setSmoker(s === 'Smoker');
									}}
									className={` rounded-full bg-secondary text-secondary-foreground hover:text-white transition cursor-pointer  ${
										smokingStatus === s
											? 'bg-primary text-primary-foreground'
											: ''
									}`}
								>
									{s}
								</Button>
							))}
						</div>
					</div>

					<div className="flex-1">
						<Label className="block mb-2">Alcohol (per week)</Label>
						<select
							value={alcoholRange}
							onChange={(e) => {
								setAlcoholRange(e.target.value);
								setDrinker(
									!(
										e.target.value === '0' ||
										e.target.value === '0-2 drinks'
									)
								);
							}}
							className="w-full border border-border rounded-md px-3 py-2"
						>
							<option value="0">0</option>
							<option value="0-2 drinks">0-2 drinks</option>
							<option value="3-7 drinks">3-7 drinks</option>
							<option value="7+ drinks">7+ drinks</option>
						</select>
					</div>
				</div>
			</div>

			{/* Sleep (average) */}
			<div className="w-full">
				<Label className="block mb-2">
					Average sleep duration (hours)
				</Label>
				<Input
					type="range"
					min={3}
					max={12}
					step={0.5}
					value={sleep}
					onChange={(e) => setSleep(Number(e.target.value))}
					className="w-full accent-primary"
				/>
				<p className="text-center text-sm mt-1 text-muted-foreground">
					{sleep} hours/night
				</p>
			</div>

			{/* Stress */}
			<div className="w-full flex flex-col items-center gap-2">
				<Label className="block mb-2">Stress level</Label>
				<div className="flex gap-2">
					{['Low', 'Moderate', 'High'].map((s) => (
						<Button
							key={s}
							onClick={() => setStressLevel(s)}
							className={`bg-secondary text-secondary-foreground hover:text-white rounded-full ${
								stressLevel === s
									? 'bg-destructive text-primary-foreground'
									: ''
							}`}
						>
							{s}
						</Button>
					))}
				</div>
			</div>

			{/* Occupation */}
			<div className="w-full">
				<Label className="block mb-2">Occupation</Label>
				<Input
					value={occupation}
					onChange={(e) => setOccupation(e.target.value)}
					placeholder="e.g. Teacher"
				/>
			</div>

			<div className="flex flex-col gap-3 w-full mt-4">
				<Button
					type="submit"
					onClick={handleNext}
					className="w-full py-3 shadow-md cursor-pointer"
				>
					Review & Confirm
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
	);
}
