import CtaSection from '@/components/home/CtaSection';
import Features from '@/components/home/Features';
import Hero from '@/components/home/Hero';
import Navigation from '@/components/home/Navigation';
import SeamlessSection from '@/components/home/SeamlessSection';
import Testimonials from '@/components/home/Testimonials';
import TrustSection from '@/components/home/TrustSection';

export default async function Home() {
	return (
		<div className="min-h-screen">
			<Navigation />
			<main>
				<Hero />
				<Features />
				<SeamlessSection />
				<TrustSection />
				<Testimonials />
				<CtaSection />
			</main>
		</div>
	);
}
