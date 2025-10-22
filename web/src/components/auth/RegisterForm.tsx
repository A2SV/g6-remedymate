'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Label } from '../ui/label';

import { RegisterFormData, registerSchema } from '@/lib/zod/registerSchema';
import Image from 'next/image';
import Link from 'next/link';
import { Card } from '../ui/card';

function RegisterForm() {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<RegisterFormData>({
		resolver: zodResolver(registerSchema),
	});

	const onSubmit = (data: RegisterFormData) => {
		console.log('Form Data:', data);
		// API call can go here
	};

	return (
		<div className="min-h-screen flex items-center justify-center pt-25">
			<Card className="px-8 py-12 rounded-2xl shadow-md w-full md:w-9/10 max-w-[500px]">
				<div className="flex flex-col items-center gap-2">
					<h1 className="text-3xl font-extrabold">
						Create an Account
					</h1>
					<h3 className="font-medium text-sm">
						Create a new application account
					</h3>
				</div>

				<form
					onSubmit={handleSubmit(onSubmit)}
					className="space-y-4 mt-4"
				>
					<div>
						<Label
							className="block text-sm font-medium"
							htmlFor="name"
						>
							Full Name
						</Label>
						<Input
							className="mt-1 block w-full h-13"
							type="text"
							placeholder="john doe"
							{...register('name')}
						/>
						{errors.name && (
							<p className="text-red-500">
								{errors.name.message}
							</p>
						)}
					</div>

					<div>
						<Label
							className="block text-sm font-medium"
							htmlFor="email"
						>
							Email
						</Label>
						<Input
							className="mt-1 block w-full h-13"
							type="email"
							placeholder="user@gmail.com"
							{...register('email')}
						/>
						{errors.email && (
							<p className="text-red-500">
								{errors.email.message}
							</p>
						)}
					</div>

					<div>
						<Label
							className="block text-sm font-medium"
							htmlFor="password"
						>
							Password
						</Label>
						<Input
							className="mt-1 block w-full h-13"
							type="password"
							placeholder="password"
							{...register('password')}
						/>
						{errors.password && (
							<p className="text-red-500">
								{errors.password.message}
							</p>
						)}
					</div>

					<div>
						<Label
							className="block text-sm font-medium"
							htmlFor="confirmPassword"
						>
							Confirm Password
						</Label>
						<Input
							className="mt-1 block w-full h-13"
							type="password"
							placeholder="confirm password"
							{...register('confirmPassword')}
						/>
						{errors.confirmPassword && (
							<p className="text-red-500">
								{errors.confirmPassword.message}
							</p>
						)}
					</div>

					<Button type="submit" className="w-full cursor-pointer">
						Sign up
					</Button>
					<p className="text-center">Or</p>
					<div className="flex flex-col gap-4">
						<Link href={'/login'}>
							<Button
								type="button"
								className="w-full hover:text-primary-foreground bg-secondary text-secondary-foreground cursor-pointer"
							>
								Sign in
							</Button>
						</Link>
						<Button
							type="button"
							className="w-full bg-secondary text-secondary-foreground hover:text-primary-foreground cursor-pointer"
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
		</div>
	);
}

export default RegisterForm;
