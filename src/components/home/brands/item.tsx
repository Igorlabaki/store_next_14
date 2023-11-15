import Link from "next/link";
import { Brand } from "@prisma/client";
import { ImageComponent } from "@/components/util/image";

interface BrandItemProps {
  brand: Brand;
}

export function BrandItemListComponent({ brand }: BrandItemProps) {
  return (
    <Link href={`/brand/${brand.id}`}>
     <p>{brand.id}</p>
    </Link>
  );
}
