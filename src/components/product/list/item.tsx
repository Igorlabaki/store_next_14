import Link from "next/link";
import { ProductIncludesBrand } from "@/types";
import { AiOutlinePlus } from "react-icons/ai";
import { ImageComponent } from "../../util/image";

interface ProductPageListItemProps{
    product: ProductIncludesBrand;
}

export  function ProductPageListItemComponent({product}: ProductPageListItemProps) {
  return (
    <Link href={`/product/${product.id}`} className="flex h-[8.375rem] gap-x-[0.75rem]">
        <ImageComponent h="h-[8.3rem]" w="w-[6.5rem]" containerClassname="rounded-sm overflow-hidden" alt={product.name} src={product.imageUrl}/>
        <div className="flex flex-col gap-y-[0.5rem]">
            <p className="text-[1.125rem] leading-[1.25rem]">{product.name}</p>
            <p className="text-[0.875rem] leading-[1.25rem]">{product.brand.name}</p>
            <p className="text-[0.93rem] text-custom-orange">{product.price}$</p>
            <div className="bg-black w-full h-[2.75rem] flex items-center px-[1rem] gap-x-[0.5rem] rounded-md hover:scale-105 active:scale-95 duration-300">
                <AiOutlinePlus className="text-[0.85rem] text-white"/>
                <p className="text-[0.75rem] text-white ">ADD TO BASKET</p>
            </div>
        </div>
    </Link>
  )
}
