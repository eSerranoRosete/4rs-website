import { IFSuccessStory } from "@/types/CasesTypes";
import Link from "next/link";

type Props = {
  item: IFSuccessStory;
};

export const CaseStudyPreview = ({ item }: Props) => {
  return (
    <Link
      href={`/casos-de-exito/${item.slug}`}
      className="flex flex-col gap-4 hover:bg-muted rounded-xl cursor-pointer p-4"
    >
      <div className="w-full aspect-video relative rounded-xl overflow-hidden">
        <img
          src={item.images[0].src}
          alt={item.images[0].desc}
          className="absolute top-0 left-0 w-full h-full object-cover object-center"
        />
      </div>
      <h2 className="text-2xl font-medium">{item.title}</h2>
      <p className="text-muted-foreground text-lg">{item.previewDesc}</p>
      <p className="text-sm font-medium">{item.location}</p>
    </Link>
  );
};
