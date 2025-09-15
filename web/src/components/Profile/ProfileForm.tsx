"use client";

import { editUserProfile } from "@/actions/profile";
import { Button } from "@/components/ui/button";
import { Profile } from "@/lib/zod/profileSchema";
import Image from "next/image";
import { useState } from "react";
import { toast } from "sonner";
import LoadingSpinner from "../ui/LoadingSpinner";

export type FormData = {
	firstName: string;
	lastName: string;
	username: string;
	email: string;
	age: number;
	gender: string;
	profilePictureUrl: string;
};

interface ProfileFormProps {
	profile: Profile;
}

const ProfileForm = ({ profile }: ProfileFormProps) => {
	const [formData, setFormData] = useState<FormData>({
		firstName: profile.personalInfo.firstName,
		lastName: profile.personalInfo.lastName,
		username: profile.username,
		email: profile.email,
		age: profile.personalInfo.age,
		gender: profile.personalInfo.gender,
		profilePictureUrl: profile.personalInfo.profilePictureUrl || "",
	});
	const [isLoading, setIsLoading] = useState(false);
	const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
		setFormData((prev) => ({
			...prev,
			[e.target.id]: e.target.type === "number" ? Number(e.target.value) : e.target.value,
		}));
	};

	const handleSave = async () => {
		setIsLoading(true);
		try {
			await editUserProfile({
				username: formData.username,
				personalInfo: {
					firstName: formData.firstName,
					lastName: formData.lastName,
					age: formData.age,
					gender: formData.gender,
					profilePictureUrl: formData.profilePictureUrl,
				},
			});
			toast.success("Profile update successfully");
		} catch (error) {
			console.log(error);
			toast.error("Profile update failed, try again");
		}
		setIsLoading(false);
	};

	const handleDiscard = () => {
		setFormData({
			firstName: profile.personalInfo.firstName,
			lastName: profile.personalInfo.lastName,
			username: profile.username,
			email: profile.email,
			age: profile.personalInfo.age,
			gender: profile.personalInfo.gender,
			profilePictureUrl: profile.personalInfo.profilePictureUrl || "",
		});
	};

	return (
		<div className="relative col-span-2 bg-white p-5 rounded-[30px] shadow">
			<div className="flex flex-col sm:flex-row gap-3 sm:gap-5 items-center mb-5">
				<Image
					src={formData.profilePictureUrl || "/Profile4.png"}
					alt="profile"
					width={50}
					height={50}
					className="rounded-full object-cover"
				/>
				<div>
					<h2 className="text-lg font-semibold flex flex-wrap gap-3 text-black">
						{formData.firstName} {formData.lastName}
					</h2>
					<p className="text-sm text-gray-400">Manage your personal info and security</p>
				</div>
			</div>

			<hr className="my-4 bg-gray-200" />

			<form className="flex flex-col gap-5">
				<div className="flex flex-col sm:flex-row gap-5">
					<div className="flex flex-col flex-1">
						<label htmlFor="firstName" className="text-gray-600 text-sm mb-1">
							First Name
						</label>
						<input
							id="firstName"
							type="text"
							value={formData.firstName}
							onChange={handleChange}
							placeholder="Enter first name"
							className="rounded-lg p-2 h-10 bg-white/60 border border-gray-100 text-black placeholder-gray-700"
						/>
					</div>
					<div className="flex flex-col flex-1">
						<label htmlFor="lastName" className="text-gray-600 text-sm mb-1">
							Last Name
						</label>
						<input
							id="lastName"
							type="text"
							value={formData.lastName}
							onChange={handleChange}
							placeholder="Enter last name"
							className="rounded-lg p-2 h-10 bg-white/60 border border-gray-300 text-black placeholder-gray-900"
						/>
					</div>
				</div>

				<div className="flex flex-col">
					<label htmlFor="username" className="text-gray-600 text-sm mb-1">
						Username
					</label>
					<input
						id="username"
						type="text"
						value={formData.username}
						onChange={handleChange}
						placeholder="Enter username"
						className="rounded-lg p-2 h-10 bg-white/60 border border-gray-300 text-black placeholder-gray-900"
					/>
				</div>

				<div className="flex flex-col">
					<label htmlFor="email" className="text-gray-600 text-sm mb-1">
						Email
					</label>
					<input
						id="email"
						type="email"
						value={formData.email}
						readOnly
						className="rounded-lg p-2 h-10 bg-gray-100 border border-gray-300 text-black"
					/>
					<p className="text-xs text-gray-500">Email cannot be changed</p>
				</div>

				<div className="flex flex-col sm:flex-row gap-5">
					<div className="flex flex-col flex-1">
						<label htmlFor="age" className="text-gray-600 text-sm mb-1">
							Age
						</label>
						<input
							id="age"
							type="number"
							value={formData.age}
							onChange={handleChange}
							placeholder="Enter age"
							className="rounded-lg p-2 h-10 bg-white/60 border border-gray-300 text-black placeholder-gray-900"
						/>
					</div>
					<div className="flex flex-col flex-1">
						<label htmlFor="gender" className="text-gray-600 text-sm mb-1">
							Gender
						</label>
						<select
							id="gender"
							value={formData.gender}
							onChange={handleChange}
							className="rounded-lg p-2 h-10 bg-white/60 border border-gray-300 text-black"
						>
							<option value="">Select gender</option>
							<option value="male">Male</option>
							<option value="female">Female</option>
						</select>
					</div>
				</div>
			</form>

			<div className="flex gap-3 mt-6">
				<Button variant="destructive" onClick={handleDiscard}>
					Discard
				</Button>
				<Button onClick={handleSave} className="text-white">
					Save Profile
				</Button>
			</div>
			{isLoading && <LoadingSpinner />}
		</div>
	);
};

export default ProfileForm;
