import Image from 'next/image';
import { Button } from '../ui/button';

type Props = {
	onNext: () => void;
};

export default function HomePage({ onNext }: Props) {
	return (
		<div className="w-full h-full flex flex-col items-center justify-center text-center space-y-6">
			<Image
				src="/homePage.jpg"
				alt="AI Healthcare"
				width={400}
				height={300}
				className="w-full object-cover rounded-2xl shadow-md"
			/>
			<h1 className="text-3xl mt-10 font-semibold">
				Welcome to AI-Powered Healthcare
			</h1>
			<p className="text-lg text-muted-foreground">
				Get personalized medical advice and care — right from your
				phone.
			</p>
			<Button
				onClick={onNext}
				className="rounded-full px-8 py-3 shadow-md transition-all cursor-pointer"
			>
				Get Started
			</Button>
		</div>
	);
}
