import { llmsText, textAntwort } from "@/lib/llms";

// /llms-full.txt: wie /llms.txt, zusätzlich mit dem vollständigen Kursverzeichnis.
export const revalidate = 3600;

export async function GET() {
  return textAntwort(await llmsText(true));
}
