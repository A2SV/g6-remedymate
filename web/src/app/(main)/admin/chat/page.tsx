import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

export default function ChatboxPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <header className="flex justify-between px-6 py-4 shadow-md h-[50px]">
        <div className="flex gap-3 items-center">
          <Image src="/image2.png" alt="chatbox logo 1" width={30} height={30} />
        </div>
        <h1 className="top-3 font-bold text-center flex-1">Symptom Checker</h1>
        <div className="w-8 h-8 bg-[#6B7280] rounded-full flex items-center justify-center cursor-pointer">
          <h1 className="text-white">i</h1>
        </div>
      </header>

      <div className="flex-1 p-6 overflow-y-auto"></div>

      <footer className="px-6 py-4 border-t">
        <div className="flex items-center gap-2 relative">
          <Image
            src="/image5.png"
            alt="attachment icon"
            width={24}
            height={24}
            className="absolute left-3 top-1/2 -translate-y-1/2 cursor-pointer"
          />
          <div className="relative flex-1">
            <Input
              type="text"
              placeholder="Type a message..."
              className="w-full h-[50px] pl-12 pr-14"
            />
            <div className="absolute right-3 bottom-1 w-10 h-10 bg-green-500 rounded-full flex items-center justify-center cursor-pointer">
              <Image src="/image6.png" alt="emoji" width={20} height={20} />
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
