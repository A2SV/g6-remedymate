import { Button } from '@/components/ui/button';
import { Apple, Smartphone } from 'lucide-react';
import Image from 'next/image';

const CtaSection = () => {
	return (
		<section className="py-16 sm:py-24 bg-background relative overflow-hidden">
			{/* Gradient Background */}
			<div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background/0 to-accent/10" />

			<div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
				<div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
					{/* Content */}
					<div className="order-2 lg:order-1">
						<h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-foreground mb-4 sm:mb-6">
							Your World,{' '}
							<span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-foreground/0">
								Streamlined
							</span>{' '}
							and Simplified
						</h2>

						<p className="text-base sm:text-lg text-muted-foreground mb-8 leading-relaxed">
							Take control of your health today. Download Healo
							and experience healthcare that revolves around
							you—simple, accessible, and always there when you
							need it.
						</p>

						<div className="flex flex-col sm:flex-row gap-4">
							<Button
								size="lg"
								className="rounded-full gap-2 shadow-soft cursor-pointer"
							>
								<Apple className="w-5 h-5" />
								App Store
							</Button>
							<Button
								size="lg"
								variant="outline"
								className="rounded-full gap-2 border-2 cursor-pointer"
							>
								<Smartphone className="w-5 h-5" />
								Google Play
							</Button>
						</div>
					</div>

					{/* Community Healthcare Illustration */}
					<div className="order-1 lg:order-2 relative">
						<div className="max-w-lg mx-auto lg:mr-0">
							<div className="relative rounded-3xl overflow-hidden shadow-soft hover:scale-105 transition-smooth">
								<Image
									width={600}
									height={600}
									src="/cta-community.png"
									alt="Diverse community of people accessing healthcare services"
									className="w-full h-auto"
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default CtaSection;
