"use client";

import { changeUserPassword } from "@/actions/auth";
import type { ChangePasswordResponse } from "@/data-access/auth";
import { changePasswordSchema } from "@/lib/zod/passwordSchema";
import { useState } from "react";
import { Button } from "../ui/button";
import LoadingSpinner from "../ui/LoadingSpinner";

const PasswordChange = () => {
	const [oldPassword, setOldPassword] = useState("");
	const [newPassword, setNewPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");
	const [errors, setErrors] = useState<{
		oldPassword?: string;
		newPassword?: string;
		confirmPassword?: string;
	}>({});
	const [loading, setLoading] = useState(false);
	const [message, setMessage] = useState<string | null>(null);

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		setMessage(null);

		const validation = changePasswordSchema.safeParse({
			oldPassword,
			newPassword,
			confirmPassword,
		});

		if (!validation.success) {
			const fieldErrors: Record<string, string> = {};
			const flat = validation.error.flatten().fieldErrors;

			(Object.keys(flat) as (keyof typeof flat)[]).forEach((key) => {
				if (flat[key]?.[0]) fieldErrors[key] = flat[key]![0];
			});

			setErrors(fieldErrors);
			return;
		}

		setErrors({});
		setLoading(true);

		try {
			const res: ChangePasswordResponse = await changeUserPassword(oldPassword, newPassword);

			setMessage(res.message || "Password changed successfully!");
			setOldPassword("");
			setNewPassword("");
			setConfirmPassword("");
		} catch (err) {
			setMessage(String(err) || "Unexpected error occurred");
		} finally {
			setLoading(false);
		}
	};

	return (
		<form onSubmit={handleSubmit} className="relative flex flex-col gap-4 w-full max-w-md">
			<div className="flex flex-col">
				<label className="text-sm font-bold mb-1 text-black">Current Password</label>
				<input
					type="password"
					value={oldPassword}
					onChange={(e) => setOldPassword(e.target.value)}
					placeholder="Enter current password"
					className="w-full h-10 p-2 rounded-lg border text-black"
					required
				/>
				{errors.oldPassword && <span className="text-red-500 text-xs">{errors.oldPassword}</span>}
			</div>

			<div className="flex flex-col">
				<label className="text-sm font-bold mb-1 text-black">New Password</label>
				<input
					type="password"
					value={newPassword}
					onChange={(e) => setNewPassword(e.target.value)}
					placeholder="Enter new password"
					className="w-full h-10 p-2 rounded-lg border text-black"
					required
				/>
				{errors.newPassword && <span className="text-red-500 text-xs">{errors.newPassword}</span>}
			</div>

			<div className="flex flex-col">
				<label className="text-sm font-bold mb-1 text-black">Confirm New Password</label>
				<input
					type="password"
					value={confirmPassword}
					onChange={(e) => setConfirmPassword(e.target.value)}
					placeholder="Re-enter new password"
					className="w-full h-10 p-2 rounded-lg border text-black"
					required
				/>
				{errors.confirmPassword && <span className="text-red-500 text-xs">{errors.confirmPassword}</span>}
			</div>

			{message && (
				<p
					className={`text-sm ${
						message.toLowerCase().includes("success") ? "text-green-600" : "text-red-600"
					}`}
				>
					{message}
				</p>
			)}

			<Button
				type="submit"
				disabled={loading}
				className="bg-[#F59E0B] hover:bg-[#D97706] text-white font-semibold px-4 py-2 rounded-lg"
			>
				{loading ? "Changing..." : "Change Password"}
			</Button>
			{loading && <LoadingSpinner />}
		</form>
	);
};

export default PasswordChange;
