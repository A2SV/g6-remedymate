"use client";
import { registerUser } from "@/actions/manager";
import { UserRegister, UserRegisterSchema } from "@/lib/zod/authSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import LoadingSpinner from "../ui/LoadingSpinner";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
export default function Footer() {
	const {
		handleSubmit,
		formState: { errors },
		reset,
		register,
	} = useForm({ resolver: zodResolver(UserRegisterSchema) });
	const [isLoading, setIsLoading] = useState(false);

	async function onSubmit(data: UserRegister) {
		setIsLoading(true);
		try {
			const response = await registerUser(data, window.location.origin);
			toast.success("registration successfull");
			console.log(response);
		} catch (error) {
			console.log(error);
			toast.error("registration failed, try again");
		}
		setIsLoading(false);
	}

	return (
		<form onSubmit={handleSubmit(onSubmit)} className="bg-white rounded-md p-4 relative h-fit">
			<h3 className="text-bold text-lg">Quick Add User</h3>
			<div className="flex flex-col gap-2 py-3 ">
				<div className="">
					<Input
						{...register("personalInfo.firstName")}
						type="text"
						placeholder="First Name"
						className="flex border rounded h-12 shadow-sm text-bold"
					/>
					{errors.personalInfo?.firstName && (
						<p className="text-red-600 text-sm">{errors.personalInfo?.firstName.message}</p>
					)}
				</div>
				<div className="">
					<Input
						{...register("personalInfo.lastName")}
						type="text"
						placeholder="Last Name"
						className="flex border rounded h-12 shadow-sm text-bold"
					/>
					{errors.personalInfo?.lastName && (
						<p className="text-red-600 text-sm">{errors.personalInfo?.lastName.message}</p>
					)}
				</div>
				<div className="">
					<Input
						{...register("personalInfo.age")}
						type="number"
						min={1}
						placeholder="age"
						className="flex border rounded h-12 shadow-sm text-bold"
					/>
					{errors.personalInfo?.age && (
						<p className="text-red-600 text-sm">{errors.personalInfo?.age.message}</p>
					)}
				</div>
				<div className="">
					<Input
						{...register("email")}
						type="text"
						placeholder="Email"
						className="flex border rounded h-12 shadow-sm text-bold"
					/>
					{errors.email && <p className="text-red-600 text-sm">{errors.email.message}</p>}
				</div>
				<div className="">
					<Input
						{...register("role")}
						type="text"
						placeholder="Role"
						className="flex border rounded h-12 shadow-sm text-bold"
					/>
					{errors.role && <p className="text-red-600 text-sm">{errors.role.message}</p>}
				</div>
				<div className="">
					<RadioGroup {...register("personalInfo.gender")} defaultValue="male" className="flex gap-2">
						<Label>Gender</Label>
						<div className="flex items-center space-x-2">
							<RadioGroupItem value="male" id="male" />
							<Label htmlFor="male">Male</Label>
						</div>
						<div className="flex items-center space-x-2">
							<RadioGroupItem value="female" id="female" />
							<Label htmlFor="female">Female</Label>
						</div>
					</RadioGroup>
					{errors.personalInfo?.gender && (
						<p className="text-red-600 text-sm">{errors.personalInfo?.gender.message}</p>
					)}
				</div>
			</div>
			<div className="bg-white flex items-center justify-between pt-3">
				<div className="flex gap-5">
					<Button onClick={() => reset()} type="button" className=" text-white  bg-primary h-10 w-20 rounded">
						Clear
					</Button>
					<Button type="submit" className=" text-white  bg-primary h-10 w-20 rounded">
						Add User
					</Button>
				</div>
			</div>
			{isLoading && <LoadingSpinner />}
		</form>
	);
}
