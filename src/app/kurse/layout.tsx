import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata("kurse");

export default function KurseLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
