import { redirect } from "next/navigation";

export default function ManagerDash() {
	return redirect("/manager/users");
}
