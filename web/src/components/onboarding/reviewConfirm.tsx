"use client";

import React from "react";
import { Button } from "../ui/button";

type Props = {
  onBack: () => void;
};

export default function Review({ onBack }: Props) {
  return (
    <div className="w-full h-full flex flex-col text-black items-center justify-center px-6 py-10">
      <div className="w-full max-w-[500px] bg-white/90 backdrop-blur-md shadow-lg rounded-2xl p-6 flex flex-col space-y-6">
        <div className="flex justify-between items-center">
          <Button
            onClick={onBack}
            className="bg-gray-200 hover:bg-gray-300 text-gray-700 rounded-full px-3 py-1 shadow"
          >
            {"<"}
          </Button>
          <h1 className="text-2xl font-semibold text-gray-800 text-center flex-1">
            Review & Confirm
          </h1>
        </div>

        <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-5">
          <div className="flex justify-between items-center mb-2">
            <h2 className="text-lg font-medium text-gray-800">Personal Info</h2>
            <Button
              variant="outline"
              className="text-sm px-3 py-1 rounded-lg hover:bg-blue-50"
            >
              Edit
            </Button>
          </div>
          <div className="text-sm text-gray-600 space-y-1">
            <p>Name: Jane Doe</p>
            <p>Age: 30</p>
            <p>Sex: Female</p>
            <p>Weight: 70 kg</p>
            <p>Height: 175 cm</p>
          </div>
        </div>

        <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-5">
          <div className="flex justify-between items-center mb-2">
            <h2 className="text-lg font-medium text-gray-800">Medical History</h2>
            <Button
              variant="outline"
              className="text-sm px-3 py-1 rounded-lg hover:bg-blue-50"
            >
              Edit
            </Button>
          </div>
          <div className="text-sm text-gray-600 space-y-1">
            <p>Conditions: Diabetes</p>
            <p>Allergies: Penicillin</p>
            <p>Medications: None</p>
          </div>
        </div>

        <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-5">
          <div className="flex justify-between items-center mb-2">
            <h2 className="text-lg font-medium text-gray-800">Lifestyle & Habits</h2>
            <Button
              variant="outline"
              className="text-sm px-3 py-1 rounded-lg hover:bg-blue-50"
            >
              Edit
            </Button>
          </div>
          <div className="text-sm text-gray-600 space-y-1">
            <p>Exercise: 3 days/week</p>
            <p>Sleep: 8 hours/night</p>
            <p>Diet: Balanced</p>
            <p>Alcohol: Yes</p>
            <p>Smoking: No</p>
          </div>
        </div>

        <p className="text-sm text-center text-gray-500">
          Your data is private and secure.
        </p>

        <Button className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-full text-lg font-medium transition-all">
          Finish Setup
        </Button>
      </div>
    </div>
  );
}
