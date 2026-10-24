import { NextResponse } from "next/server";
import type { Pet } from "@/types/db";
import { type Brain, selfDescription } from "@/lib/brain";
import { askOpenRouter } from "@/lib/openrouter";
import { reflectPrompt } from "@/lib/petPrompt";

// The pet rereads its memories and rewrites how it describes itself.
export async function POST(req: Request) {
  const { pet, brain } = (await req.json()) as { pet: Pet; brain: Brain };
  const text = await askOpenRouter(reflectPrompt(pet, brain), [{ role: "user", content: "Describe yourself." }], 120);
  return NextResponse.json({ reflection: text?.trim() || selfDescription(brain, pet) });
}
