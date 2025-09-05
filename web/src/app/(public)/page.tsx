import { auth } from "@/auth";
import LandingPage from "@/components/LandingPage";
import { redirect } from "next/navigation";

export default async function Home() {
	const session = await auth();
	if (session?.user) {
		if (session?.user.role === "superadmin") {
			redirect("/manager");
		} else {
			redirect(`/${session.user.role}`);
		}
	}
	return (
		<div className="">
			<LandingPage />
		</div>
	);
}
