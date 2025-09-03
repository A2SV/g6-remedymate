import { Button } from "../ui/button";
import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";

function RedFlagEditForm() {
	return (
		<div className="bg-white h-fit w-full p-2 rounded-sm">
			<form className="flex flex-col gap-6">
				<div className="flex flex-col gap-2">
					<Label htmlFor="englishPhrase" className="text-lg">
						English
					</Label>
					<Textarea className="resize-none" id="englishPhrase" />
				</div>
				<div className="flex flex-col gap-2">
					<Label htmlFor="amharicPhrase" className="text-lg">
						Amharic
					</Label>
					<Textarea lang="am" className="resize-none" id="amharicPhrase" />
				</div>
				<div className="flex items-center justify-between">
					<p className="text-gray-500 text-sm">Provide safety focused red flag phrases</p>
					<div className="flex gap-2">
						<Button variant={"destructive"} type="button">
							Cancel
						</Button>
						<Button type="submit" className="text-white">
							Save Changes
						</Button>
					</div>
				</div>
			</form>
		</div>
	);
}
export default RedFlagEditForm;
