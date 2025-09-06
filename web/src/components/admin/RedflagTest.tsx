import { Button } from "../ui/button";
import { Textarea } from "../ui/textarea";

function RedflagTest() {
	return (
		<div className="bg-white p-2 rounded-sm shrink-0">
			<form className=" flex flex-col gap-2">
				<h3 className="text-lg font-semibold">Test reg flag detection</h3>
				<Textarea className="resize-none" placeholder="Enter a simple phrase" />
				<Button className="w-full text-white">Run test</Button>
			</form>
		</div>
	);
}
export default RedflagTest;
