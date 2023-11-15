import Link from "next/link";
import { Product } from "@prisma/client";
import { ImageComponent } from "@/components/util/image";

interface ProductCardProps {
  product: Product;
}

export function ProductItemComponent({ product }: ProductCardProps) {
  return (
    <Link className="h-[16.2rem] w-[12.3rem]" href={`/product/${product.id}`}>
      <ImageComponent
        w={"w-[10.3rem]"}
        h={"h-[12.5rem]"}
        alt={product.name}
        src={product.imageUrl}
      />
      <div className="flex flex-col justify-center items-center py-[0.25rem] px-[0.1 rem] gap-y-[0.2rem]">
        <p className="text-[0.75rem] leading-[1rem] text-center ">
          {product.name}
        </p>
        <p className="text-[0.93rem] text-custom-orange font-[500]">
          ${product.price}
        </p>
      </div>
    </Link>
  );
}
