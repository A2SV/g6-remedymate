type StepIndicatorProps = {
	currentStep: number;
	totalSteps: number;
};

export default function StepIndicator({
	currentStep,
	totalSteps,
}: StepIndicatorProps) {
	return (
		<div className="flex justify-center items-center gap-2 my-4">
			{Array.from({ length: totalSteps }).map((_, i) => (
				<div
					key={i}
					className={`h-2.5 rounded-full transition-all duration-300 ${
						currentStep === i + 1
							? 'bg-primary w-5'
							: 'bg-gray-300 w-2.5'
					}`}
				/>
			))}
		</div>
	);
}
