'use client';

import {
	PersonalInfoFormData,
	personalInfoSchema,
} from '@/lib/zod/personalInfoSchema';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
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
	onNext: (data: PersonalInfoFormData) => void;
	onBack: () => void;
};

export default function PersonalInfo({ onNext, onBack }: Props) {
	const {
		register,
		handleSubmit,
		control,
		formState: { errors },
	} = useForm<PersonalInfoFormData>({
		resolver: zodResolver(personalInfoSchema),
	});

	const onSubmit = (data: PersonalInfoFormData) => {
		onNext(data);
	};

	return (
		<div className="relative w-full h-full flex flex-col items-center justify-center text-center space-y-6 px-8 py-12 ">
			<div className="self-start flex items-center w-full">
				<Button
					onClick={onBack}
					className="cursor-pointer
					rounded-full w-10 h-10 font-bold shadow absolute left-0 top-0"
				>
					{'<'}
				</Button>
				<h1 className="text-3xl w-full font-semibold text-center">
					About You
				</h1>
			</div>

			<h3 className="text-lg text-center font-medium text-muted-foreground">
				This helps us personalize your care plan.
			</h3>

			<form
				onSubmit={handleSubmit(onSubmit)}
				className="w-full space-y-4"
			>
				<div className="w-full">
					<Label
						htmlFor="fullName"
						className="flex items-center space-x-2"
					>
						Full Name
					</Label>
					<Input
						className="mt-1 block w-full h-13"
						type="text"
						id="fullName"
						placeholder="Jane Doe"
						{...register('fullName')}
					/>
					{errors.fullName && (
						<p className="text-destructive text-left">
							{errors.fullName.message}
						</p>
					)}
				</div>

				<div className="w-full">
					<Label
						htmlFor="age"
						className="flex items-center space-x-2"
					>
						Age
					</Label>
					<Input
						className="mt-1 block w-full h-13"
						type="number"
						id="age"
						placeholder="30"
						{...register('age', { valueAsNumber: true })}
					/>
					{errors.age && (
						<p className="text-destructive text-left">
							{errors.age.message}
						</p>
					)}
				</div>

				<div className="w-full">
					<Label
						htmlFor="gender"
						className="flex items-center space-x-2"
					>
						Gender
					</Label>

					<Select {...register('gender')}>
						<SelectTrigger className="w-[180px]">
							<SelectValue placeholder="Select gender" />
						</SelectTrigger>
						<SelectContent>
							<SelectGroup>
								<SelectItem value="male">Male</SelectItem>
								<SelectItem value="female">Female</SelectItem>
							</SelectGroup>
						</SelectContent>
					</Select>

					{errors.gender && (
						<p className="text-destructive text-left">
							{errors.gender.message}
						</p>
					)}
				</div>

				<div className="w-full">
					<Label
						htmlFor="weight"
						className="flex items-center space-x-2"
					>
						Weight (kg)
					</Label>
					<Input
						className="mt-1 block w-full h-13"
						type="text"
						id="weight"
						placeholder="70"
						{...register('weight', { valueAsNumber: true })}
					/>
					{errors.weight && (
						<p className="text-destructive text-left">
							{errors.weight.message}
						</p>
					)}
				</div>

				<div className="w-full">
					<Label
						htmlFor="height"
						className="flex items-center space-x-2"
					>
						Height (cm)
					</Label>
					<Input
						className="mt-1 block w-full h-13"
						type="text"
						id="height"
						placeholder="175"
						{...register('height', { valueAsNumber: true })}
					/>
					{errors.height && (
						<p className="text-destructive text-left">
							{errors.height.message}
						</p>
					)}
				</div>

				<div className="flex flex-col gap-3 w-full mt-4">
					<Button
						type="submit"
						className="w-full py-3 shadow-md cursor-pointer"
					>
						Next
					</Button>
					<Button
						type="button"
						onClick={() => onNext({} as PersonalInfoFormData)} // skip with empty data
						className="w-full hover:text-primary-foreground bg-secondary text-secondary-foreground cursor-pointer"
					>
						Skip for now
					</Button>
				</div>
			</form>
		</div>
	);
}
