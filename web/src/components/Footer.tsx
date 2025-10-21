import { Button } from '@/components/ui/button';
import { Activity } from 'lucide-react';

const Footer = () => {
	return (
		<footer className="bg-background text-foreground py-12 sm:py-16">
			<div className="container mx-auto px-4 sm:px-6 lg:px-8">
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
					{/* Brand */}
					<div>
						<div className="flex items-center gap-2 mb-4">
							<Activity className="w-7 h-7 text-primary" />
							<span className="text-2xl font-bold">Wegesha</span>
						</div>
						<p className="text-muted-foreground text-sm leading-relaxed mb-4">
							Making quality healthcare accessible to everyone,
							everywhere. Your health companion for a better
							tomorrow.
						</p>
					</div>

					{/* Quick Links */}
					<div>
						<h3 className="font-bold text-lg mb-4">Quick Links</h3>
						<ul className="space-y-2 text-sm">
							<li>
								<a
									href="#home"
									className="text-muted-foreground hover:text-primary transition-smooth"
								>
									Home
								</a>
							</li>
							<li>
								<a
									href="#about"
									className="text-muted-foreground hover:text-primary transition-smooth"
								>
									About
								</a>
							</li>
							<li>
								<a
									href="#features"
									className="text-muted-foreground hover:text-primary transition-smooth"
								>
									Features
								</a>
							</li>
							<li>
								<a
									href="#contact"
									className="text-muted-foreground hover:text-primary transition-smooth"
								>
									Contact
								</a>
							</li>
						</ul>
					</div>

					{/* Follow Us */}
					<div>
						<h3 className="font-bold text-lg mb-4">Follow Us</h3>
						<ul className="space-y-2 text-sm">
							<li>
								<a
									href="#"
									className="text-muted-foreground hover:text-primary transition-smooth"
								>
									LinkedIn
								</a>
							</li>
							<li>
								<a
									href="#"
									className="text-muted-foreground hover:text-primary transition-smooth"
								>
									Twitter
								</a>
							</li>
							<li>
								<a
									href="#"
									className="text-muted-foreground hover:text-primary transition-smooth"
								>
									Instagram
								</a>
							</li>
							<li>
								<a
									href="#"
									className="text-muted-foreground hover:text-primary transition-smooth"
								>
									Facebook
								</a>
							</li>
						</ul>
					</div>

					{/* Newsletter */}
					<div>
						<h3 className="font-bold text-lg mb-4">
							Subscribe Our Newsletter
						</h3>
						<p className="text-muted-foreground text-sm mb-4">
							Get the latest health tips and updates delivered to
							your inbox.
						</p>
						<Button className="w-full rounded-full cursor-pointer">
							Subscribe
						</Button>
					</div>
				</div>

				<div className="border-t border-border pt-8">
					<div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
						<p>© 2025 Healo. All Rights Reserved.</p>
						<div className="flex gap-6">
							<a
								href="#"
								className="hover:text-primary transition-smooth"
							>
								Privacy Policy
							</a>
							<a
								href="#"
								className="hover:text-primary transition-smooth"
							>
								Terms of Service
							</a>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
