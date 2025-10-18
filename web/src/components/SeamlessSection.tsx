import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, Download, Zap } from "lucide-react";
import Image from "next/image";

const benefits = [
	{
		icon: Download,
		title: "Download the App",
		description:
			"Get started in minutes. Download Healo from App Store or Play Store and create your profile effortlessly.",
	},
	{
		icon: Calendar,
		title: "Choose a Service",
		description: "Book appointments, schedule consultations, or order medicines—all in a few taps from your phone.",
	},
	{
		icon: Zap,
		title: "Get Care Fast",
		description:
			"Connect instantly with doctors, receive quick prescriptions, and access quality healthcare when you need it.",
	},
];

const SeamlessSection = () => {
	return (
		<section className="py-16 sm:py-24 bg-secondary/30">
			<div className="container mx-auto px-4 sm:px-6 lg:px-8">
				<div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
					<h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-foreground mb-4 sm:mb-6">
						Seamless Healthcare, Anytime,{" "}
						<span className="bg-gradient-to-r from-primary to-[hsl(280_80%_70%)] bg-clip-text text-transparent">
							Anywhere
						</span>
					</h2>
					<p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
						Your health companion that travels with you. Access world-class healthcare from the palm of your
						hand.
					</p>
				</div>

				<div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
					{/* Healthcare Network Illustration */}
					<div className="relative order-2 lg:order-1">
						<div className="max-w-lg mx-auto lg:ml-auto">
							<div className="relative rounded-3xl overflow-hidden shadow-soft hover:scale-105 transition-smooth">
								<Image
									width={200}
									height={200}
									src="/seamless-health.png"
									alt="Connected healthcare services and health monitoring"
									className="w-full h-auto"
								/>
							</div>
						</div>
					</div>

					{/* Benefits List */}
					<div className="order-1 lg:order-2 space-y-6">
						{benefits.map((benefit, index) => {
							const Icon = benefit.icon;
							return (
								<Card key={index} className="border-border hover:shadow-soft transition-smooth">
									<CardContent className="p-6">
										<div className="flex gap-4">
											<div className="flex-shrink-0">
												<div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
													<Icon className="w-6 h-6 text-primary" />
												</div>
											</div>
											<div className="flex-1">
												<h3 className="text-lg font-bold text-foreground mb-2">
													{benefit.title}
												</h3>
												<p className="text-sm text-muted-foreground leading-relaxed">
													{benefit.description}
												</p>
											</div>
										</div>
									</CardContent>
								</Card>
							);
						})}

						<Button size="lg" className="rounded-full w-full sm:w-auto shadow-soft mt-4">
							Learn More
						</Button>
					</div>
				</div>
			</div>
		</section>
	);
};

export default SeamlessSection;
