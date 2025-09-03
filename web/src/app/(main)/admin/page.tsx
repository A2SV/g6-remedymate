import { redirect } from "next/navigation";

function AdminRoot() {
	redirect("/admin/analytics");
}
export default AdminRoot;
