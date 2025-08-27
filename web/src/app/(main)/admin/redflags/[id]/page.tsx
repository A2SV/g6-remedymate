import RedFlagEditForm from "@/components/RedFlagEditForm";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

async function RedflagEditPage({ params }: { params: Promise<{ id: string }> }) {
	const { id } = await params;
	return (
		<div className="flex flex-col gap-4 min-h-screen">
			<div className="px-7 pb-5 pt-3 shadow-2xs bg-white flex items-center justify-between">
				<div className="">
					<h1>Edit Red flag: {id}</h1>
				</div>
				<div className="flex gap-4 items-center">
					<Avatar>
						<AvatarImage src="https://github.com/shadcn.png" />
						<AvatarFallback>CN</AvatarFallback>
					</Avatar>
					<p>username</p>
				</div>
			</div>
			<div className="grow-1 px-7">
				<RedFlagEditForm />
			</div>
		</div>
	);
}
export default RedflagEditPage;
