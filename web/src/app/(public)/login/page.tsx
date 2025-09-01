import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function LoginPage() {
	return (
		<div className="min-h-screen flex items-center justify-center bg-gray-100">
			<div className="bg-white p-8 rounded-2xl shadow-md w-[1000px] max-w-[1000px]">
				<div className="flex flex-col items-center">
					<h3 className="text-2xl font-bold">Welcome Back</h3>
					<h3 className="mt-1 mb-7 text-gray-700 font-medium text-sm">Sign in to continue to RemedyMate</h3>
				</div>
				<form className="space-y-4">
					<div>
						<label htmlFor="email" className="block text-sm font-medium text-gray-700">
							Email
						</label>
						<Input
							type="email"
							id="email"
							name="email"
							className="mt-1 block w-full h-13"
							placeholder="Enter your email"
							required
						/>
					</div>
					<div>
						<label htmlFor="password" className="block text-sm font-medium text-gray-700">
							Password
						</label>
						<Input
							type="password"
							id="password"
							name="password"
							className="mt-1 block w-full h-13"
							placeholder="Enter your password"
							required
						/>
					</div>

					<div className="flex items-center justify-between mb-6">
						<label className="flex items-center space-x-2">
							<input type="checkbox" className="h-4 w-4 text-blue-600 rounded border-gray-300" />
							<span className="text-gray-700">Remember me</span>
						</label>
						<a href="#" className="text-[#0D2A4B] hover:underline text-sm">
							Forgot password?
						</a>
					</div>

					<Button type="submit" className="w-full bg-[#103158] text-white hover:bg-[#0D2A4B]">
						{/* {isPending ? "Signing In..." : "Sign In"} */}
					</Button>
				</form>
			</div>
		</div>
	);
}
