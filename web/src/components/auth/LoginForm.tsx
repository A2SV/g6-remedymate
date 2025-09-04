"use client";
import { UserLogin, UserLoginSchema } from "@/lib/zod/authSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Eye, EyeOff } from "lucide-react";
import { signIn } from "next-auth/react";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import LoadingSpinner from "../ui/LoadingSpinner";

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
			toast.error("Invalid Credentials, try again");
		}
	}, [error]);

	async function onSubmit(data: UserLogin) {
		setIsLoading(true);
		console.log(data);
		try {
			await signIn("credentials", { ...data, redirectTo: "/" });
		} catch (error) {
			console.log(error);
			toast.error("Login failed, try again");
		}
		setIsLoading(false);
	}
	return (
		<div className="md:min-h-screen flex relative items-center justify-center">
			<div className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-md w-full h-full md:w-9/10 max-w-[1000px] mx-auto">
				<div className="flex flex-col items-center">
					<h3 className="text-2xl font-bold">Welcome Back</h3>
					<h3 className="mt-1 mb-7 font-medium text-sm">Sign in to continue to RemedyMate</h3>
				</div>
				<form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
					<div>
						<label htmlFor="email" className="block text-sm font-medium">
							Email
						</label>
						<Input
							id="email"
							className="mt-1 block w-full h-13"
							placeholder="Enter your email"
							{...register("email")}
						/>
						{errors.email && <p className="text-red-600 text-sm">{errors.email.message}</p>}
					</div>
					<div className="">
						<label htmlFor="password" className="block text-sm font-medium">
							Password
						</label>
						<div className="relative">
							<Input
								type={showPassword ? "text" : "password"}
								id="password"
								className="mt-1 block w-full h-13 relative"
								placeholder="Enter your password"
								{...register("password")}
							/>
							<Button
								type="button"
								variant="ghost"
								size="sm"
								className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
								onClick={() => setShowPassword(!showPassword)}
							>
								{showPassword ? (
									<EyeOff className="h-4 w-4 text-muted-foreground" />
								) : (
									<Eye className="h-4 w-4 text-muted-foreground" />
								)}
							</Button>
						</div>
						{errors.password && <p className="text-red-600 text-sm">{errors.password.message}</p>}
					</div>

					<div className="flex items-center justify-between mb-6">
						<label className="flex items-center space-x-2">
							<input type="checkbox" className="h-4 w-4 text-blue-600 rounded border-gray-300" />
							<span className="">Remember me</span>
						</label>
						<a href="#" className=" hover:underline text-sm">
							Forgot password?
						</a>
					</div>

					<Button type="submit" className="w-full text-white">
						Sign In
					</Button>
				</form>
			</div>
			{isLoading && <LoadingSpinner />}
		</div>
	);
}
export default LoginForm;
