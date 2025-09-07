import { verifyUser } from "@/actions/user";
import VerificationError from "@/components/Profile/VerificationError";
import { redirect } from "next/navigation";

async function VerificationPage({ searchParams }: { searchParams: Promise<{ token: string }> }) {
	const { token } = await searchParams;
	try {
		const data = await verifyUser(token);
		console.log(data);
	} catch (error) {
		console.log(error);
		return <VerificationError />;
	}
	redirect("/login");
}
export default VerificationPage;
