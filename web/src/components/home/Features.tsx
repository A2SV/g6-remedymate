import { Card, CardContent } from '@/components/ui/card';
import { Activity, Calendar, FileText, Headphones, Video } from 'lucide-react';

const features = [
	{
		icon: Video,
		title: 'Instant Doctor Consultation',
		description:
			'Connect with certified doctors via video call within minutes for immediate medical advice.',
	},
	{
		icon: Calendar,
		title: 'Easy Appointment Booking',
		description:
			'Schedule appointments with specialists at your preferred time with just a few clicks.',
	},
	{
		icon: FileText,
		title: 'Digital Prescriptions',
		description:
			'Receive and store digital prescriptions securely, accessible anytime from anywhere.',
	},
	{
		icon: Activity,
		title: 'Health Records Management',
		description:
			'Keep all your medical records, test results, and health history in one secure place.',
	},
	{
		icon: Headphones,
		title: 'AI Chat Support',
		description:
			'Get instant, 24/7 answers and guidance from our AI assistant for fast, reliable support.',
	},

	{
		icon: Calendar,
		title: 'Habit Tracking',
		description:
			'Track your daily habits and progress over time to stay motivated and accountable.',
	},
];
const Features = () => {
	return (
		<section id="features" className="py-16 sm:py-24 ">
			<div className="container mx-auto px-4 sm:px-6 lg:px-8">
				<div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
					<h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-foreground mb-4 sm:mb-6">
						Everything You Need for Better{' '}
						<span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-foreground/0">
							Health
						</span>
					</h2>
					<p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
						Comprehensive healthcare services designed to make your
						wellness journey seamless and stress-free.
					</p>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
					{features.map((feature, index) => {
						const Icon = feature.icon;

						return (
							<Card
								key={index}
								className="group relative overflow-hidden transition-smooth border-border hover:bg-gradient-to-br hover:from-primary hover:to-accent hover:text-primary-foreground"
							>
								<CardContent className="p-6 sm:p-8 text-center transition-smooth h-full bg-transparent">
									<div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6 bg-primary/10 group-hover:bg-primary-foreground/20 transition-smooth">
										<Icon className="w-6 h-6 sm:w-7 sm:h-7 text-primary group-hover:text-primary-foreground" />
									</div>

									<h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 text-foreground group-hover:text-primary-foreground">
										{feature.title}
									</h3>

									<p className="text-sm sm:text-base leading-relaxed text-muted-foreground group-hover:text-primary-foreground/90">
										{feature.description}
									</p>
								</CardContent>
							</Card>
						);
					})}
				</div>
			</div>
		</section>
	);
};

export default Features;
