import Modal from "@/components/Modal";
import RedFlagEditForm from "@/components/admin/RedFlagEditForm";

export default async function RedflagEditModal({ params }: { params: Promise<{ id: string }> }) {
	const { id } = await params;
	return (
		<Modal>
			<RedFlagEditForm />
		</Modal>
	);
}
