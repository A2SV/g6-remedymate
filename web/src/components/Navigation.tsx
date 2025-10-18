import { Button } from "@/components/ui/button";
import { Activity } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";

const Navigation = () => {
	return (
		<nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
			<div className="container mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex items-center justify-between h-16 sm:h-20">
					<div className="flex items-center gap-2">
						<Activity className="w-6 h-6 sm:w-7 sm:h-7 text-primary" />
						<span className="text-xl sm:text-2xl font-bold text-foreground">Healo</span>
					</div>

					<div className="hidden md:flex items-center gap-8">
						<a
							href="#home"
							className="text-sm font-medium text-foreground hover:text-primary transition-smooth"
						>
							Home
						</a>
						<a
							href="#about"
							className="text-sm font-medium text-foreground hover:text-primary transition-smooth"
						>
							About
						</a>
						<a
							href="#features"
							className="text-sm font-medium text-foreground hover:text-primary transition-smooth"
						>
							Features
						</a>
						<a
							href="#contact"
							className="text-sm font-medium text-foreground hover:text-primary transition-smooth"
						>
							Contact
						</a>
					</div>
					<div className="flex items-center gap-4">
						<Button size="default" className="rounded-full">
							Subscribe
						</Button>
						<ThemeToggle />
					</div>
				</div>
			</div>
		</nav>
	);
};

export default Navigation;
