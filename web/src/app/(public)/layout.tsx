import Footer from '@/components/Footer';
import Navigation from '@/components/home/Navigation';

export default function PublicLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<div className="">
			<Navigation />
			<main className="">{children}</main>
			<Footer />
		</div>
	);
}
