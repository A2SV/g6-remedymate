import { z } from 'zod';

const isoDate = z
	.string()
	.regex(/^\d{4}-\d{2}-\d{2}$/, 'Invalid date format, expected YYYY-MM-DD');

const existingConditionSchema = z.object({
	condition: z.string().min(1),
	diagnosed_date: isoDate,
});

const pastSurgerySchema = z.object({
	surgery: z.string().min(1),
	date: isoDate,
});

const currentMedicationSchema = z.object({
	name: z.string().min(1),
	dosage: z.string().min(1),
	frequency: z.string().min(1),
});

const allergySchema = z.object({
	allergen: z.string().min(1),
	reaction: z.string().min(1),
	severity: z.enum(['Mild', 'Moderate', 'Severe']),
});

const familyHistorySchema = z.object({
	relation: z.string().min(1),
	condition: z.string().min(1),
});

export const medicalHistorySchema = z.object({
	existing_conditions: z.array(existingConditionSchema),
	past_surgeries: z.array(pastSurgerySchema),
	current_medications: z.array(currentMedicationSchema),
	allergies: z.array(allergySchema),
	family_history: z.array(familyHistorySchema),
});

export type MedicalHistoryFormData = z.infer<typeof medicalHistorySchema>;
