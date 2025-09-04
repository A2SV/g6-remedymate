import { AuthProvider } from "@/providers/AuthProvider";
import { ThemeProvider } from "@/providers/ThemeProvider";
import "@/styles/globals.css";
import type { Metadata } from "next";
import { Inter, Noto_Sans_Ethiopic, Poppins } from "next/font/google";

const inter = Inter({
	display: "swap",
	subsets: ["latin"],
	variable: "--font-inter",
});

const ethiopic = Noto_Sans_Ethiopic({
	display: "swap",
	subsets: ["ethiopic"],
	variable: "--font-ethiopic",
});

const poppins = Poppins({
	display: "swap",
	subsets: ["latin"],
	weight: ["100", "200", "300", "500", "600", "800"],
	variable: "--font-poppins",
});
export const metadata: Metadata = {
	title: "RemedyMate",
	description: "A simple health companion",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" suppressHydrationWarning>
			<body className={`${inter.variable} ${poppins.variable} ${ethiopic.variable}`}>
				<AuthProvider>
					<ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
						{children}
					</ThemeProvider>
				</AuthProvider>
			</body>
		</html>
	);
}
