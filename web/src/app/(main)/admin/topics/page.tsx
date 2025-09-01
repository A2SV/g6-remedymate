import React from "react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Sidebar } from "@/components/ui/sidebar";
import Link from "next/link";

// Mock data
const topics = [
  {
    id: "headache",
    name: "Headache",
    languages: ["EN", "AM"],
    status: "Active",
    updated: "2025-08-16 14:22",
  },
  {
    id: "diarrhea",
    name: "Diarrhea",
    languages: ["EN", "AM"],
    status: "Active",
    updated: "2025-08-17 09:41",
  },
  {
    id: "sore-throat",
    name: "Sore Throat",
    languages: ["EN"],
    status: "Archived",
    updated: "2025-08-12 18:02",
  },
];

export default function TopicsPage() {
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      {/* Placeholder for Sidebar & Navbar */}
      <Sidebar />

      <div className="mb-6 flex items-center justify-between">
        <div className="h-12 w-48 bg-gray-200 rounded animate-pulse" />
        <div className="h-12 w-48 bg-gray-200 rounded animate-pulse" />
      </div>
      <h1 className="text-2xl font-bold mb-4">Topics</h1>
      <div className="flex gap-4 mb-4">
        <select className="border rounded px-2 py-1">
          <option>Language: Both</option>
        </select>
        <select className="border rounded px-2 py-1">
          <option>Status: Active</option>
        </select>
        <Button>Add New Topic</Button>
      </div>
      <Separator className="my-4" />

      {/* Grid: main list + right-side mobile preview */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <div className="bg-white rounded shadow p-4">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b">
                  <th className="py-2 text-left">Topic Name</th>
                  <th className="py-2 text-left">Language Coverage</th>
                  <th className="py-2 text-left">Status</th>
                  <th className="py-2 text-left">Last Updated</th>
                  <th className="py-2 text-left">Actions</th>
                </tr>
              </thead>
              <tbody>
                {topics.map((topic, idx) => (
                  <tr key={idx} className="border-b">
                    <td className="py-2">{topic.name}</td>
                    <td className="py-2">
                      {topic.languages.map((lang) => (
                        <span
                          key={lang}
                          className="px-2 py-1 bg-blue-100 rounded mr-1 text-xs font-semibold"
                        >
                          {lang}
                        </span>
                      ))}
                    </td>
                    <td className="py-2">
                      <span
                        className={`px-2 py-1 rounded text-xs font-semibold ${
                          topic.status === "Active"
                            ? "bg-green-100 text-green-700"
                            : "bg-gray-200 text-gray-700"
                        }`}
                      >
                        {topic.status}
                      </span>
                    </td>
                    <td className="py-2">{topic.updated}</td>
                    <td className="py-2">
                      <div className="flex items-center gap-2">
                        <Link
                          href={`/admin/topics/${encodeURIComponent(
                            topic.id
                          )}/edit`}
                        >
                          <Button variant="outline" size="sm">
                            Edit
                          </Button>
                        </Link>
                        <Link
                          href={`/admin/topics/${encodeURIComponent(
                            topic.id
                          )}/delete`}
                        >
                          <Button size="sm" variant="destructive">
                            Delete
                          </Button>
                        </Link>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Mobile preview panel */}
        <aside className="lg:col-span-1">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-lg font-semibold">Mobile Preview</h3>
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
                    <span className="bg-blue-600 text-white px-2 py-1 rounded-full text-xs">
                      Pain relief
                    </span>
                    <span className="bg-blue-600 text-white px-2 py-1 rounded-full text-xs">
                      Caffeine
                    </span>
                  </div>
                </div>
              </div>

              <div className="rounded-md overflow-hidden">
                <div className="bg-red-600 text-white px-3 py-2 font-semibold">
                  When to seek care
                </div>
                <div className="px-3 py-3 bg-red-50 text-red-700">
                  <ul className="list-disc pl-5 space-y-1 text-sm">
                    <li>Severe or persistent pain</li>
                    <li>Head injury, confusion</li>
                    <li>Sudden worst headache</li>
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
      <div className="mt-8 bg-white rounded shadow p-4">
        <h2 className="font-semibold mb-2">Offline Pack — Top 30 Topics</h2>
        <div className="space-y-2">
          {topics.map((topic, idx) => (
            <div
              key={idx}
              className="flex items-center justify-between border rounded px-3 py-2"
            >
              <span>{topic.name}</span>
              <div className="flex items-center gap-2">
                <span className="text-xs px-2 py-1 rounded bg-green-100">
                  {topic.status === "Active"
                    ? "Active"
                    : topic.status === "Archived"
                    ? "Archived"
                    : "Not included"}
                </span>
                <Button size="sm">Add Topic</Button>
                <Button size="sm" variant="destructive">
                  Remove
                </Button>
              </div>
            </div>
          ))}
        </div>
        <div className="flex gap-2 mt-4">
          <Button>Add Topic</Button>
          <Button variant="destructive">Remove</Button>
          <Button variant="outline">Save Changes</Button>
        </div>
      </div>
    </div>
  );
}
