'use client';

import HomePage from '@/components/onboarding/HomePage';
import LifestyleHabits from '@/components/onboarding/LifestyleHabits';
import MedicalHistory from '@/components/onboarding/MedicalHistory';
import PersonalInfo from '@/components/onboarding/PersonalInfo';
import ReviewConfirm from '@/components/onboarding/ReviewConfirm';
import StepIndicator from '@/components/onboarding/StepIndicator';
import { Card } from '@/components/ui/card';
import { MedicalHistoryFormData } from '@/lib/zod/medicalHistorySchema';
import { PersonalInfoFormData } from '@/lib/zod/personalInfoSchema';
import { LifeStyleHabitPayload } from '@/types/onboarding';
import { useState } from 'react';

export default function OnboardingPage() {
	const [step, setStep] = useState(1);
	const totalSteps = 5;
	const [personalInfoData, setPersonalInfoData] =
		useState<PersonalInfoFormData>();
	const [medicalHistoryFormData, setMedicalHistoryFormData] =
		useState<MedicalHistoryFormData>();
	const [lifeStyleHabitPayload, setLifeStyleHabitPalyload] =
		useState<LifeStyleHabitPayload>();

	const nextStep = () => setStep((prev) => Math.min(prev + 1, totalSteps));
	const prevStep = () => setStep((prev) => Math.max(prev - 1, 1));

	return (
		<div className="min-h-screen flex flex-col items-center justify-center p-6">
			<StepIndicator currentStep={step} totalSteps={totalSteps} />

			<div className="w-full max-w-4xl shadow-lg rounded-2xl flex items-center justify-center transition-all duration-300">
				<Card className="w-full h-full flex items-center justify-center px-4 py-8 md:px-8 md:py-12">
					{step === 1 && <HomePage onNext={nextStep} />}
					{step === 2 && (
						<PersonalInfo
							data={personalInfoData}
							updateData={setPersonalInfoData}
							onNext={nextStep}
							onBack={prevStep}
						/>
					)}
					{step === 3 && (
						<MedicalHistory
							data={medicalHistoryFormData}
							updateData={setMedicalHistoryFormData}
							onNext={nextStep}
							onBack={prevStep}
						/>
					)}
					{step === 4 && (
						<LifestyleHabits
							data={lifeStyleHabitPayload}
							updateData={setLifeStyleHabitPalyload}
							onNext={nextStep}
							onBack={prevStep}
						/>
					)}
					{step === 5 && (
						<ReviewConfirm
							data={{
								personal: personalInfoData,
								medical: medicalHistoryFormData,
								lifestyle: lifeStyleHabitPayload,
							}}
							onBack={prevStep}
						/>
					)}
				</Card>
			</div>
		</div>
	);
}
