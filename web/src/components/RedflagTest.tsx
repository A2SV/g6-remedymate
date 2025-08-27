import { Button } from "./ui/button";
import { Textarea } from "./ui/textarea";

function RedflagTest() {
	return (
		<div className="bg-white h-fit p-2 rounded-sm w-1/3">
			<form className=" flex flex-col gap-2">
				<h3>Test reg flag detection</h3>
				<Textarea className="resize-none" placeholder="Enter a simple phrase" />
				<Button className="w-full">Run test</Button>
			</form>
		</div>
	);
}
export default RedflagTest;
