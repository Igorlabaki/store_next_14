import Link from "next/link";
import { Brand } from "@prisma/client";
import { ImageComponent } from "@/components/util/image";

interface BrandItemProps{
    brand:Brand;
}

export function BrandItemListComponent({brand}: BrandItemProps) {
  return (
    <Link href={`/brand/${brand.id}`}>
        <ImageComponent h="h-[0.9rem]" w="w-[3.3rem]" imageClassname="" alt={brand.name} src={brand.imageUrl}/>
    </Link>
  )
}
