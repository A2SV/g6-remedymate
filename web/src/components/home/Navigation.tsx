import { Button } from '@/components/ui/button';
import { Activity, Menu } from 'lucide-react';
import Link from 'next/link';
import { ThemeToggle } from '../ThemeToggle';
import {
	Sheet,
	SheetContent,
	SheetFooter,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from '../ui/sheet';

const Navigation = () => {
	return (
		<nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
			<div className="container mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex items-center justify-between h-16 sm:h-20">
					<div className="flex items-center gap-2">
						<div className="md:hidden">
							<Sheet>
								<SheetTrigger>
									<Menu />
								</SheetTrigger>
								<SheetContent side="left">
									<SheetHeader>
										<SheetTitle>Quick Feedback</SheetTitle>
									</SheetHeader>
									<SheetContent
										side="left"
										className="flex flex-col gap-10 pt-10 pl-10"
									>
										<Link
											href="#home"
											className="text-sm font-medium text-foreground hover:text-primary transition-smooth"
										>
											Home
										</Link>
										<Link
											href="#features"
											className="text-sm font-medium text-foreground hover:text-primary transition-smooth"
										>
											Features
										</Link>
										<Link
											href="#howitworks"
											className="text-sm font-medium text-foreground hover:text-primary transition-smooth"
										>
											How it works
										</Link>
										<Link
											href="#testimonials"
											className="text-sm font-medium text-foreground hover:text-primary transition-smooth"
										>
											Testimonials
										</Link>
									</SheetContent>
									<SheetFooter></SheetFooter>
								</SheetContent>
							</Sheet>
						</div>
						<Activity className="w-6 h-6 sm:w-7 sm:h-7 text-primary" />
						<span className="text-xl sm:text-2xl font-bold text-foreground">
							Wegesha
						</span>
					</div>

					<div className="hidden md:flex items-center gap-8">
						<a
							href="#home"
							className="text-sm font-medium text-foreground hover:text-primary transition-smooth"
						>
							Home
						</a>
						<a
							href="#features"
							className="text-sm font-medium text-foreground hover:text-primary transition-smooth"
						>
							Features
						</a>
						<a
							href="#howitworks"
							className="text-sm font-medium text-foreground hover:text-primary transition-smooth"
						>
							How it works
						</a>
						<a
							href="#testimonials"
							className="text-sm font-medium text-foreground hover:text-primary transition-smooth"
						>
							Testimonials
						</a>
					</div>
					<div className="flex items-center gap-4">
						<ThemeToggle />
						<Button size="default" className="rounded-full">
							Signin
						</Button>
					</div>
				</div>
			</div>
		</nav>
	);
};

export default Navigation;
