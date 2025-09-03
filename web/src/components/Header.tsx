"use client";
import { Menu } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ThemeToggle } from "./ThemeToggle";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "./ui/sheet";

const NavLink = [
	{ name: "Home", path: "/#hero" },
	{ name: "Try it", path: "/chat" },
	{ name: "About", path: "/#about" },
	{ name: "Features", path: "/#features" },
	{ name: "Testimonials", path: "/#testimonials" },
	{ name: "Login", path: "/login" },
];

const Header = () => {
	const pathname = usePathname();
	return (
		<div className="bg-primary sticky top-0 z-50">
			<div className="container mx-auto flex items-center justify-between p-5 text-white">
				<div className="flex items-center gap-2">
					{" "}
					<Link href="/">
						<p className=" bg-[hsl(212,70%,24%)] p-2 font-bold text-2xl rounded-2xl">RM</p>{" "}
					</Link>
					<h1 className="text-3xl font-bold md:mb-0">RemedyMate</h1>
				</div>
				<nav className="hidden md:flex gap-4 md:gap-6 text-center">
					{NavLink.map(({ name, path }) => (
						<Link
							className={pathname.startsWith(path) ? `border-b-2 border-white` : ""}
							key={name}
							href={path}
						>
							{name}
						</Link>
					))}
					<ThemeToggle />
				</nav>
				<div className="bg-primary flex md:hidden">
					<Sheet>
						<SheetTrigger>
							<Menu className="cursor-pointer" />
						</SheetTrigger>
						<SheetContent className="bg-primary">
							<SheetHeader>
								<SheetTitle className="text-white">Menu</SheetTitle>
								<SheetDescription className="flex flex-col gap-4 text-white">
									{NavLink.map(({ name, path }) => (
										<Link
											className={pathname.startsWith(path) ? `border-b-2 border-white` : ""}
											key={name}
											href={path}
										>
											{name}
										</Link>
									))}
									<ThemeToggle />
								</SheetDescription>
							</SheetHeader>
						</SheetContent>
					</Sheet>
				</div>
			</div>
		</div>
	);
};

export default Header;
