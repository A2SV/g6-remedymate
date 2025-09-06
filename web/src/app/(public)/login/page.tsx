import LoginForm from "@/components/auth/LoginForm";

export default async function LoginPage({ searchParams }: { searchParams: Promise<{ error: string }> }) {
	const { error } = await searchParams;
	return (
		<div className="">
			<LoginForm error={error} />
		</div>
	);
}
