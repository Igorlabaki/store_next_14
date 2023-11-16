import Link from "next/link";
import { Brand, Product, User, ProductCart,Cart } from "@prisma/client";
import { ImageComponent } from "../util/image";

interface ProductCardProd {
  product: Product;
}

export function ProductCardComponent({ product }: ProductCardProd) {
  return (
    <div className="px-[1rem] py-[1.25rem]">
      <ImageComponent
        src={product.imageUrl}
        alt={product.name}
        h={"h-[28.75rem]"}
        w={"w-[21.4rem]"}
        containerClassname="mx-auto"
      />
      <div className="mt-[1.2rem] flex flex-col gap-y-[1rem]">
        <p className="text-[1rem] tracking-[0.25rem]">{product.name}</p>
        <p className="text-[1.125rem] text-custom-orange">{product.price}$</p>
      </div>
    </div>
  );
}
