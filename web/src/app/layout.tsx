import { ThemeToggle } from '@/components/ThemeToggle';
import { Toaster } from '@/components/ui/sonner';
import { ThemeProvider } from '@/providers/ThemeProvider';
import '@/styles/globals.css';
import type { Metadata } from 'next';
import { Inter, Noto_Sans_Ethiopic, Poppins } from 'next/font/google';
import { unstable_ViewTransition as ViewTransition } from 'react';

const inter = Inter({
	display: 'swap',
	subsets: ['latin'],
	variable: '--font-inter',
});

const ethiopic = Noto_Sans_Ethiopic({
	display: 'swap',
	subsets: ['ethiopic'],
	variable: '--font-ethiopic',
});

const poppins = Poppins({
	display: 'swap',
	subsets: ['latin'],
	weight: ['100', '200', '300', '500', '600', '800'],
	variable: '--font-poppins',
});
export const metadata: Metadata = {
	title: 'RemedyMate',
	description: 'A simple health companion',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" suppressHydrationWarning>
			<body
				className={`${inter.variable} ${poppins.variable} ${ethiopic.variable}`}
			>
				<ViewTransition name="page">
					<ThemeProvider
						attribute="class"
						defaultTheme="system"
						enableSystem
						disableTransitionOnChange
					>
						<Toaster richColors position="top-right" />
						{children}
						<div className="fixed right-0 top-25 z-100 bg-primary rounded-l-full">
							<ThemeToggle />
						</div>
					</ThemeProvider>
				</ViewTransition>
			</body>
		</html>
	);
}
