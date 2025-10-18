import CtaSection from "@/components/CtaSection";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Navigation from "@/components/Navigation";
import SeamlessSection from "@/components/SeamlessSection";
import Testimonials from "@/components/Testimonials";
import TrustSection from "@/components/TrustSection";

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
