import { Button } from '@/components/ui/button';
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
	title: '404 - Forbidden',
	description: 'Access denied',
};

function ForbiddenPage() {
	return (
		<div className="min-h-screen flex items-center justify-center bg-background">
			<div className="text-center space-y-6 px-4">
				<div className="space-y-2">
					<h1 className="text-6xl font-bold text-destructive">403</h1>
					<h2 className="text-2xl font-semibold text-foreground">
						Forbidden
					</h2>
				</div>

				<p className="text-muted-foreground max-w-md mx-auto leading-relaxed">
					You do not have permission to access this page. If you
					believe this is an error, please contact the site
					administrator or try logging in with a different account.
				</p>

				<div className="pt-4">
					<Button asChild className="text-white cursor-pointer">
						<Link href="/">Go Back Home</Link>
					</Button>
				</div>
			</div>
		</div>
	);
}
export default ForbiddenPage;
