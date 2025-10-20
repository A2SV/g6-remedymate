import { Button } from '@/components/ui/button';
import { Apple, Download } from 'lucide-react';
import Image from 'next/image';

const Hero = () => {
	return (
		<section
			id="home"
			className="relative min-h-screen flex items-center pt-20 overflow-hidden"
		>
			{/* Gradient Background */}
			<div className="absolute inset-0 gradient-hero -z-10" />

			<div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
				<div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
					{/* Left Column - Content */}
					<div className="text-center lg:text-left">
						<h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-foreground mb-6 leading-tight">
							Quality Healthcare at Your{' '}
							<span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-foreground/0">
								Convenience
							</span>
						</h1>

						<p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-8 sm:mb-10 leading-relaxed">
							Book appointments, consult with experienced doctors,
							manage prescriptions, and access your health
							records—all from the comfort of your home.
						</p>

						<div className="flex flex-col sm:flex-row items-center lg:items-start lg:justify-start justify-center gap-4">
							<Button
								size="lg"
								className="rounded-full w-full sm:w-auto gap-2 shadow-soft"
							>
								<Apple className="w-5 h-5" />
								App Store
							</Button>
							<Button
								size="lg"
								variant="outline"
								className="rounded-full w-full sm:w-auto gap-2 border-2"
							>
								<Download className="w-5 h-5" />
								Download
							</Button>
						</div>
					</div>

					{/* Right Column - Illustration */}
					<div className="relative animate-fade-in">
						<div className="relative rounded-3xl overflow-hidden shadow-soft hover:shadow-card transition-smooth">
							<Image
								src="/hero-consultation.png"
								width={600}
								height={600}
								alt="Doctor consulting with patient via video call"
								className="w-full h-auto"
							/>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Hero;
