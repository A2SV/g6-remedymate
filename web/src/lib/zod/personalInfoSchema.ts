import * as z from 'zod';

const phoneE164 = z.string().regex(/^\+[1-9]\d{7,14}$/, 'Invalid phone number');

export const personalInfoSchema = z.object({
	full_name: z.string().min(2, 'Full name is required'),
	date_of_birth: z
		.string()
		.regex(/^\d{4}-\d{2}-\d{2}$/, 'Date must be in YYYY-MM-DD format'),
	gender: z.enum(['Male', 'Female'], {
		message: 'Please select your gender',
	}),
	age: z
		.number()
		.min(18, 'Age must be greater than 17')
		.max(100, 'Age must be lower than 100'),
	height: z
		.number()
		.min(50, 'Height must be greater than 50cm')
		.max(250, 'Height must be less than 250cm'),
	weight: z
		.number()
		.min(40, 'Weight must be greater than 40kg')
		.max(200, 'Weight must be lower than 200kg'),
	blood_type: z.enum(['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-']),
	contact: z.object({
		phone: phoneE164,
		email: z.string().email('Invalid email address'),
	}),
	location: z.object({
		country: z.string().regex(/^[A-Z]{2}$/, 'Use 2-letter country code'),
		region: z.string().min(1, 'Region is required'),
		city: z.string().min(1, 'City is required'),
	}),
	primary_language: z
		.string()
		.regex(/^[a-z]{2}$/, 'Use 2-letter language code'),
	emergency_contact: z.object({
		name: z.string().min(2, 'Name is required'),
		relation: z.string().min(1, 'Relation is required'),
		phone: phoneE164,
	}),
});

export type PersonalInfoFormData = z.infer<typeof personalInfoSchema>;
