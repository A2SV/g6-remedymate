"use client";
import { Topic } from "@/data-access/topics";
import Link from "next/link";
import { Button } from "../ui/button";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";
import { useRouter } from "next/navigation";
interface Props {
  topics: { topics: Topic[]; total_count: number; page: number; limit: number };
}
function TopicsTable({ topics }: Props) {
  const router = useRouter();

  async function handleDelete(topic_key?: string) {
    if (!topic_key) return;
    const confirmed = confirm(
      `Delete topic ${topic_key}? This action is reversible (soft delete).`
    );
    if (!confirmed) return;

    try {
      // Call the server action endpoint by importing the action route relative to this page.
      // Next.js server actions are available via calling the action module from client with fetch.
      const res = await fetch(`/api/actions/deleteTopic`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ topic_key }),
      });

      if (!res.ok) {
        const text = await res.text();
        throw new Error(text || "Failed to delete topic");
      }

      // Refresh the current route to reload server-side data
      router.refresh();
    } catch (err) {
      console.error("Delete failed", err);
      alert(
        "Failed to delete topic: " +
          (err instanceof Error ? err.message : String(err))
      );
    }
  }
  return (
    <div className="bg-white h-fit grow-1 p-2 rounded-sm flex flex-col gap-3">
      <h3 className="text-lg font-semibold pb-2">Topics</h3>
      <Link
        href="/admin/topics/addTopic"
        className="text-white bg-primary p-2 rounded-sm w-fit"
      >
        + Add new topic
      </Link>
      <div className="shadow-sm bg-white rounded-md overflow-y-auto border-b">
        <Table>
          <TableCaption>A list of topics.</TableCaption>
          <TableHeader className="bg-primary">
            <TableRow className="">
              <TableHead className="text-white">Topic Name</TableHead>
              <TableHead className="text-white">English</TableHead>
              <TableHead className="text-white">Amharic</TableHead>
              <TableHead className="text-white">Last Updated</TableHead>
              <TableHead className="text-white">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {topics.topics.map((topic, idx) => (
              <TableRow
                key={idx}
                className={idx % 2 === 0 ? "bg-white" : "bg-blue-100/40"}
              >
                <TableCell>{topic.topic_key}</TableCell>
                <TableCell>{topic.name_en}</TableCell>
                <TableCell>{topic.name_am}</TableCell>
                <TableCell>
                  {new Date(
                    Date.parse(topic.updated_at || Date.now().toString())
                  ).toLocaleTimeString()}
                </TableCell>

                <TableCell className="flex gap-2">
                  <Link
                    className="bg-blue-900 px-2 rounded-sm flex items-center justify-center text-white"
                    href={`/admin/topics/${encodeURIComponent(
                      topic.topic_key ?? ""
                    )}/edit`}
                  >
                    Edit
                  </Link>
                  <Button
                    size="sm"
                    variant="destructive"
                    aria-label={`Delete topic ${topic.topic_key}`}
                    onClick={() => handleDelete(topic.topic_key)}
                  >
                    Delete
                  </Button>
                  <Button className="text-white" size="sm" variant={"default"}>
                    Test
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
export default TopicsTable;
