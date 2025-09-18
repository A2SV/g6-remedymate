import AdminHeader from "@/components/admin/AdminHeader";
import TopicsAreaClient from "@/components/admin/TopicsAreaClient";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { getTopics } from "@/data-access/topics";
import { ShieldAlert } from "lucide-react";

export default async function TopicsPage() {
  const topics = await getTopics();
  console.log(topics);
  return (
    <div className="min-h-screen">
      <AdminHeader>
        <div className="flex gap-2">
          <Input type="text" placeholder="Search topics" />
        </div>
      </AdminHeader>
      {/* Grid: main list + right-side mobile preview */}
      <div className="container mx-auto">
        <div className="grid grid-cols-1">
          <TopicsAreaClient topics={topics} />
        </div>
        <div className="px-7 mb-4">
          <div className="mt-8 bg-white shadow p-4 rounded-sm">
            <h2 className="font-semibold mb-2">Offline Pack — Top 30 Topics</h2>
            <div className="space-y-2">
              {topics.topics.map((topic, idx) => (
                <div
                  key={idx}
                  className="flex items-center justify-between border rounded px-3 py-2"
                >
                  <span>{topic.topic_key}</span>
                  <div className="flex items-center gap-2">
                    <Button size="sm" variant="destructive">
                      Remove
                    </Button>
                  </div>
                </div>
              ))}
            </div>
            {/* <div className="flex gap-2 mt-4">
              <Button className="text-white">Add Topic</Button>
              <Button className="text-white" variant="outline">
                Save Changes
              </Button>
            </div> */}
          </div>
        </div>
        <div className="px-7 mb-5">
          <div className="bg-amber-gold rounded-sm p-4 flex gap-2">
            <ShieldAlert />
            <p>
              Topics should be carefully edited to prevent wrong suggestions
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
