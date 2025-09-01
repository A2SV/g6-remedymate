"use client";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { useRouter } from "next/navigation";
import { ReactNode } from "react";

function Modal({ children }: { children: ReactNode }) {
	const router = useRouter();
	return (
		<Dialog open={true} onOpenChange={() => router.back()}>
			<DialogTitle></DialogTitle>
			<DialogContent className="bg-white">{children}</DialogContent>
		</Dialog>
	);
}
export default Modal;
