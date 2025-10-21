'use client';
import { Button } from '@/components/ui/button';
import { Metadata } from 'next';
import { Inter, Poppins } from 'next/font/google';
import Link from 'next/link';

// Error boundaries must be Client Components
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
	title: '500 - Error',
	description: 'Error Occured',
};
export default function GlobalError({
	error,
	reset,
}: {
	error: Error & { digest?: string };
	reset: () => void;
}) {
	console.log(error);
	return (
		// global-error must include html and body tags
		<html>
			<body className={`${inter.variable} ${poppins.variable}`}>
				<div className="min-h-screen flex items-center justify-center bg-background">
					<div className="text-center space-y-6 px-4">
						<div className="space-y-2">
							<h1 className="text-6xl font-bold text-red-500">
								500
							</h1>
							<h2 className="text-2xl font-semibold text-foreground">
								Error Occured
							</h2>
						</div>

						<p className="text-muted-foreground max-w-md mx-auto leading-relaxed">
							Sorry, something went wrong while processing your
							request. Please try again later or contact support
							if the issue persists.
						</p>

						<div className="pt-4">
							<Button
								asChild
								className="text-white cursor-pointer"
							>
								<Link href="/">Go Back Home</Link>
							</Button>
							<Button
								onClick={() => reset()}
								asChild
								variant={'outline'}
								className="text-white"
							>
								Retry
							</Button>
						</div>
					</div>
				</div>
			</body>
		</html>
	);
}
