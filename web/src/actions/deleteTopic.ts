"use server";
import { deleteTopic } from "@/data-access/topics";

// Server action that deletes a topic by key using the server-side data-access helper.
export async function deleteTopicAction(topic_key: string) {
    if (!topic_key) throw new Error("Missing topic_key");
    return deleteTopic(topic_key);
}
