import { getTopic, getTopics } from "@/data-access/topics";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { notFound } from "next/navigation";
import TopicEditorClient from "@/components/admin/TopicEditorClient";

export default async function EditTopicPage({
  params,
}: {
  params: { id: string };
}) {
  const { id } = await params;
  let topic;
  try {
    topic = await getTopic(id);
  } catch (err) {
    // If topic not found, try a fallback: fetch a page of topics and match by topic_key or name
    try {
      const page = await getTopics(1, 200);
      const decoded = decodeURIComponent(id).toLowerCase();
      topic = page.topics.find(
        (t) =>
          (t.topic_key ?? "").toLowerCase() === decoded ||
          (t.name_en ?? "").toLowerCase() === decoded
      );
    } catch (e) {
      // ignore
    }
  }

  if (!topic) return notFound();

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="px-7 pb-5 pt-3 shadow-2xs bg-white flex items-center justify-between">
        <div className="">
          <h1>Edit Topic — {topic.name_en}</h1>
        </div>
        <div className="flex gap-4 items-center">
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <p>username</p>
        </div>
      </div>

      <main className="p-7">
        <div className="bg-white rounded shadow p-6">
          <h2 className="sr-only">Edit topic form</h2>
          <div className="mb-4">
            <label className="block font-semibold mb-1">Topic Name</label>
            <div className="mb-2 text-sm text-gray-700">{topic.name_en}</div>
          </div>

          <div className="mb-4">
            <TopicEditorClient
              initialTopic={{
                ...topic,
                topic_key: topic.topic_key ?? id,
                translations: {
                  ...topic.translations,
                  en: {
                    safety_note: "",
                    ...topic.translations.en,
                  },
                },
              }}
              topicKey={id}
            />
          </div>
        </div>
      </main>
    </div>
  );
}
