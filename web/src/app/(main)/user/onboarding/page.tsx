"use client";

import { useState } from "react";
import HomePage from "@/components/onboarding/homePage";
import CreateAccount from "@/components/onboarding/createAccount";
import Agreement from "@/components/onboarding/agreement";
import PersonalInfo from "@/components/onboarding/personalInfo";
import StepIndicator from "@/components/onboarding/stepIndicator";
import MedicalHistory from "@/components/onboarding/medicalHistory";
import LifestyleHabits from "@/components/onboarding/LifestyleHabits";
import ReviewConfirm from "@/components/onboarding/reviewConfirm";

export default function OnboardingPage() {
  const [step, setStep] = useState(1);
  const totalSteps = 7;

  const nextStep = () => setStep((prev) => Math.min(prev + 1, totalSteps));
  const prevStep = () => setStep((prev) => Math.max(prev - 1, 1));

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6">
      <StepIndicator currentStep={step} totalSteps={totalSteps} />

      <div className="w-full max-w-[800px] h-[950px] bg-white shadow-lg rounded-2xl flex items-center justify-center transition-all duration-300">
        <div className="w-full h-full flex items-center justify-center p-6">
          {step === 1 && <HomePage onNext={nextStep} />}
          {step === 2 && <CreateAccount onNext={nextStep} onBack={prevStep} />}
          {step === 3 && <Agreement onNext={nextStep} onBack={prevStep} />}
          {step === 4 && <PersonalInfo onNext={nextStep} onBack={prevStep} />}
          {step === 5 && <MedicalHistory onNext={nextStep} onBack={prevStep} />}
          {step === 6 && <LifestyleHabits onNext={nextStep} onBack={prevStep} />}
          {step === 7 && <ReviewConfirm onBack={prevStep} />}
        </div>
      </div>
    </div>
  );
}
