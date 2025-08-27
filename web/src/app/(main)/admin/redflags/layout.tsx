export default function RedflagsLayout({ children, modal }: { children: React.ReactNode; modal: React.ReactNode }) {
	return (
		<div>
			{children}
			{modal}
		</div>
	);
}
