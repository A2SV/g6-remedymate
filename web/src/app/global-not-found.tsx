import { Button } from '@/components/ui/button';
import '@/styles/globals.css';
import type { Metadata } from 'next';
import { Inter, Poppins } from 'next/font/google';
import Link from 'next/link';

const inter = Inter({
	display: 'swap',
	subsets: ['latin'],
	variable: '--font-inter',
});

const poppins = Poppins({
	display: 'swap',
	subsets: ['latin'],
	weight: ['600', '800'],
	variable: '--font-poppins',
});

export const metadata: Metadata = {
	title: '404 - Page Not Found',
	description: 'The page you are looking for does not exist.',
};

export default function GlobalNotFound() {
	return (
		<html lang="en" className={`${inter.variable} ${poppins.variable}`}>
			<body>
				<div className="min-h-screen flex items-center justify-center bg-background">
					<div className="text-center space-y-6 px-4">
						<div className="space-y-2">
							<h1 className="text-6xl font-bold text-destructive">
								404
							</h1>
							<h2 className="text-2xl font-semibold text-foreground">
								Page Not Found
							</h2>
						</div>

						<p className="text-muted-foreground max-w-md mx-auto leading-relaxed">
							Sorry, we couldn&apos;t find the page you&apos;re
							looking for. The page might have been moved,
							deleted, or you entered the wrong URL.
						</p>

						<div className="pt-4">
							<Button
								asChild
								className="text-white cursor-pointer"
							>
								<Link href="/">Go Back Home</Link>
							</Button>
						</div>
					</div>
				</div>
			</body>
		</html>
	);
}
