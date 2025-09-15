import { LoaderCircle } from "lucide-react";

function LoadingSpinner() {
	return (
		<div className="absolute bg-background top-0 right-0 w-full h-full opacity-50 flex items-center justify-center">
			<LoaderCircle size={96} className="font-bold animate-spin text-primary" />
		</div>
	);
}
export default LoadingSpinner;
