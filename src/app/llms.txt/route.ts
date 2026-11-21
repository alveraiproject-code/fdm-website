import { llmsText, textAntwort } from "@/lib/llms";

// /llms.txt: Kurzbeschreibung der FDM Akademie für KI-Assistenten, stündlich neu aus dem Katalog erzeugt.
export const revalidate = 3600;

export async function GET() {
  return textAntwort(await llmsText(false));
}
