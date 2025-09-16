import { NextResponse } from "next/server";
import { deleteTopicAction } from "@/actions/deleteTopic";

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { topic_key } = body ?? {};
        if (!topic_key) return NextResponse.json({ message: "Missing topic_key" }, { status: 400 });

        await deleteTopicAction(topic_key);
        return NextResponse.json({ success: true });
    } catch (err: unknown) {
        console.error("API deleteTopic error", err);
        const message = err instanceof Error ? err.message : String(err);
        return NextResponse.json({ message }, { status: 500 });
    }
}
