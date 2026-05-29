import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata("kontakt");

export default function KontaktLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
