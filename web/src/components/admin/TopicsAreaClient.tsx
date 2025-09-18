"use client";
import { useState } from "react";
import TopicsTable from "./TopicsTable";
import TopicTestResult from "./TopicTestResult";
import { Topic } from "@/data-access/topics";

export default function TopicsAreaClient({
  topics,
}: {
  topics: { topics: Topic[]; total_count: number; page: number; limit: number };
}) {
  const [selected, setSelected] = useState<Topic | null>(null);

  function handleTest(topic: Topic) {
    setSelected(topic);
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 px-7 mt-4">
      <div className="lg:col-span-2">
        <TopicsTable topics={topics} onTest={handleTest} />
      </div>
      <aside className="lg:col-span-1">
        <TopicTestResult topic={selected} />
      </aside>
    </div>
  );
}
