"use client";

import { useForm, SubmitHandler } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState, useTransition } from "react";
import { addRedflagAction, type RedflagInputData } from "@/actions/redflags";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";

// Define the input schema for client-side validation
const RedflagInputSchema = z.object({
  description: z.string().min(3, "Description must be at least 3 characters"),
  language: z.string().min(2, "Language must be at least 2 characters"),
  level: z.enum(["RED", "YELLOW", "GREEN"]),
  keywords: z.string().min(1, "Keywords are required"),
});

type FormError = Record<string, string[]>;

export default function RedflagAddForm() {
  const [isPending, startTransition] = useTransition();
  const [serverError, setServerError] = useState<string | null>(null);
  const [serverSuccess, setServerSuccess] = useState<string | null>(null);
  const [serverErrors, setServerErrors] = useState<FormError>({});

  const form = useForm<RedflagInputData>({
    resolver: zodResolver(RedflagInputSchema),
    defaultValues: {
      description: "",
      language: "en",
      level: "RED",
      keywords: "",
    },
  });

  // Reset server messages when form changes
  const handleFormChange = () => {
    if (serverError || serverSuccess) {
      setServerError(null);
      setServerSuccess(null);
      setServerErrors({});
    }
  };

  const onSubmit: SubmitHandler<RedflagInputData> = (data) => {
    startTransition(async () => {
      try {
        setServerError(null);
        setServerSuccess(null);
        setServerErrors({});
        
        // Create FormData for server action
        const formData = new FormData();
        formData.append('description', data.description);
        formData.append('language', data.language);
        formData.append('level', data.level);
        formData.append('keywords', data.keywords);

        // Call server action
        const result = await addRedflagAction(undefined, formData);
        
        if (result?.success) {
          setServerSuccess(result.message);
          form.reset();
          // Optionally close dialog after success
          // You can add dialog state management here
        } else {
          setServerError(result?.error || 'Failed to add redflag');
          if (result?.errors) {
            setServerErrors(result.errors);
          }
        }
      } catch (error) {
        console.error("Submission error:", error);
        setServerError("An unexpected error occurred");
      }
    });
  };

  const handleReset = () => {
    form.reset();
    setServerError(null);
    setServerSuccess(null);
    setServerErrors({});
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="text-white">+ Add new phrase</Button>
      </DialogTrigger>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle>Add New Redflag</DialogTitle>
        </DialogHeader>

        <form
          onSubmit={form.handleSubmit(onSubmit)}
          onChange={handleFormChange}
          className="flex flex-col gap-4"
        >
          {/* Description Field */}
          <Card>
            <CardContent className="p-4 pt-0">
              <div className="space-y-2">
                <Label htmlFor="description">Description</Label>
                <Input 
                  id="description"
                  placeholder="Enter redflag description" 
                  {...form.register("description")}
                  className={serverErrors.description ? "border-red-500" : ""}
                />
                {form.formState.errors.description && (
                  <p className="text-red-500 text-sm">
                    {form.formState.errors.description.message}
                  </p>
                )}
                {serverErrors.description && (
                  <p className="text-red-500 text-sm">
                    {serverErrors.description[0]}
                  </p>
                )}
              </div>
            </CardContent>
          </Card>

          {/* Language Field */}
          <Card>
            <CardContent className="p-4 pt-0">
              <div className="space-y-2">
                <Label htmlFor="language">Language</Label>
                <Input 
                  id="language"
                  placeholder="Language (e.g. en)" 
                  {...form.register("language")}
                  className={serverErrors.language ? "border-red-500" : ""}
                />
                {form.formState.errors.language && (
                  <p className="text-red-500 text-sm">
                    {form.formState.errors.language.message}
                  </p>
                )}
                {serverErrors.language && (
                  <p className="text-red-500 text-sm">
                    {serverErrors.language[0]}
                  </p>
                )}
              </div>
            </CardContent>
          </Card>

          {/* Level Field */}
          <Card>
            <CardContent className="p-4 pt-0">
              <div className="space-y-2">
                <Label htmlFor="level">Level</Label>
                <select 
                  id="level"
                  {...form.register("level")}
                  className={`w-full border rounded p-2 ${
                    serverErrors.level ? "border-red-500" : "border-gray-300"
                  }`}
                >
                  <option value="RED">🔴 RED</option>
                  <option value="YELLOW">🟡 YELLOW</option>
                  <option value="GREEN">🟢 GREEN</option>
                </select>
                {form.formState.errors.level && (
                  <p className="text-red-500 text-sm">
                    {form.formState.errors.level.message}
                  </p>
                )}
                {serverErrors.level && (
                  <p className="text-red-500 text-sm">
                    {serverErrors.level[0]}
                  </p>
                )}
              </div>
            </CardContent>
          </Card>

          {/* Keywords Field */}
          <Card>
            <CardContent className="p-4 pt-0">
              <div className="space-y-2">
                <Label htmlFor="keywords">Keywords</Label>
                <Input
                  id="keywords"
                  placeholder="Keywords (comma separated, e.g. spam,scam,urgent)"
                  {...form.register("keywords")}
                  className={serverErrors.keywords ? "border-red-500" : ""}
                />
                <p className="text-sm text-gray-500">
                  Separate multiple keywords with commas
                </p>
                {form.formState.errors.keywords && (
                  <p className="text-red-500 text-sm">
                    {form.formState.errors.keywords.message}
                  </p>
                )}
                {serverErrors.keywords && (
                  <p className="text-red-500 text-sm">
                    {serverErrors.keywords[0]}
                  </p>
                )}
              </div>
            </CardContent>
          </Card>

          {/* Server Messages */}
          {serverSuccess && (
            <Card>
              <CardContent className="p-4">
                <div className="bg-green-50 border border-green-200 text-green-600 px-4 py-3 rounded-md text-sm">
                  <div className="flex items-center">
                    <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    {serverSuccess}
                  </div>
                </div>
              </CardContent>
            </Card>
          )}

          {serverError && !serverSuccess && (
            <Card>
              <CardContent className="p-4">
                <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-md text-sm">
                  <div className="flex items-center">
                    <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                    </svg>
                    {serverError}
                  </div>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Action Buttons */}
          <div className="flex gap-2 pt-4">
            <Button 
              type="submit" 
              disabled={isPending}
              className="flex-1 text-white"
            >
              {isPending ? (
                <span className="flex items-center">
                  <svg className="animate-spin -ml-1 mr-3 h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Saving...
                </span >
              ) : (
                "Save Redflag"
              )}
            </Button>
            
            <Button
              type="button"
              variant="outline"
              onClick={handleReset}
              disabled={isPending}
              className="px-4"
            >
              Reset
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}