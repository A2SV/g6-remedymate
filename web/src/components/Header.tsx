"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLink = [
	{ name: "Home", path: "/#hero" },
	{ name: "About", path: "/#about" },
	{ name: "Features", path: "/#features" },
	{ name: "Testimonials", path: "/#testimonials" },
	{ name: "Login", path: "/login" },
];

const Header = () => {
	const pathname = usePathname();
	console.log(pathname);
	return (
		<div className="bg-primary sticky top-0 z-50">
			<div className="container mx-auto flex flex-col md:flex-row items-center justify-between p-5 text-white">
				<div className="flex gap-2">
					{" "}
					<Link href="/">
						<p className=" bg-[hsl(212,70%,24%)] p-2 font-bold text-2xl rounded-2xl">RM</p>{" "}
					</Link>
					<h1 className="text-3xl font-bold mb-4 md:mb-0">RemedyMate</h1>
				</div>
				<nav className="flex flex-col md:flex-row gap-4 md:gap-6 text-center">
					{NavLink.map(({ name, path }) => (
						<Link
							className={pathname.startsWith(path) ? `border-b-2 border-white` : ""}
							key={name}
							href={path}
						>
							{name}
						</Link>
					))}
				</nav>
			</div>
		</div>
	);
};

export default Header;
