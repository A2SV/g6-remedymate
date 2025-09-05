"use client";
import { useState } from "react";
import Modal from "../Modal";
import { Button } from "../ui/button";
import PasswordChange from "./password";

const Account = () => {
	const [showModal, setShowModal] = useState(false);

	return (
		<div className="rounded-lg p-4 bg-white text-black mb-5">
			<h1 className="mb-3 font-bold text-[17px]">
				{" "}
				<strong> Account security </strong>{" "}
			</h1>

			<div className="flex flex-col sm:flex-row justify-between mb-3 gap-2 sm:gap-0">
				<div>
					<h1 className="font-bold"> Password </h1>
					<p className="text-gray-400 text-sm">Last changes 90 days ago</p>
				</div>
				<Button className="text-white cursor-pointer" onClick={() => setShowModal(true)}>
					Change
				</Button>
			</div>
			{showModal && (
				<Modal onOpenChange={() => setShowModal(false)}>
					<PasswordChange />
				</Modal>
			)}
		</div>
	);
};

export default Account;
