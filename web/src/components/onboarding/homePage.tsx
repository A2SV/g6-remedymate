import Image from "next/image";
import { Button } from "../ui/button";

type Props = {
  onNext: () => void;
};

export default function HomePage({ onNext }: Props) {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center text-center space-y-6">
      <Image
        src="/homePage.jpg"
        alt="AI Healthcare"
        width={800}
        height={700}
        className="w-full h-[750px] object-cover rounded-2xl shadow-md"
      />
      <h1 className="text-3xl font-semibold text-gray-800">
        Welcome to AI-Powered Healthcare
      </h1>
      <p className="text-lg text-gray-500 max-w-[600px]">
        Get personalized medical advice and care — right from your phone.
      </p>
      <Button
        onClick={onNext}
        className="bg-blue-500 hover:bg-blue-600 text-white text-lg rounded-full px-8 py-3 shadow-md transition-all"
      >
        Get Started
      </Button>
    </div>
  );
}
