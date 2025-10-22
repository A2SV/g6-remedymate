'use client';

import { MedicalHistoryFormData } from '@/lib/zod/medicalHistorySchema';
import { PersonalInfoFormData } from '@/lib/zod/personalInfoSchema';
import { LifeStyleHabitPayload } from '@/types/onboarding';
import { Button } from '../ui/button';

type Props = {
	onBack: () => void;
	data: {
		personal: PersonalInfoFormData | undefined;
		medical: MedicalHistoryFormData | undefined;
		lifestyle: LifeStyleHabitPayload | undefined;
	};
};

export default function Review({ onBack, data }: Props) {
	return (
		<div className="w-full relative flex flex-col text-foreground items-center justify-center gap-4">
			<div className="self-start flex items-center w-full">
				<Button
					onClick={onBack}
					className="cursor-pointer rounded-full w-10 h-10 font-bold shadow absolute left-0 top-0"
				>
					{'<'}
				</Button>
				<h1 className="text-2xl md:text-3xl w-full font-semibold text-center">
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
					{data?.personal && (
						<>
							<p>Full name: {data.personal?.full_name}</p>
							<p>Date of birth: {data.personal?.date_of_birth}</p>
							<p>Gender: {data.personal?.gender}</p>
							<p>Age: {data.personal?.age}</p>
							<p>Height: {data.personal?.height}</p>
							<p>Weight: {data.personal?.weight}</p>
							<p>Blood type: {data.personal?.blood_type}</p>
							<p>
								Contact: {data.personal?.contact.phone},{' '}
								{data.personal?.contact.email}
							</p>
							<p>
								Location: {data.personal?.location.country},{' '}
								{data.personal?.location.region},{' '}
								{data.personal?.location.city}
							</p>
							<p>
								Primary language:{' '}
								{data.personal?.primary_language}
							</p>
							<p>
								Emergency contact:{' '}
								{data.personal?.emergency_contact.name},{' '}
								{data.personal?.emergency_contact.relation},{' '}
								{data.personal?.emergency_contact.phone}
							</p>
						</>
					)}
				</div>
			</div>

			<div className="bg-card rounded-xl border border-border shadow-sm p-5 w-full">
				<div className="flex justify-between items-center mb-2">
					<h2 className="text-lg font-medium text-card-foreground">
						Medical History
					</h2>
				</div>
				<div className="text-sm text-muted-foreground space-y-1">
					{data?.medical && (
						<>
							<p>
								Existing conditions:{' '}
								{data.medical?.existing_conditions.map(
									(cond, i) => (
										<span key={i}>
											{cond.condition},{' '}
											{cond.diagnosed_date}
										</span>
									)
								)}
								,
							</p>
							<p>
								Past surgeries:{' '}
								{data.medical?.past_surgeries.map((cond, i) => (
									<span key={i}>
										{cond.surgery}, {cond.date}
									</span>
								))}
							</p>
							<p>
								Current medications:{' '}
								{data.medical?.current_medications.map(
									(cond, i) => (
										<span key={i}>
											{cond.name}, {cond.dosage},{' '}
											{cond.frequency}
										</span>
									)
								)}
							</p>
							<p>
								Allergies:{' '}
								{data.medical?.allergies.map((cond, i) => (
									<span key={i}>
										{cond.allergen}, {cond.reaction},{' '}
										{cond.severity}
									</span>
								))}
							</p>
							<p>
								Family History:{' '}
								{data.medical?.family_history.map((cond, i) => (
									<span key={i}>
										{cond.condition}, {cond.relation}
									</span>
								))}
							</p>
						</>
					)}
				</div>
			</div>

			<div className="bg-card rounded-xl border border-border shadow-sm p-5 w-full">
				<div className="flex justify-between items-center mb-2">
					<h2 className="text-lg font-medium text-card-foreground">
						Lifestyle & Habits
					</h2>
				</div>
				<div className="text-sm text-muted-foreground space-y-1">
					{data?.lifestyle && (
						<>
							<p>
								Dietary habits:{' '}
								{data.lifestyle?.dietary_habits.diet_type},{' '}
								{
									data.lifestyle?.dietary_habits
										.daily_water_intake_liters
								}
								, {data.lifestyle?.dietary_habits.meals_per_day}
							</p>
							<p>Ocuppation: {data.lifestyle?.occupation}</p>
							<p>
								Physical activity:{' '}
								{data.lifestyle?.physical_activity.primary_type}
								,{' '}
								{
									data.lifestyle?.physical_activity
										.frequency_per_week
								}
							</p>
							<p>
								Sleep:{' '}
								{data.lifestyle?.sleep.average_duration_hours},
							</p>
							<p>Stress: {data.lifestyle?.stress.level},</p>
							<p>
								Substance use:{' '}
								{
									data.lifestyle?.substance_use
										.alcohol_consumption_per_week
								}
								, {data.lifestyle?.substance_use.smoking_status}
							</p>
						</>
					)}
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
