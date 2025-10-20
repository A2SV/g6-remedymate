import Footer from "@/components/Footer";

export default function PublicLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<div className="">
			<main className="relative">{children}</main>
			<Footer />
		</div>
	);
}
