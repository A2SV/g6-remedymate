import { Button } from '@/components/ui/button';
import { Clock, Heart, Shield, Stethoscope } from 'lucide-react';
import Image from 'next/image';

const trustPoints = [
	{
		icon: Shield,
		title: 'Secure & Private',
		description:
			'Your data is encrypted and protected with industry-leading security standards.',
	},
	{
		icon: Stethoscope,
		title: 'AI-Powered Health Insights',
		description:
			'Get personalized health recommendations powered by advanced AI technology.',
	},
	{
		icon: Clock,
		title: 'Instant Appointments',
		description:
			'Book same-day appointments with top-rated healthcare professionals.',
	},
	{
		icon: Heart,
		title: 'Affordable Health Hub',
		description:
			'Access quality healthcare at transparent, affordable prices that fit your budget.',
	},
];

const TrustSection = () => {
	return (
		<section className="py-16 sm:py-24 bg-background">
			<div className="container mx-auto px-4 sm:px-6 lg:px-8">
				<div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
					<h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-foreground mb-4 sm:mb-6">
						Why We&apos;re Your Trusted Healthcare{' '}
						<span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-foreground/0">
							Partner
						</span>
					</h2>
					<p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
						Join thousands who trust Healo for their healthcare
						needs. We&apos;re committed to your wellbeing.
					</p>
				</div>

				<div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
					{/* Trust Points */}
					<div className="space-y-4 sm:space-y-6 order-2 lg:order-1">
						{trustPoints.map((point, index) => {
							const Icon = point.icon;
							return (
								<div
									key={index}
									className="flex gap-4 items-start"
								>
									<div className="flex-shrink-0">
										<div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
											<Icon className="w-5 h-5 text-primary" />
										</div>
									</div>
									<div className="flex-1">
										<h3 className="text-lg font-bold text-foreground mb-1">
											{point.title}
										</h3>
										<p className="text-sm text-muted-foreground leading-relaxed">
											{point.description}
										</p>
									</div>
								</div>
							);
						})}

						<Button
							size="lg"
							className="rounded-full w-full sm:w-auto shadow-soft mt-6"
						>
							Get Started
						</Button>
					</div>

					{/* Security Shield Illustration */}
					<div className="relative order-1 lg:order-2">
						<div className="max-w-lg mx-auto lg:mr-auto">
							<div className="relative">
								{/* Glow Effect */}
								<div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl blur-2xl" />

								<div className="relative rounded-3xl overflow-hidden shadow-soft hover:scale-105 transition-smooth">
									<Image
										width={600}
										height={600}
										src="/trust-security.png"
										alt="Secure healthcare data protection with shield and lock symbols"
										className="w-full h-auto"
									/>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default TrustSection;
