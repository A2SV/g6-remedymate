"use client";
import { Input } from "@/components/ui/input";
import { KeyboardEvent, useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import { Button } from "../ui/button";
import { updateTopicAction } from "@/actions/updateTopic";
import { toast } from "sonner";
import { deleteTopic } from "@/data-access/topics";

type Topic = {
  topic_key: string;
  name_en: string;
  name_am: string;
  description_en: string;
  description_am: string;
  translations: {
    en: {
      safety_note?: string;
      self_care?: string[] | string;
      otc_categories?: { category_name?: string }[] | string;
      seek_care_if?: string[] | string;
      disclaimer?: string;
    };
    am: {
      self_care?: string[] | string;
      otc_categories?: { category_name?: string }[] | string;
      seek_care_if?: string[] | string;
      disclaimer?: string;
      safety_note?: string;
    };
  };
};

export default function TopicEditorClient({
  initialTopic,
  topicKey,
}: {
  initialTopic: Topic;
  topicKey: string;
}) {
  const [otc, setOtc] = useState<string[]>(
    // Normalize otc_categories: it may be an array of objects or a comma-separated string or undefined
    Array.isArray(initialTopic?.translations?.en?.otc_categories)
      ? initialTopic.translations.en.otc_categories.map((c) =>
          typeof c === "string"
            ? c
            : (c as { category_name?: string }).category_name ?? ""
        )
      : typeof initialTopic?.translations?.en?.otc_categories === "string"
      ? initialTopic.translations.en.otc_categories
          .split(",")
          .map((s) => s.trim())
          .filter(Boolean)
      : []
  );
  const [otcInput, setOtcInput] = useState("");
  const [seek, setSeek] = useState<string[]>(
    // Normalize seek_care_if: may be an array of strings, a comma-separated string, or undefined
    Array.isArray(initialTopic?.translations?.en?.seek_care_if)
      ? (initialTopic.translations.en.seek_care_if as string[])
      : typeof initialTopic?.translations?.en?.seek_care_if === "string"
      ? initialTopic.translations.en.seek_care_if
          .split(",")
          .map((s) => s.trim())
          .filter(Boolean)
      : []
  );
  const [isPending, startTransition] = useTransition();
  const router = useRouter();

  function addOtcFromInput() {
    const value = otcInput.trim();
    if (!value) return;
    if (otc.includes(value)) {
      setOtcInput("");
      return;
    }
    setOtc((s) => [...s, value]);
    setOtcInput("");
  }

  function onOtcKey(e: KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Enter") {
      e.preventDefault();
      addOtcFromInput();
    }
  }

  function removeOtc(i: number) {
    setOtc((s) => s.filter((_, idx) => idx !== i));
  }

  function addSeekItem() {
    setSeek((s) => [...s, ""]);
  }

  function updateSeekItem(i: number, value: string) {
    setSeek((s) => s.map((it, idx) => (idx === i ? value : it)));
  }

  function removeSeekItem(i: number) {
    setSeek((s) => s.filter((_, idx) => idx !== i));
  }

  function onSave() {
    startTransition(async () => {
      try {
        const updatedTopic = {
          ...initialTopic,
          translations: {
            ...initialTopic.translations,
            en: {
              ...initialTopic.translations.en,
              otc_categories: otc.join(","),
              seek_care_if: seek.join(","),
              self_care: initialTopic.translations.en.self_care
                ? Array.isArray(initialTopic.translations.en.self_care)
                  ? initialTopic.translations.en.self_care.join(",")
                  : initialTopic.translations.en.self_care
                : "",
            },
            am: {
              ...initialTopic.translations.am,
              otc_categories: Array.isArray(
                initialTopic.translations.am.otc_categories
              )
                ? initialTopic.translations.am.otc_categories
                    .map((c) => c.category_name)
                    .join(",")
                : initialTopic.translations.am.otc_categories || "",
              seek_care_if: Array.isArray(
                initialTopic.translations.am.seek_care_if
              )
                ? initialTopic.translations.am.seek_care_if.join(",")
                : initialTopic.translations.am.seek_care_if || "",
              self_care: initialTopic.translations.am.self_care
                ? Array.isArray(initialTopic.translations.am.self_care)
                  ? initialTopic.translations.am.self_care.join(",")
                  : initialTopic.translations.am.self_care
                : "",
            },
          },
        };
        // prefer the topic_key from the topic itself (fetched from API); fall back to the route param
        const keyToUse = (updatedTopic as any).topic_key ?? topicKey;
        await updateTopicAction(keyToUse, {
          ...updatedTopic,
          translations: {
            en: {
              ...updatedTopic.translations.en,
              otc_categories: otc.join(","),
              seek_care_if: seek.join(","),
              self_care: Array.isArray(updatedTopic.translations.en.self_care)
                ? updatedTopic.translations.en.self_care.join(",")
                : updatedTopic.translations.en.self_care
                ? updatedTopic.translations.en.self_care
                : "",
              safety_note:
                (updatedTopic.translations.en as any).safety_note ?? "",
              disclaimer: updatedTopic.translations.en.disclaimer ?? "",
            },
            am: {
              ...updatedTopic.translations.am,
              otc_categories: Array.isArray(
                updatedTopic.translations.am.otc_categories
              )
                ? updatedTopic.translations.am.otc_categories
                    .map((c: { category_name?: string } | string) =>
                      typeof c === "string" ? c : c.category_name ?? ""
                    )
                    .join(",")
                : typeof updatedTopic.translations.am.otc_categories ===
                  "string"
                ? updatedTopic.translations.am.otc_categories
                : "",
              seek_care_if: Array.isArray(
                updatedTopic.translations.am.seek_care_if
              )
                ? updatedTopic.translations.am.seek_care_if.join(",")
                : typeof updatedTopic.translations.am.seek_care_if === "string"
                ? updatedTopic.translations.am.seek_care_if
                : "",
              self_care: Array.isArray(updatedTopic.translations.am.self_care)
                ? updatedTopic.translations.am.self_care.join(",")
                : typeof updatedTopic.translations.am.self_care === "string"
                ? updatedTopic.translations.am.self_care
                : "",
              safety_note:
                (updatedTopic.translations.am as any).safety_note ?? "",
              disclaimer: updatedTopic.translations.am.disclaimer ?? "",
            },
          },
        });
        toast.success("Topic updated successfully");
        // Refresh server-rendered data so the page shows the updated topic
        try {
          router.refresh();
        } catch (e) {
          // ignore in environments where router.refresh isn't available
        }
      } catch (_e: unknown) {
        // Log or handle _e if needed; show generic error to user
        toast.error("Failed to update topic");
      }
    });
  }

  function onDelete() {
    startTransition(async () => {
      try {
        await deleteTopic(topicKey);
        toast.success("Topic deleted successfully");
        window.history.back();
      } catch (_e: unknown) {
        toast.error("Failed to delete topic");
      }
    });
  }

  return (
    <div>
      <div className="mb-4">
        <label className="block font-semibold mb-2">OTC Categories</label>
        <div className="rounded-lg border p-3 bg-white">
          <div className="flex flex-wrap gap-2 mb-3">
            {otc.map((t, i) => (
              <span
                key={i}
                className="inline-flex items-center gap-2 bg-blue-800 text-white px-3 py-1 rounded-full text-sm"
              >
                {t}
                <button
                  aria-label={`remove ${t}`}
                  onClick={() => removeOtc(i)}
                  className="ml-1 inline-flex items-center justify-center w-5 h-5 rounded-full bg-blue-700/80 text-xs"
                >
                  ×
                </button>
              </span>
            ))}
          </div>

          {/* Delete button moved to bottom with other actions */}
          <Input
            placeholder="Type and press Enter to add..."
            value={otcInput}
            onChange={(e) => setOtcInput(e.target.value)}
            onKeyDown={onOtcKey}
          />
        </div>
      </div>

      <div className="mb-4">
        <label className="block font-semibold mb-2">When to Seek Care</label>
        <div className="rounded-lg border p-3 bg-white space-y-2">
          {seek.map((item, idx) => (
            <div key={idx} className="flex items-center gap-2">
              <Input
                value={item}
                onChange={(e) => updateSeekItem(idx, e.target.value)}
                className="flex-1"
              />
              <button
                onClick={() => removeSeekItem(idx)}
                className="p-2 rounded bg-gray-100 text-gray-700"
                aria-label="remove-item"
              >
                🗑
              </button>
            </div>
          ))}

          <div>
            <button
              onClick={addSeekItem}
              className="inline-flex items-center gap-2 px-3 py-1 rounded bg-blue-700 text-white text-sm"
            >
              + Add Item
            </button>
          </div>
        </div>
      </div>

      <div className="mb-6">
        <label className="block font-semibold mb-2">Disclaimer</label>
        <div className="rounded-lg border bg-gray-50 p-3 text-sm text-gray-700">
          {initialTopic.translations.en.disclaimer}
        </div>
      </div>

      <div className="flex items-center gap-3">
        <Button variant={"destructive"} onClick={() => window.history.back()}>
          ⟲ Cancel
        </Button>
        <Button onClick={onSave} disabled={isPending}>
          💾 Save Changes
        </Button>
        <Button variant={"destructive"} onClick={onDelete} disabled={isPending}>
          🗑 Delete Topic
        </Button>
      </div>
    </div>
  );
}
