'use client';
import { UserLogin, UserLoginSchema } from '@/lib/zod/authSchema';
import { zodResolver } from '@hookform/resolvers/zod';
import { Eye, EyeOff } from 'lucide-react';
import { signIn } from 'next-auth/react';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import { Button } from '../ui/button';
import { Card } from '../ui/card';
import { Input } from '../ui/input';
import LoadingSpinner from '../ui/LoadingSpinner';

interface Props {
	error: string;
}

function LoginForm({ error }: Props) {
	const [isLoading, setIsLoading] = useState(false);
	const [showPassword, setShowPassword] = useState(false);
	const {
		handleSubmit,
		register,
		formState: { errors },
	} = useForm<UserLogin>({ resolver: zodResolver(UserLoginSchema) });

	useEffect(() => {
		if (error) {
			toast.error('Invalid Credentials, try again');
		}
	}, [error]);

	async function onSubmit(data: UserLogin) {
		setIsLoading(true);
		console.log(data);
		try {
			await signIn('credentials', { ...data, redirectTo: '/' });
		} catch (error) {
			console.log(error);
			toast.error('Login failed, try again');
		}
		setIsLoading(false);
	}
	return (
		<div className="min-h-screen flex items-center justify-center pt-25">
			<Card className="px-8 py-12 rounded-2xl shadow-md w-full md:w-9/10 max-w-[500px] mx-auto">
				<div className="flex flex-col items-center gap-2">
					<h1 className="text-3xl font-extrabold">Welcome Back</h1>
					<h3 className="font-medium text-sm">
						Sign in to continue to Wegesha
					</h3>
				</div>
				<form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
					<div>
						<label
							htmlFor="email"
							className="block text-sm font-medium"
						>
							Email
						</label>
						<Input
							id="email"
							className="mt-1 block w-full h-13"
							placeholder="Enter your email"
							{...register('email')}
						/>
						{errors.email && (
							<p className="text-destructive text-sm">
								{errors.email.message}
							</p>
						)}
					</div>
					<div className="">
						<label
							htmlFor="password"
							className="block text-sm font-medium"
						>
							Password
						</label>
						<div className="relative">
							<Input
								type={showPassword ? 'text' : 'password'}
								id="password"
								className="mt-1 block w-full h-13 relative"
								placeholder="Enter your password"
								{...register('password')}
							/>
							<Button
								type="button"
								variant="ghost"
								size="sm"
								className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent cursor-pointer"
								onClick={() => setShowPassword(!showPassword)}
							>
								{showPassword ? (
									<EyeOff className="h-4 w-4 text-muted-foreground" />
								) : (
									<Eye className="h-4 w-4 text-muted-foreground" />
								)}
							</Button>
						</div>
						{errors.password && (
							<p className="text-destructive text-sm">
								{errors.password.message}
							</p>
						)}
					</div>

					<div className="flex items-center justify-between mb-6">
						<label className="flex items-center space-x-2">
							<input type="checkbox" />
							<span className="">Remember me</span>
						</label>
						<a href="#" className=" hover:underline text-sm">
							Forgot password?
						</a>
					</div>

					<Button type="submit" className="w-full cursor-pointer">
						Sign In
					</Button>
					<p className="text-center">Or</p>
					<div className="flex flex-col gap-4">
						<Link href={'/register'}>
							<Button
								type="button"
								className="w-full hover:text-primary-foreground bg-secondary text-secondary-foreground cursor-pointer"
							>
								Create new account
							</Button>
						</Link>
						<Button
							type="button"
							className="w-full hover:text-primary-foreground bg-secondary text-secondary-foreground cursor-pointer"
						>
							<div className="flex items-center gap-2">
								<Image
									className=""
									alt="google icon"
									width={20}
									height={20}
									src={
										'https://cdn.jsdelivr.net/gh/homarr-labs/dashboard-icons/svg/google.svg'
									}
								/>
								<p>Google</p>
							</div>
						</Button>
					</div>
				</form>
			</Card>
			{isLoading && <LoadingSpinner />}
		</div>
	);
}
export default LoginForm;
