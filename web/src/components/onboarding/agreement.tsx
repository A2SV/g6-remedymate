"use client";

import { useState } from "react";
import { Button } from "../ui/button";

type Props = {
  onNext: () => void;
  onBack: () => void;
};

export default function Agreement({ onNext, onBack }: Props) {
  const [agreed, setAgreed] = useState(false);

  const handleCheckboxChange = () => {
    setAgreed((prev) => !prev);
  };

  const handleNext = () => {
    if (agreed) {
      onNext();
    }
  };

  return (
    <div className="w-full h-full flex flex-col items-center justify-center text-center space-y-6 px-6">
      <div className="self-start flex gap-40 items-center w-full max-w-[600px]">
        <Button
          onClick={onBack}
          className="bg-gray-200 hover:bg-gray-300 text-gray-700 rounded-full px-3 py-1 shadow"
        >
          {"<"}
        </Button>
        <h1 className="text-3xl font-semibold text-gray-800 ml-3">
          Agreement
        </h1>
      </div>

      <p className="text-lg text-gray-500 max-w-[500px] text-center">
        Please review and agree to our terms to continue.
      </p>

      <div className="bg-gray-100 rounded-xl p-5 max-w-[500px] text-left text-gray-700">
        <p className="text-sm mb-4">
          We are committed to protecting your personal health information. By
          checking the box below, you consent to our collection, use, and
          sharing of your data as described in our privacy policy. This is
          necessary to provide you with our telemedicine service, including
          AI-assisted consultations.
        </p>
        <Button className="bg-blue-500 hover:bg-blue-600 text-white w-full py-2 rounded-full shadow-md">
          Read Full Privacy Policy
        </Button>
      </div>

      <label className="flex items-center gap-2 mt-4 text-gray-700 cursor-pointer">
        <input
          type="checkbox"
          checked={agreed}
          onChange={handleCheckboxChange}
          className="w-6 h-6 appearance-none border border-gray-400 rounded bg-white cursor-pointer 
            checked:bg-white checked:border-black checked:before:content-['✔'] checked:before:text-black 
            checked:before:flex checked:before:items-center checked:before:justify-center"
        />
        I have read and agree to the terms of service and privacy policy
      </label>

      <Button
        onClick={handleNext}
        disabled={!agreed} // Disable until checked
        className={`w-full max-w-[400px] py-3 rounded-full shadow-md text-lg mt-4 transition-all
          ${agreed ? "bg-blue-500 hover:bg-blue-600 text-white" : "bg-gray-300 text-gray-500 cursor-not-allowed"}`}
      >
        Agree & Continue
      </Button>
    </div>
  );
}
