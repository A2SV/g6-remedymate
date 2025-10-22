'use client';
import { Activity, Menu } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button } from '../ui/button';
import {
	Sheet,
	SheetContent,
	SheetFooter,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from '../ui/sheet';

const Navigation = () => {
	const navigations = [
		{ active: true, href: '/#home', val: 'Home' },
		{ active: true, href: '/#features', val: 'Features' },
		{ active: true, href: '/#howitworks', val: 'How it Works' },
		{ active: true, href: '/#testimonials', val: 'Testimonials' },
	];
	const pathname = usePathname();
	console.log(pathname);

	return (
		<nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
			<div className="container mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex items-center justify-between h-16 sm:h-20">
					<div className="flex items-center gap-2">
						<div className="md:hidden">
							<Sheet>
								<SheetTrigger className="flex flex-col items-center">
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
										{navigations.map((nav, i) => (
											<Link
												key={i}
												href={nav.href}
												className="text-sm cursor-pointer font-medium text-foreground hover:text-primary transition-smooth"
											>
												{nav.val}
											</Link>
										))}
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
						{navigations.map((nav, i) => (
							<Link
								key={i}
								href={nav.href}
								className="text-sm cursor-pointer font-medium text-foreground hover:text-primary transition-smooth"
							>
								{nav.val}
							</Link>
						))}
					</div>
					<div className="flex items-center gap-4">
						<Link href={'/login'} className="">
							<Button className="rounded-full cursor-pointer">
								Signin
							</Button>
						</Link>
					</div>
				</div>
			</div>
		</nav>
	);
};

export default Navigation;
