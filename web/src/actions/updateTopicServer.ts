"use server";
import { updateTopic } from "@/data-access/topics";
import { Topic } from "@/data-access/topics";

export async function updateTopicServerAction(topic_key: string, topic: Topic) {
  return await updateTopic(topic_key, topic);
}
