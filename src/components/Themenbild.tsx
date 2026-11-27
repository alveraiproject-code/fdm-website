import Image from "next/image";
import { bildZumThema } from "@/lib/bilder";

type Props = {
  thema: string;
  klasse?: string;
  sizes?: string;
  zuerst?: boolean;
  dekorativ?: boolean;
};

export default function Themenbild({ thema, klasse, sizes, zuerst, dekorativ }: Props) {
  const bild = bildZumThema(thema);
  return (
    <div className={`relative overflow-hidden rounded-2xl bg-slate-100 ${klasse ?? "aspect-[3/2]"}`}>
      <Image
        src={bild.src}
        alt={dekorativ ? "" : bild.alt}
        fill
        sizes={sizes ?? "(min-width: 1280px) 580px, (min-width: 1024px) 46vw, 94vw"}
        preload={zuerst}
        className="object-cover"
      />
    </div>
  );
}
