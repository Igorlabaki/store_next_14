import Link from "next/link";
import { Product } from "@prisma/client";
import { ImageComponent } from "@/components/util/image";

interface BrandProductItemListProps{
    product: Product;
}

export function BrandProductItemListComponent({product}:BrandProductItemListProps) {
  return (
    <Link href={`/product/${product.id}`} className="h-[31rem]">
        <ImageComponent alt={product.name} src={product.imageUrl} h="h-[28rem]" w={"w-[22.5rem]"}/>
        <div className="flex flex-row justify-between items-center w-[22.5rem] py-[0.25rem] px-[0.1 rem] gap-y-[0.2rem] font-tenor">
            <p className="text-[1.125rem] text-center leading-[2.5rem]">{product.name}</p>
            <p className="text-[1.125rem] text-custom-orange">{product.price}$</p>
        </div>
    </Link>
  )
}
