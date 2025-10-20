"use client";

import React, { useState } from "react";
import { Button } from "../ui/button";

type Props = {
  onNext: () => void;
  onBack: () => void;
};

export default function LifestyleHabits({ onNext, onBack }: Props) {
  const [exercise, setExercise] = useState(3);
  const [sleep, setSleep] = useState(8);
  const [diet, setDiet] = useState("Balanced");
  const [smoker, setSmoker] = useState(false);
  const [drinker, setDrinker] = useState(true);

  return (
    <div className="w-full h-full flex flex-col text-black items-center justify-center text-center space-y-6 px-6">

      <div className="self-start flex gap-40 items-center w-full max-w-[600px]">
        <Button
          onClick={onBack}
          className="bg-gray-200 hover:bg-gray-300 text-gray-700 rounded-full px-3 py-1 shadow"
        >
          {"<"}
        </Button>
        <h1 className="text-3xl font-semibold text-gray-800 ml-3">
          Lifestyle & Habits
        </h1>
      </div>

      <p className="text-lg text-gray-500 max-w-[500px] text-center">
        This helps us understand your overall wellness.
      </p>

      <div className="w-full max-w-[400px]">
        <label className="block text-gray-700 mb-2">Exercise Frequency</label>
        <input
          type="range"
          min="0"
          max="7"
          value={exercise}
          onChange={(e) => setExercise(Number(e.target.value))}
          className="w-full accent-blue-500"
        />
        <p className="text-center text-sm mt-1 text-gray-600">
          {exercise} days/week
        </p>
      </div>

      <div className="w-full max-w-[400px]">
        <label className="block text-gray-700 mb-2">Sleep Duration</label>
        <input
          type="range"
          min="4"
          max="12"
          value={sleep}
          onChange={(e) => setSleep(Number(e.target.value))}
          className="w-full accent-blue-500"
        />
        <p className="text-center text-sm mt-1 text-gray-600">
          {sleep} hours/night
        </p>
      </div>

      <div className="w-full max-w-[400px]">
        <label className="block text-gray-700 mb-2">Dietary Habits</label>
        <div className="flex gap-2">
          {["Balanced", "Vegetarian", "Keto"].map((d) => (
            <button
              key={d}
              onClick={() => setDiet(d)}
              className={`flex-1 py-2 rounded-full border text-sm transition-all ${
                diet === d
                  ? "bg-blue-500 text-white border-blue-500"
                  : "bg-white border-gray-300 hover:bg-blue-50"
              }`}
            >
              {d}
            </button>
          ))}
        </div>
      </div>

      <div className="w-full max-w-[400px]">
        <label className="block text-gray-700 mb-2">Smoking & Alcohol</label>
        <div className="flex gap-2">
          <button
            onClick={() => setSmoker(!smoker)}
            className={`flex-1 py-2 rounded-full border text-sm transition-all ${
              smoker
                ? "bg-red-100 text-red-600 border-red-400"
                : "bg-white border-gray-300 hover:bg-red-50"
            }`}
          >
            🚬 {smoker ? "Smoker" : "Non-Smoker"}
          </button>

          <button
            onClick={() => setDrinker(!drinker)}
            className={`flex-1 py-2 rounded-full border text-sm transition-all ${
              drinker
                ? "bg-blue-100 text-blue-600 border-blue-400"
                : "bg-white border-gray-300 hover:bg-blue-50"
            }`}
          >
            🍷 {drinker ? "Drinker" : "Non-Drinker"}
          </button>
        </div>
      </div>

      <div className="flex flex-col gap-3 w-full max-w-[400px] mt-6">
        <Button
          onClick={onNext}
          className="bg-blue-500 hover:bg-blue-600 text-white w-full py-3 rounded-full shadow-md text-lg transition-all"
        >
          Review & Confirm
        </Button>
        <Button
          onClick={onNext}
          variant="ghost"
          className="text-blue-500 w-full py-3 rounded-full border border-blue-500 hover:bg-blue-50 transition-all"
        >
          Skip for Now
        </Button>
      </div>
    </div>
  );
}
