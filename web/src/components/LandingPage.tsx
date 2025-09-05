import {
	AlertTriangle,
	Apple,
	HeartPlus,
	Languages,
	Lightbulb,
	ListChecks,
	ShieldAlert,
	ShieldCheck,
	Smartphone,
	Stethoscope,
	WifiOff,
} from "lucide-react";
import Image from "next/image";
import { Button } from "./ui/button";

const LandingPage = () => {
	return (
		<div>
			<main>
				{/* Hero Section */}
				<section
					id="hero"
					className="flex flex-col md:flex-row items-center w-full min-h-[500px] text-white bg-[hsl(212,70%,24%)] px-6 md:px-17 py-10 md:gap-20"
				>
					{/* Left Side - Text */}
					<div className="flex-1.2 mt-6 max-w-2xl">
						<p>Trusted home health guidance</p>
						<h1 className="font-bold text-4xl md:text-5xl mb-3 mt-3">
							Safe, Simple, Accessible Health Guidance.
						</h1>
						<p className="text-[16px] md:text-[18px]">
							AI-powered home remedy advisor with local languages and offline access --- built for Africa
						</p>

						<div className="flex flex-col sm:flex-row gap-4 mt-6">
							<Button
								variant="default"
								size="lg"
								className="bg-[hsl(160,84%,25%)] flex items-center gap-2 h-13 text-white"
							>
								<Smartphone className="w-6 h-6" /> Get it on Android
							</Button>
							<Button
								variant="secondary"
								size="lg"
								className="bg-[#F59E0B] flex items-center gap-2 h-13 text-white"
							>
								<Apple className="w-6 h-6" /> Download for iOS
							</Button>
						</div>

						<div className="flex flex-wrap gap-4 mt-6">
							<div className="flex items-center gap-2">
								<ShieldCheck className="w-6 h-5 text-white" /> <span>Private-first</span>
							</div>
							<div className="flex items-center gap-2">
								<Languages className="w-6 h-5 text-white" /> <span>Local languages</span>
							</div>
						</div>
					</div>

					{/* Right Side - Image */}
					<div className="flex-1 flex justify-center md:justify-end">
						<Image
							src="/landingPage.png"
							alt="Landing-page"
							width={650}
							height={450}
							className="border-14 border-white rounded-[24px] w-full max-w-lg"
						/>
					</div>
				</section>

				{/* Features */}
				<section id="features" className="w-full py-20 px-6 md:px-17">
					<h1 className="text-3xl md:text-4xl font-bold">Everything you need for safer self-care</h1>
					<p className="text-gray-500 mt-4 text-sm md:text-[14px]">
						Designed for clarity, safety, and access across devices and bandwidths
					</p>

					<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
						<FeatureCard
							icon={<Languages className="w-6 h-5" />}
							title="Bilingual Guidance"
							desc="Switch between English and local languages for clearer understanding."
						/>
						<FeatureCard
							icon={<WifiOff className="w-6 h-5" />}
							title="Offline Access"
							desc="Essential guidance and saved remedies work even without internet."
						/>
						<FeatureCard
							icon={<HeartPlus className="w-6 h-5" />}
							title="Safe Home Remedies"
							desc="Evidence-informed tips tailored to your context and age."
						/>
						<FeatureCard
							icon={<AlertTriangle className="w-6 h-5" />}
							title="Red-Flag Alerts"
							desc="Know when to seek urgent care with clear safety warnings."
						/>
					</div>
				</section>

				<section id="about" className="text-white bg-[hsl(212,70%,24%)] px-6 md:px-17 py-12 w-full">
					<div className="flex flex-col items-center">
						<h1 className="text-3xl font-bold mb-3">Why RemedyMate?</h1>
						<p className="mb-6 text-gray-400">Simple steps from symptoms to safe guidance.</p>
					</div>

					{/* First row */}
					<div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-6 min-h-[70vh]">
						<div className="p-7 bg-white rounded-[20px] text-center w-full">
							<Stethoscope className="w-10 h-10 text-black mx-auto pb-2" />
							<h1 className="font-bold text-lg text-black">Symptom</h1>
							<p className="text-gray-400">Describe how you feel</p>
						</div>

						<div className="p-7 bg-white rounded-[20px] text-center w-full">
							<ListChecks className="w-10 h-10 text-black mx-auto pb-2" />
							<h1 className="font-bold text-lg text-black">Triage</h1>
							<p className="text-gray-400">Assess urgency level</p>
						</div>
						<div className="p-7 bg-white rounded-[20px] text-center w-full">
							<Lightbulb className="w-10 h-10 text-black mx-auto pb-2" />
							<h1 className="font-bold text-lg text-black">Guidance</h1>
							<p className="text-gray-400">Clear, step-by-step tip</p>
						</div>

						<div className="p-7 bg-white rounded-[20px] text-center w-full">
							<ShieldAlert className="w-10 h-10 text-black mx-auto pb-2" />
							<h1 className="font-bold text-lg text-black">Safety Check</h1>
							<p className="text-gray-400">Warnings and what to avoid</p>
						</div>
					</div>
				</section>

				{/* Testimonials */}
				<section
					id="testimonials"
					className="w-full my-10 py-12 px-6 md:px-17 flex flex-col items-center justify-center"
				>
					<h1 className="text-3xl font-bold mb-8 w-full text-center">What people say</h1>
					<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
						<TestimonialCard
							img="/Profile3.png"
							name="Amina"
							role="Parent, Kenya"
							text="Gave me calm, clear steps when my child had a fever — even without internet."
						/>
						<TestimonialCard
							img="/Profile1.png"
							name="Samuel"
							role="Student, Ghana"
							text="Love the bilingual support. It explains things in plain language my family understands."
						/>
						<TestimonialCard
							img="/Profile2.png"
							name="Zainab"
							role="Nurse, Nigeria"
							text="Clear red-flag alerts help people know when to get urgent care. Very helpful."
						/>
					</div>
				</section>

				{/* Call to Action */}
				<section className="w-full bg-[#005579] py-12 px-6 flex justify-center">
					<div className="flex flex-col md:flex-row justify-between items-center w-full max-w-5xl bg-white dark:bg-blue-300 rounded-[20px] p-6">
						<div className="text-center md:text-left mb-6 md:mb-0">
							<h1 className="font-bold text-[20px] md:text-[23px] mb-2">Start safer self-care today</h1>
							<p className="text-gray-400 dark:text-white text-sm">
								Free to try. Works offline. Built for Africa.
							</p>
						</div>

						<div className="flex flex-col sm:flex-row gap-4">
							<Button
								variant="default"
								size="lg"
								className="bg-[hsl(160,84%,25%)] flex items-center gap-2 h-13 text-white"
							>
								<Smartphone className="w-6 h-6 " /> Get it on Android
							</Button>
							<Button
								variant="secondary"
								size="lg"
								className="bg-[#F59E0B] flex items-center gap-2 h-13 text-white"
							>
								<Apple className="w-6 h-6" /> Download for iOS
							</Button>
						</div>
					</div>
				</section>
			</main>
		</div>
	);
};

// Small reusable components
interface FeatureCardProps {
	icon: React.ReactNode;
	title: string;
	desc: string;
}

const FeatureCard = ({ icon, title, desc }: FeatureCardProps) => (
	<div className="bg-white px-5 py-5 rounded-[20px]">
		<div className="flex items-center gap-2 mb-2">
			{icon}
			<h1 className="text-black text-[16px]">{title}</h1>
		</div>
		<p className="text-gray-400 text-sm">{desc}</p>
	</div>
);

interface TestimonialCardProps {
	img: string;
	name: string;
	role: string;
	text: string;
}

const TestimonialCard = ({ img, name, role, text }: TestimonialCardProps) => (
	<div className="p-6 bg-white dark:bg-gray-900 rounded-[25px]">
		<div className="flex gap-3 mb-3 items-center">
			<Image src={img} alt={name} width={50} height={50} className="rounded-full" />
			<div>
				<p>{name}</p>
				<p className="text-gray-400 text-sm">{role}</p>
			</div>
		</div>
		<p className="text-gray-400 text-sm">{text}</p>
	</div>
);

export default LandingPage;
