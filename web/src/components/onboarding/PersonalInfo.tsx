'use client';

import {
	PersonalInfoFormData,
	personalInfoSchema,
} from '@/lib/zod/personalInfoSchema';
import { zodResolver } from '@hookform/resolvers/zod';
import { Dispatch, SetStateAction } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from '../ui/select';

type Props = {
	onNext: () => void;
	onBack: () => void;
	data: PersonalInfoFormData | undefined;
	updateData: Dispatch<SetStateAction<PersonalInfoFormData | undefined>>;
};

export default function PersonalInfo({
	onNext,
	onBack,
	data,
	updateData,
}: Props) {
	const {
		register,
		handleSubmit,
		control,
		formState: { errors },
	} = useForm<PersonalInfoFormData>({
		resolver: zodResolver(personalInfoSchema),
		defaultValues: data,
	});

	const onSubmit = (data: PersonalInfoFormData) => {
		console.log(data);
		if (data) {
			updateData((prev) => ({
				...prev,
				...data,
			}));
		}
		onNext();
	};

	return (
		<div className="relative w-full h-full flex flex-col items-center justify-center text-center space-y-6">
			<div className="self-start flex items-center w-full">
				<Button
					onClick={onBack}
					className="cursor-pointer rounded-full w-10 h-10 font-bold shadow absolute left-0 top-0"
				>
					{'<'}
				</Button>
				<h1 className="text-2xl md:text-3xl w-full font-semibold text-center">
					About You
				</h1>
			</div>

			<h3 className="text-lg text-center font-medium text-muted-foreground">
				This helps us personalize your care plan.
			</h3>

			<form
				onSubmit={handleSubmit(onSubmit)}
				className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full"
			>
				{/* LEFT COLUMN: Identity, Contact, Language */}
				<div className="space-y-4">
					{/* Full Name */}
					<div className="w-full flex flex-col gap-2">
						<Label
							htmlFor="full_name"
							className="flex items-center space-x-2"
						>
							Full Name
						</Label>
						<Input
							className="block w-full h-13"
							type="text"
							id="full_name"
							placeholder="Jane Doe"
							{...register('full_name')}
						/>
						{errors.full_name && (
							<p className="text-sm text-destructive text-left">
								{errors.full_name.message}
							</p>
						)}
					</div>

					{/* Date of Birth */}
					<div className="w-full flex flex-col gap-2">
						<Label
							htmlFor="date_of_birth"
							className="flex items-center space-x-2"
						>
							Date of Birth
						</Label>
						<Input
							className="block w-full h-13"
							type="date"
							id="date_of_birth"
							{...register('date_of_birth')}
						/>
						{errors.date_of_birth && (
							<p className="text-sm text-destructive text-left">
								{errors.date_of_birth.message}
							</p>
						)}
					</div>
					<div className="w-full flex flex-col gap-2">
						<Label
							htmlFor="age_value"
							className="flex items-center space-x-2"
						>
							Age
						</Label>
						<Input
							className="block w-full h-13"
							type="number"
							min={18}
							id="age_value"
							placeholder="165"
							{...register('age', {
								valueAsNumber: true,
							})}
						/>
						{errors.age && (
							<p className="text-sm text-destructive text-left">
								{errors.age.message}
							</p>
						)}
					</div>
					{/* Gender */}
					<div className="w-full flex flex-col gap-2">
						<Label
							htmlFor="gender"
							className="flex items-center space-x-2"
						>
							Gender
						</Label>
						<Controller
							control={control}
							name="gender"
							render={({ field }) => (
								<Select
									onValueChange={field.onChange}
									value={field.value}
								>
									<SelectTrigger
										className="w-full"
										id="gender"
									>
										<SelectValue placeholder="Select gender" />
									</SelectTrigger>
									<SelectContent>
										<SelectGroup>
											<SelectItem value="Male">
												Male
											</SelectItem>
											<SelectItem value="Female">
												Female
											</SelectItem>
										</SelectGroup>
									</SelectContent>
								</Select>
							)}
						/>
						{errors.gender && (
							<p className="text-sm text-destructive text-left">
								{errors.gender.message}
							</p>
						)}
					</div>

					{/* Contact */}
					<div className="w-full">
						<div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-2">
							<div className="flex flex-col gap-2">
								<Label htmlFor="contact_phone">Phone</Label>
								<Input
									className="block w-full h-13"
									type="tel"
									id="contact_phone"
									placeholder="+251911123456"
									{...register('contact.phone')}
								/>
								{errors.contact?.phone && (
									<p className="text-sm text-destructive text-left">
										{errors.contact.phone.message}
									</p>
								)}
							</div>
							<div className="flex flex-col gap-2">
								<Label htmlFor="contact_email">Email</Label>
								<Input
									className="block w-full h-13"
									type="email"
									id="contact_email"
									placeholder="jane.doe@example.com"
									{...register('contact.email')}
								/>
								{errors.contact?.email && (
									<p className="text-sm text-destructive text-left">
										{errors.contact.email.message}
									</p>
								)}
							</div>
						</div>
					</div>

					{/* Primary Language */}
					<div className="w-full flex flex-col gap-2">
						<Label
							htmlFor="primary_language"
							className="flex items-center space-x-2"
						>
							Language
						</Label>
						<Controller
							control={control}
							name="primary_language"
							render={({ field }) => (
								<Select
									onValueChange={field.onChange}
									value={field.value}
								>
									<SelectTrigger
										className="w-full"
										id="primary_language"
									>
										<SelectValue placeholder="Select language" />
									</SelectTrigger>
									<SelectContent>
										<SelectGroup>
											<SelectItem value="am">
												Amharic (am)
											</SelectItem>
											<SelectItem value="en">
												English (en)
											</SelectItem>
											<SelectItem value="om">
												Afaan Oromo (om)
											</SelectItem>
										</SelectGroup>
									</SelectContent>
								</Select>
							)}
						/>
						{errors.primary_language && (
							<p className="text-sm text-destructive text-left">
								{errors.primary_language.message}
							</p>
						)}
					</div>
				</div>

				{/* RIGHT COLUMN: Location, Physical, Emergency */}
				<div className="space-y-4">
					{/* Location */}
					<div className="w-full">
						<div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-2">
							<div className="flex flex-col gap-2">
								<Label htmlFor="location_country">
									Country
								</Label>
								<Controller
									control={control}
									name="location.country"
									render={({ field }) => (
										<Select
											onValueChange={field.onChange}
											value={field.value}
										>
											<SelectTrigger
												className="w-full"
												id="location_country"
											>
												<SelectValue placeholder="Select country" />
											</SelectTrigger>
											<SelectContent>
												<SelectGroup>
													<SelectItem value="ET">
														Ethiopia
													</SelectItem>
												</SelectGroup>
											</SelectContent>
										</Select>
									)}
								/>
								{errors.location?.country && (
									<p className="text-sm text-destructive text-left">
										{errors.location.country.message}
									</p>
								)}
							</div>
							<div className="flex flex-col gap-2">
								<Label htmlFor="location_region">Region</Label>
								<Controller
									control={control}
									name="location.region"
									render={({ field }) => (
										<Select
											onValueChange={field.onChange}
											value={field.value}
										>
											<SelectTrigger
												className="w-full"
												id="location_region"
											>
												<SelectValue placeholder="Select region" />
											</SelectTrigger>
											<SelectContent>
												<SelectGroup>
													<SelectItem value="Amhara">
														Amhara
													</SelectItem>
													<SelectItem value="Oromia">
														Oromia
													</SelectItem>
													<SelectItem value="Tigray">
														Tigray
													</SelectItem>
													<SelectItem value="Afar">
														Afar
													</SelectItem>
													<SelectItem value="Somali">
														Somali
													</SelectItem>
													<SelectItem value="SNNPR">
														SNNPR
													</SelectItem>
													<SelectItem value="Benishangul-Gumuz">
														Benishangul-Gumuz
													</SelectItem>
													<SelectItem value="Gambela">
														Gambela
													</SelectItem>
													<SelectItem value="Dire Dawa">
														Dire Dawa
													</SelectItem>
													<SelectItem value="Addis Ababa">
														Addis Ababa
													</SelectItem>
												</SelectGroup>
											</SelectContent>
										</Select>
									)}
								/>
								{errors.location?.region && (
									<p className="text-sm text-destructive text-left">
										{errors.location.region.message}
									</p>
								)}
							</div>
							<div className="flex flex-col gap-2">
								<Label htmlFor="location_city">City</Label>
								<Controller
									control={control}
									name="location.city"
									render={({ field }) => (
										<Select
											onValueChange={field.onChange}
											value={field.value}
										>
											<SelectTrigger
												className="w-full"
												id="location_city"
											>
												<SelectValue placeholder="Select city" />
											</SelectTrigger>
											<SelectContent>
												<SelectGroup>
													<SelectItem value="Addis Ababa">
														Addis Ababa
													</SelectItem>
													<SelectItem value="Gondar">
														Gondar
													</SelectItem>
													<SelectItem value="Mekelle">
														Mekelle
													</SelectItem>
													<SelectItem value="Bahir Dar">
														Bahir Dar
													</SelectItem>
													<SelectItem value="Dire Dawa">
														Dire Dawa
													</SelectItem>
													<SelectItem value="Hawassa">
														Hawassa
													</SelectItem>
													<SelectItem value="Jimma">
														Jimma
													</SelectItem>
													<SelectItem value="Arba Minch">
														Arba Minch
													</SelectItem>
													<SelectItem value="Jijiga">
														Jijiga
													</SelectItem>
													<SelectItem value="Shashemene">
														Shashemene
													</SelectItem>
												</SelectGroup>
											</SelectContent>
										</Select>
									)}
								/>
								{errors.location?.city && (
									<p className="text-sm text-destructive text-left">
										{errors.location.city.message}
									</p>
								)}
							</div>
						</div>
					</div>

					{/* Physical Stats */}
					<div className="w-full flex flex-col gap-2">
						<div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
							<div className="flex flex-col gap-2">
								<Label
									htmlFor="height_value"
									className="flex items-center space-x-2"
								>
									Height(cm)
								</Label>
								<Input
									className="block w-full h-13"
									type="number"
									min={50}
									id="height_value"
									placeholder="165"
									{...register('height', {
										valueAsNumber: true,
									})}
								/>
								{errors.height && (
									<p className="text-sm text-destructive text-left">
										{errors.height.message}
									</p>
								)}
							</div>
							<div className="flex flex-col gap-2">
								<Label
									htmlFor="weight_value"
									className="flex items-center space-x-2"
								>
									Weight(kg)
								</Label>
								<Input
									className="block w-full h-13"
									type="number"
									min={40}
									id="weight_value"
									placeholder="68"
									{...register('weight', {
										valueAsNumber: true,
									})}
								/>
								{errors.weight && (
									<p className="text-sm text-destructive text-left">
										{errors.weight.message}
									</p>
								)}
							</div>
						</div>

						<div className="flex flex-col gap-2">
							<Label
								htmlFor="blood_type"
								className="flex items-center space-x-2"
							>
								Blood Type
							</Label>
							<Controller
								control={control}
								name="blood_type"
								render={({ field }) => (
									<Select
										onValueChange={field.onChange}
										value={field.value}
									>
										<SelectTrigger
											className="w-full"
											id="blood_type"
										>
											<SelectValue placeholder="Select blood type" />
										</SelectTrigger>
										<SelectContent>
											<SelectGroup>
												<SelectItem value="A+">
													A+
												</SelectItem>
												<SelectItem value="A-">
													A-
												</SelectItem>
												<SelectItem value="B+">
													B+
												</SelectItem>
												<SelectItem value="B-">
													B-
												</SelectItem>
												<SelectItem value="AB+">
													AB+
												</SelectItem>
												<SelectItem value="AB-">
													AB-
												</SelectItem>
												<SelectItem value="O+">
													O+
												</SelectItem>
												<SelectItem value="O-">
													O-
												</SelectItem>
											</SelectGroup>
										</SelectContent>
									</Select>
								)}
							/>
							{errors.blood_type && (
								<p className="text-sm text-destructive text-left">
									{errors.blood_type.message}
								</p>
							)}
						</div>
					</div>

					{/* Emergency Contact */}
					<div className="w-full flex flex-col gap-2">
						<h4 className="text-left font-medium">
							Emergency Contact
						</h4>
						<div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-2">
							<div>
								<Label htmlFor="emergency_name">Name</Label>
								<Input
									className="mt-1 block w-full h-13"
									type="text"
									id="emergency_name"
									placeholder="John Doe"
									{...register('emergency_contact.name')}
								/>
								{errors.emergency_contact?.name && (
									<p className="text-sm text-destructive text-left">
										{errors.emergency_contact.name.message}
									</p>
								)}
							</div>
							<div>
								<Label htmlFor="emergency_relation">
									Relation
								</Label>
								<Input
									className="mt-1 block w-full h-13"
									type="text"
									id="emergency_relation"
									placeholder="Spouse"
									{...register('emergency_contact.relation')}
								/>
								{errors.emergency_contact?.relation && (
									<p className="text-sm text-destructive text-left">
										{
											errors.emergency_contact.relation
												.message
										}
									</p>
								)}
							</div>
							<div>
								<Label htmlFor="emergency_phone">Phone</Label>
								<Input
									className="mt-1 block w-full h-13"
									type="tel"
									id="emergency_phone"
									placeholder="+251911654321"
									{...register('emergency_contact.phone')}
								/>
								{errors.emergency_contact?.phone && (
									<p className="text-sm text-destructive text-left">
										{errors.emergency_contact.phone.message}
									</p>
								)}
							</div>
						</div>
					</div>
				</div>

				{/* Actions */}
				<div className="md:col-span-2 flex flex-col gap-3 w-full mt-2">
					<Button
						type="submit"
						className="w-full py-3 shadow-md cursor-pointer"
					>
						Next
					</Button>
					<Button
						type="button"
						onClick={() => onNext()}
						className="w-full hover:text-primary-foreground bg-secondary text-secondary-foreground cursor-pointer"
					>
						Skip for now
					</Button>
				</div>
			</form>
		</div>
	);
}
