import { Legend } from "recharts";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";

function AddTopic() {
	return (
		<form className="space-y-4">
			<div>
				<Label htmlFor="topic_key">Topic Key</Label>
				<Input type="text" name="topic_key" id="topic_key" />
			</div>
			<div>
				<Label htmlFor="name_en">Name (EN)</Label>
				<Input type="text" name="name_en" id="name_en" />
			</div>
			<div>
				<Label htmlFor="name_am">Name (AM)</Label>
				<Input type="text" name="name_am" id="name_am" />
			</div>
			<div>
				<Label htmlFor="description_en">Description (EN)</Label>
				<Textarea name="description_en" id="description_en" />
			</div>
			<div>
				<Label htmlFor="description_am">Description (AM)</Label>
				<Textarea name="description_am" id="description_am" />
			</div>
			<div>
				<Label htmlFor="status">Status</Label>
				<Input type="text" name="status" id="status" />
			</div>
			<div>
				<Label htmlFor="is_offline_cachable">Is Offline Cachable</Label>
				<Input type="text" name="is_offline_cachable" id="is_offline_cachable" />
			</div>
			<fieldset>
				<Legend>Translations (EN)</Legend>
				<div>
					<Label htmlFor="translations.en.self_care">Self Care (EN)</Label>
					<Input
						type="text"
						name="translations.en.self_care"
						id="translations.en.self_care"
						placeholder="Comma separated"
					/>
				</div>
				<div>
					<Label htmlFor="translations.en.otc_categories[0].category_name">OTC Category Name (EN)</Label>
					<Input
						type="text"
						name="translations.en.otc_categories[0].category_name"
						id="translations.en.otc_categories[0].category_name"
						placeholder="Category Name"
					/>
					<Label htmlFor="translations.en.otc_categories[0].safety_note">Safety Note (EN)</Label>
					<Input
						type="text"
						name="translations.en.otc_categories[0].safety_note"
						id="translations.en.otc_categories[0].safety_note"
						placeholder="Safety Note"
					/>
				</div>
				<div>
					<Label htmlFor="translations.en.seek_care_if">Seek Care If (EN)</Label>
					<Input
						type="text"
						name="translations.en.seek_care_if"
						id="translations.en.seek_care_if"
						placeholder="Comma separated"
					/>
				</div>
				<div>
					<Label htmlFor="translations.en.disclaimer">Disclaimer (EN)</Label>
					<Textarea name="translations.en.disclaimer" id="translations.en.disclaimer" />
				</div>
			</fieldset>
			<fieldset>
				<Legend>Translations (AM)</Legend>
				<div>
					<Label htmlFor="translations.am.self_care">Self Care (AM)</Label>
					<Input
						type="text"
						name="translations.am.self_care"
						id="translations.am.self_care"
						placeholder="Comma separated"
					/>
				</div>
				<div>
					<Label htmlFor="translations.am.otc_categories[0].category_name">OTC Category Name (AM)</Label>
					<Input
						type="text"
						name="translations.am.otc_categories[0].category_name"
						id="translations.am.otc_categories[0].category_name"
						placeholder="Category Name"
					/>
					<Label htmlFor="translations.am.otc_categories[0].safety_note">Safety Note (AM)</Label>
					<Input
						type="text"
						name="translations.am.otc_categories[0].safety_note"
						id="translations.am.otc_categories[0].safety_note"
						placeholder="Safety Note"
					/>
				</div>
				<div>
					<Label htmlFor="translations.am.seek_care_if">Seek Care If (AM)</Label>
					<Input
						type="text"
						name="translations.am.seek_care_if"
						id="translations.am.seek_care_if"
						placeholder="Comma separated"
					/>
				</div>
				<div>
					<Label htmlFor="translations.am.disclaimer">Disclaimer (AM)</Label>
					<Textarea lang="am" name="translations.am.disclaimer" id="translations.am.disclaimer" />
				</div>
			</fieldset>
			<Button type="submit">Submit</Button>
		</form>
	);
}
export default AddTopic;
