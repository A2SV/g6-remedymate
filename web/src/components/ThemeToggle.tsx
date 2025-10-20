'use client';

import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';

import { Button } from '@/components/ui/button';
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { ThemeSwitcher } from './kibo-ui/theme-switcher';

export function ThemeToggle() {
	const { theme, setTheme } = useTheme();

	const isAllowedTheme = (
		t: string | undefined
	): t is 'light' | 'dark' | 'system' =>
		t === 'light' || t === 'dark' || t === 'system';

	const typedTheme = isAllowedTheme(theme) ? theme : undefined;

	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Button
					size="icon"
					className="bg-white dark:bg-background rounded-full shadow-md hover:shadow-lg transition-smooth"
				>
					<Sun className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90 text-orange-400" />
					<Moon className="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0 text-white" />
					<span className="sr-only">Toggle theme</span>
				</Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent align="center" className="p-0 rounded-full">
				<ThemeSwitcher
					defaultValue="system"
					onChange={(t) => setTheme(t)}
					value={typedTheme}
					className="flex justify-between"
				/>
			</DropdownMenuContent>
		</DropdownMenu>
	);
}
