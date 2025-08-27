import React from "react";
import { notFound } from "next/navigation";
import { Button } from "@/components/ui/button";
import TopicEditorClient from "@/components/TopicEditorClient";

// Simple mock dataset — in real app replace with fetch by id
const MOCK_TOPICS = [
  {
    id: "headache",
    name: "Headache",
    languages: ["EN", "AM"],
    status: "Active",
    selfCare: [
      "Hydrate well",
      "Rest in a dark, quiet room",
      "Gentle neck stretches",
    ],
    otc: ["Pain relief", "Caffeine"],
    seekCare: [
      "Severe or persistent pain",
      "Head injury, confusion, fainting",
      "Sudden worst headache",
    ],
    disclaimer:
      "This information is educational and not a substitute for professional medical advice.",
  },
  {
    id: "diarrhea",
    name: "Diarrhea",
    languages: ["EN", "AM"],
    status: "Active",
    selfCare: ["Fluids", "BRAT diet"],
    otc: ["Oral rehydration"],
    seekCare: ["Severe dehydration"],
    disclaimer: "",
  },
];

export default function EditTopicPage({ params }: { params: { id: string } }) {
  const topic = MOCK_TOPICS.find((t) => t.id === params.id);
  if (!topic) return notFound();

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="mb-6 flex items-center justify-between">
        <div className="h-12 w-48 bg-gray-200 rounded animate-pulse" />
        <div className="h-12 w-48 bg-gray-200 rounded animate-pulse" />
      </div>

      <h1 className="text-2xl font-bold mb-4">Edit Topic — {topic.name}</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <main className="lg:col-span-2">
          <div className="bg-white rounded shadow p-6">
            <h2 className="sr-only">Edit topic form</h2>
            <div className="mb-4">
              <label className="block font-semibold mb-1">Topic Name</label>
              <div className="mb-2 text-sm text-gray-700">{topic.name}</div>
            </div>

            <div className="mb-4">
              <TopicEditorClient initialTopic={topic as any} />
            </div>
          </div>
        </main>

        <aside className="lg:col-span-1">
          <div className="flex items-center justify-between mb-2">
            <h2 className="text-lg font-semibold">Mobile Preview</h2>
            <div className="flex gap-2">
              <button className="px-2 py-1 text-xs bg-gray-100 rounded">
                EN
              </button>
              <button className="px-2 py-1 text-xs bg-gray-100 rounded">
                AM
              </button>
            </div>
          </div>

          <div className="w-full max-w-xs mx-auto bg-white rounded-lg shadow overflow-hidden">
            <div className="p-4 space-y-3">
              <div className="rounded-md overflow-hidden">
                <div className="bg-green-700 text-white px-3 py-2 font-semibold">
                  Self-care
                </div>
                <div className="px-3 py-2 bg-green-50 text-sm text-gray-800">
                  Hydration, rest, dark room
                </div>
              </div>

              <div className="rounded-md overflow-hidden">
                <div className="bg-orange-500 text-white px-3 py-2 font-semibold">
                  OTC
                </div>
                <div className="px-3 py-3 bg-orange-50">
                  <div className="flex gap-2 flex-wrap">
                    {topic.otc.map((o: string, i: number) => (
                      <span
                        key={i}
                        className="bg-blue-600 text-white px-2 py-1 rounded-full text-xs"
                      >
                        {o}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="rounded-md overflow-hidden">
                <div className="bg-red-600 text-white px-3 py-2 font-semibold">
                  When to seek care
                </div>
                <div className="px-3 py-3 bg-red-50 text-red-700">
                  <ul className="list-disc pl-5 space-y-1 text-sm">
                    {topic.seekCare.map((item: string, idx: number) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="text-xs text-gray-500">
                This information is educational and not a substitute for
                professional medical advice.
              </div>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
