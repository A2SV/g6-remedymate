import {
	AlertTriangle,
	Apple,
	CheckCircle,
	Download,
	Globe,
	Languages,
	Shield,
	ShieldCheck,
	Smartphone,
	Wifi,
} from "lucide-react";
import Image from "next/image";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";

const LandingPage = () => {
	return (
		<div>
			<main>
				{/* Hero Section */}
				<section id="hero" className="bg-[hsl(212,70%,24%)] dark:bg-gray-900 px-6 md:px-17 py-10 ">
					<div className="container mx-auto flex flex-col md:flex-row items-center md:gap-20 w-full min-h-[500px] text-white">
						{/* Left Side - Text */}
						<div className="flex-1.2 mt-6 max-w-2xl">
							<p>Trusted home health guidance</p>
							<h1 className="font-bold text-4xl md:text-5xl mb-3 mt-3">
								Safe, Simple, Accessible Health Guidance.
							</h1>
							<p className="text-[16px] md:text-[18px]">
								AI-powered home remedy advisor with local languages and offline access --- built for
								Africa
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
					</div>
				</section>

				{/* Features */}
				<section
					id="features"
					className="py-20 px-6 md:px-17 bg-gradient-to-l dark:from-gray-900 dark:via-gray-800 dark:to-gray-900"
				>
					<div className="container mx-auto">
						<h1 className="text-3xl md:text-4xl font-bold dark:text-gray-100">
							Everything you need for safer self-care
						</h1>
						<p className="text-gray-500 dark:text-gray-400 mt-4 text-sm md:text-[14px]">
							Designed for clarity, safety, and access across devices and bandwidths
						</p>

						<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
							<Card className="border-border hover:shadow-lg dark:bg-gray-900/70 transition-shadow">
								<CardContent className="p-6 text-center">
									<div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
										<Globe className="w-6 h-6 text-accent" />
									</div>
									<h3 className="text-lg font-semibold text-foreground dark:text-gray-100 mb-2">
										Bilingual Guidance
									</h3>
									<p className="text-muted-foreground dark:text-gray-400 text-sm text-pretty">
										Switch seamlessly between English and local languages for better understanding
									</p>
								</CardContent>
							</Card>

							<Card className="border-border hover:shadow-lg dark:bg-gray-900/70 transition-shadow">
								<CardContent className="p-6 text-center">
									<div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
										<Wifi className="w-6 h-6 text-primary" />
									</div>
									<h3 className="text-lg font-semibold text-foreground dark:text-gray-100 mb-2">
										Offline Access
									</h3>
									<p className="text-muted-foreground dark:text-gray-400 text-sm text-pretty">
										Access essential health information even without internet connection
									</p>
								</CardContent>
							</Card>

							<Card className="border-border hover:shadow-lg dark:bg-gray-900/70 transition-shadow">
								<CardContent className="p-6 text-center">
									<div className="w-12 h-12 bg-chart-3/10 rounded-full flex items-center justify-center mx-auto mb-4">
										<Shield className="w-6 h-6 text-chart-3" />
									</div>
									<h3 className="text-lg font-semibold text-foreground dark:text-gray-100 mb-2">
										Safe Home Remedies
									</h3>
									<p className="text-muted-foreground dark:text-gray-400 text-sm text-pretty">
										Evidence-based remedies appropriate for your age and health context
									</p>
								</CardContent>
							</Card>

							<Card className="border-border hover:shadow-lg dark:bg-gray-900/70 transition-shadow">
								<CardContent className="p-6 text-center">
									<div className="w-12 h-12 bg-destructive/10 rounded-full flex items-center justify-center mx-auto mb-4">
										<AlertTriangle className="w-6 h-6 text-destructive" />
									</div>
									<h3 className="text-lg font-semibold text-foreground dark:text-gray-100 mb-2">
										Red-Flag Alerts
									</h3>
									<p className="text-muted-foreground dark:text-gray-400 text-sm text-pretty">
										Clear warnings on when to seek immediate professional medical care
									</p>
								</CardContent>
							</Card>
						</div>
					</div>
				</section>

				{/* About */}
				<section
					id="about"
					className="text-white bg-gradient-to-l from-primary via-primary/90 to-accent
             dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 px-6 md:px-17 py-12 w-full"
				>
					<div className="container mx-auto px-4">
						<div className="grid lg:grid-cols-2 gap-12 items-center">
							<div>
								<h2 className="text-3xl lg:text-4xl text-white font-bold mb-6">
									How RemedyMate Helps You Step-by-Step
								</h2>
								<div className="space-y-6 text-white">
									<div className="flex items-start space-x-4">
										<div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
											<span className="font-semibold text-sm">1</span>
										</div>
										<div>
											<h3 className="font-semibold mb-2">Describe Your Symptoms</h3>
											<p className=" text-pretty">
												Tell us what you&apos;re experiencing in simple terms, in your preferred
												language
											</p>
										</div>
									</div>

									<div className="flex items-start space-x-4">
										<div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center flex-shrink-0 mt-1">
											<span className="text-white font-semibold text-sm">2</span>
										</div>
										<div>
											<h3 className="font-semibold mb-2">Get Personalized Guidance</h3>
											<p className="text-pretty">
												Receive safe, evidence-based remedies tailored to your age and situation
											</p>
										</div>
									</div>

									<div className="flex items-start space-x-4">
										<div className="w-8 h-8 bg-chart-3 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
											<span className="text-white font-semibold text-sm">3</span>
										</div>
										<div>
											<h3 className="font-semibold mb-2">Know When to Seek Help</h3>
											<p className=" text-pretty">
												Clear alerts tell you when symptoms require immediate professional care
											</p>
										</div>
									</div>
								</div>
							</div>

							<div className="bg-card rounded-2xl p-8 border border-border shadow-lg dark:bg-gray-900/70">
								<div className="space-y-4">
									<div className="flex items-center space-x-3">
										<CheckCircle className="w-5 h-5 text-chart-3" />
										<span className="text-foreground dark:text-gray-200">
											Medical professional reviewed
										</span>
									</div>
									<div className="flex items-center space-x-3">
										<CheckCircle className="w-5 h-5 text-chart-3" />
										<span className="text-foreground dark:text-gray-200">
											Available in 12+ languages
										</span>
									</div>
									<div className="flex items-center space-x-3">
										<CheckCircle className="w-5 h-5 text-chart-3" />
										<span className="text-foreground dark:text-gray-200">
											Works completely offline
										</span>
									</div>
									<div className="flex items-center space-x-3">
										<CheckCircle className="w-5 h-5 text-chart-3" />
										<span className="text-foreground dark:text-gray-200">
											Regular content updates
										</span>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>

				{/* Testimonials */}
				<section
					id="testimonials"
					className="py-27 px-6 md:px-17 bg-gradient-to-r dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 "
				>
					<div className="container mx-auto flex flex-col items-center justify-center">
						<h1 className="text-3xl font-bold mb-8 w-full text-center dark:text-gray-100">
							What people say
						</h1>
						<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
							<TestimonialCard
								img="/Profile3.png"
								name="Amina"
								role="Parent, Kenya"
								text="RemedyMate helped me care for my daughter's fever at 2 AM when no clinics were open. The bilingual support was a lifesaver."
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
					</div>
				</section>

				{/* Call to Action */}
				<section className="py-20 bg-gradient-to-r from-primary via-primary/90 to-accent text-white dark:from-gray-900 dark:via-gray-800 dark:to-primary">
					<div className="container mx-auto px-4 text-center">
						<h2 className="text-3xl lg:text-4xl font-bold mb-6 text-balance">
							Ready to Take Control of Your Health?
						</h2>
						<p className="text-xl mb-8 text-white/90 dark:text-gray-300 max-w-2xl mx-auto text-pretty">
							Join thousands of families who trust RemedyMate for reliable health guidance. Download now
							and get peace of mind.
						</p>

						<div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
							<Button size="lg" className="bg-white text-black hover:bg-white/90 px-8 py-3">
								<Download className="w-5 h-5 mr-2" />
								Download for iOS
							</Button>
							<Button size="lg" className="bg-white text-black hover:bg-white/90 px-8 py-3">
								<Download className="w-5 h-5 mr-2" />
								Download for Android
							</Button>
						</div>

						<div className="flex flex-wrap justify-center gap-8 text-sm text-white/80 dark:text-gray-400">
							<div className="flex items-center">
								<CheckCircle className="w-4 h-4 mr-2 text-chart-3" />
								Free to download
							</div>
							<div className="flex items-center">
								<CheckCircle className="w-4 h-4 mr-2 text-chart-3" />
								No subscription required
							</div>
							<div className="flex items-center">
								<CheckCircle className="w-4 h-4 mr-2 text-chart-3" />
								Privacy protected
							</div>
						</div>
					</div>
				</section>
			</main>
		</div>
	);
};

interface TestimonialCardProps {
	img: string;
	name: string;
	role: string;
	text: string;
}

const TestimonialCard = ({ img, name, role, text }: TestimonialCardProps) => (
	<div className="p-6 bg-white dark:bg-gray-900/70 rounded-[25px]">
		<div className="flex gap-3 mb-3 items-center">
			<Image src={img} alt={name} width={50} height={50} className="rounded-full" />
			<div>
				<p className="dark:text-gray-100">{name}</p>
				<p className="text-gray-400 dark:text-gray-500 text-sm">{role}</p>
			</div>
		</div>
		<p className="text-gray-400 dark:text-gray-300 text-sm">{text}</p>
	</div>
);

export default LandingPage;
