import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default function PublicLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<div className="">
			<Header />
			<main className="relative">{children}</main>
			<Footer />
		</div>
	);
}
