'use server'

import { revalidatePath } from 'next/cache'
import { z } from 'zod'
import { addRedflag } from '@/data-access/redflags'
import { redirect } from 'next/navigation'
import { deleteRedflag } from '@/data-access/redflags'


// Define the input schema (what the form sends)
const RedflagInputSchema = z.object({
  description: z.string().min(3, "Description must be at least 3 characters"),
  language: z.string().min(2, "Language must be at least 2 characters"),
  level: z.enum(["RED", "YELLOW", "GREEN"]),
  keywords: z.string().min(1, "Keywords are required"),
});

// Transform input to final data type
const RedflagOutputSchema = RedflagInputSchema.extend({
  keywords: z.string().transform((val) => {
    const keywords = val
      .split(",")
      .map((k) => k.trim())
      .filter(Boolean);
    
    if (keywords.length === 0) {
      throw new z.ZodError([
        z.ZodIssue.create({
          code: z.ZodIssueCode.custom,
          path: ['keywords'],
          message: "At least one keyword is required"
        })
      ]);
    }
    
    return keywords;
  }),
});

// Infer types
export type RedflagInputData = z.input<typeof RedflagInputSchema>;
export type RedflagFormData = z.output<typeof RedflagOutputSchema>;

// Server action that handles the entire form submission
export async function addRedflagAction(
  prevState: { 
    message?: string; 
    error?: string; 
    errors?: Record<string, string[]> 
  } | undefined,
  formData: FormData
) {
  try {
    // Extract form data
    const rawData = {
      description: formData.get('description') as string,
      language: formData.get('language') as string,
      level: formData.get('level') as "RED" | "YELLOW" | "GREEN",
      keywords: formData.get('keywords') as string,
    };

    // Validate and transform the data
    const validatedData = RedflagOutputSchema.parse(rawData);

    // Call the actual addRedflag function
    await addRedflag(validatedData);

    // Revalidate the path to refresh the table
    revalidatePath('/admin/redflags');

    // Return success
    return { 
      message: 'Redflag added successfully!',
      success: true 
    };
    
  } catch (error) {
    if (error instanceof z.ZodError) {
      // Return validation errors
      return {
        message: 'Validation failed',
        error: 'Please check your input and try again.',
        errors: error.errors.reduce((acc: Record<string, string[]>, issue) => {
          const path = issue.path.join('.');
          if (!acc[path]) acc[path] = [];
          acc[path].push(issue.message);
          return acc;
        }, {}),
        success: false
      };
    }
    
    console.error('Failed to add redflag:', error);
    return {
      message: 'Failed to add redflag',
      error: 'Something went wrong. Please try again.',
      success: false
    };
  }
}


// Schema for delete action validation
const DeleteRedflagSchema = z.object({
  id: z.string().min(1, "Invalid redflag ID"),
});

// Server action for deleting a redflag
export async function deleteRedflagAction(
  prevState: { message?: string; error?: string } | undefined,
  formData: FormData
) {
  try {
    // Validate the ID
    const validatedData = DeleteRedflagSchema.parse({
      id: formData.get('id') as string,
    });

    // Call the actual delete function
    await deleteRedflag(validatedData.id);

    // Revalidate the path to refresh the table
    revalidatePath('/admin/redflags/');

    return { 
      message: 'Redflag deleted successfully!',
      success: true 
    };
    
  } catch (error) {
    if (error instanceof z.ZodError) {
      return {
        message: 'Validation failed',
        error: 'Invalid redflag ID.',
        success: false
      };
    }
    
    console.error('Failed to delete redflag:', error);
    return {
      message: 'Failed to delete redflag',
      error: 'Something went wrong. Please try again.',
      success: false
    };
  }
}