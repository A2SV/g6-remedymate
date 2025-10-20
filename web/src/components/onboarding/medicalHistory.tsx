"use client";

import React, { useState } from "react";
import { Button } from "../ui/button";
import { Label } from "../ui/label";

type Props = {
  onNext: (data: {
    conditions: string[];
    allergies: string[];
    medications: string[];
    none: boolean;
  }) => void;
  onBack: () => void;
};

export default function MedicalHistory({ onNext, onBack }: Props) {
  const [conditions, setConditions] = useState<string[]>([]);
  const [allergies, setAllergies] = useState<string[]>([]);
  const [medications, setMedications] = useState<string[]>([]);
  const [none, setNone] = useState(false);

  const handleToggle = (item: string, list: string[], setList: (arr: string[]) => void) => {
    if (list.includes(item)) {
      setList(list.filter((i) => i !== item));
    } else {
      setList([...list, item]);
    }
  };

  const handleNext = () => {
    if (none || conditions.length > 0 || allergies.length > 0 || medications.length > 0) {
      onNext({ conditions, allergies, medications, none });
    }
  };

  return (
    <div className="w-full h-full flex flex-col text-black items-center justify-center text-center space-y-6 px-6">
      <div className="self-start flex gap-40 items-center w-full max-w-[600px]">
        <Button
          onClick={onBack}
          className="bg-gray-200 hover:bg-gray-300 text-gray-700 rounded-full px-3 py-1 shadow"
        >
          {"<"} 
        </Button>
        <h1 className="text-3xl font-semibold text-gray-800 ml-3">Medical History</h1>
      </div>

      <p className="text-lg text-gray-500 max-w-[500px] text-center">
        This information is vital for accurate AI-powered suggestions.
      </p>

      <div className="w-full max-w-[500px] flex flex-col gap-5 text-left">
        <div>
          <Label className="block mb-2 font-medium text-gray-700">Chronic Conditions</Label>
          <div className="flex flex-wrap gap-2">
            {["Hypertension", "Diabetes", "Asthma"].map((cond) => (
              <button
                key={cond}
                type="button"
                onClick={() => handleToggle(cond, conditions, setConditions)}
                className={`px-4 py-2 border rounded-full transition ${
                  conditions.includes(cond) ? "bg-blue-100 border-blue-500" : "bg-white border-gray-300"
                }`}
                disabled={none}
              >
                {cond}
              </button>
            ))}
            <button className="px-4 py-2 border border-dashed rounded-full text-gray-500 hover:bg-gray-50" disabled={none}>
              Add +
            </button>
          </div>
        </div>

        <div>
          <Label className="block mb-2 font-medium text-gray-700">Allergies</Label>
          <div className="flex flex-wrap gap-2">
            {["Penicillin", "Pollen"].map((allergy) => (
              <button
                key={allergy}
                type="button"
                onClick={() => handleToggle(allergy, allergies, setAllergies)}
                className={`px-4 py-2 border rounded-full transition ${
                  allergies.includes(allergy) ? "bg-blue-100 border-blue-500" : "bg-white border-gray-300"
                }`}
                disabled={none}
              >
                {allergy}
              </button>
            ))}
            <button className="px-4 py-2 border border-dashed rounded-full text-gray-500 hover:bg-gray-50" disabled={none}>
              Add +
            </button>
          </div>
        </div>

        <div>
          <Label className="block mb-2 font-medium text-gray-700">Current Medications</Label>
          <div className="flex flex-wrap gap-2">
            {["Metformin"].map((med) => (
              <button
                key={med}
                type="button"
                onClick={() => handleToggle(med, medications, setMedications)}
                className={`px-4 py-2 border rounded-full transition ${
                  medications.includes(med) ? "bg-blue-100 border-blue-500" : "bg-white border-gray-300"
                }`}
                disabled={none}
              >
                {med}
              </button>
            ))}
            <button className="px-4 py-2 border border-dashed rounded-full text-gray-500 hover:bg-gray-50" disabled={none}>
              Add +
            </button>
          </div>
        </div>

        <Label className="flex items-center gap-2 text-gray-700 cursor-pointer text-sm mt-3">
          <input
            type="checkbox"
            checked={none}
            onChange={() => setNone((prev) => !prev)}
            className="w-6 h-6 appearance-none border border-gray-400 rounded bg-white cursor-pointer 
            checked:bg-white checked:border-black checked:before:content-['✔'] checked:before:text-black 
            checked:before:flex checked:before:items-center checked:before:justify-center"
          />
          I have no chronic conditions, known allergies, or current medications.
        </Label>

        {/* Buttons */}
        <div className="flex flex-col items-center gap-3 mt-4">
          <Button
            onClick={handleNext}
            className={`bg-blue-500 text-white w-full py-3 rounded-full shadow-md text-lg transition-all ${
              !none && conditions.length === 0 && allergies.length === 0 && medications.length === 0
                ? "opacity-50 cursor-not-allowed"
                : "hover:bg-blue-600"
            }`}
            disabled={!none && conditions.length === 0 && allergies.length === 0 && medications.length === 0}
          >
            Next
          </Button>

          <Button
            onClick={() => onNext({ conditions, allergies, medications, none })}
            variant="ghost"
            className="text-blue-500 hover:underline hover:bg-transparent w-full"
          >
            Skip for Now
          </Button>
        </div>
      </div>
    </div>
  );
}
