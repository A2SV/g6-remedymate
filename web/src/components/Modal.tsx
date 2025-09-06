"use client";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { useRouter } from "next/navigation";
interface Props {
	children: React.ReactNode;
	onOpenChange?: () => void;
}
function Modal({ children, onOpenChange }: Props) {
	const router = useRouter();
	return (
		<Dialog open={true} onOpenChange={onOpenChange ? onOpenChange : () => router.back()}>
			<DialogTitle></DialogTitle>
			<DialogContent className="bg-white">{children}</DialogContent>
		</Dialog>
	);
}
export default Modal;
