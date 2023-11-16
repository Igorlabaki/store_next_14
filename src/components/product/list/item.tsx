import Link from "next/link";
import { ProductIncludesBrand } from "@/types";
import { ImageComponent } from "../../util/image";
import { AuthOptions, getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { AddToCartButton } from "@/components/util/addToBasket";
import getCartByUserId from "@/serverActions/prismaRepository/cart/getCartByUserId";
import verifyIfProductCartExistsServerAction from "@/serverActions/actions/productCard/verifyIfProductCartExist";
import getCartByUserIdServerAction from "@/serverActions/actions/cart/getCartById";

interface ProductPageListItemProps {
  product: ProductIncludesBrand;
}

export async function ProductPageListItemComponent({
  product,
}: ProductPageListItemProps) {
  const session: any = await getServerSession(authOptions as AuthOptions);
  const useCart: any = await getCartByUserIdServerAction(session?.user.id);
  const pruductAlreadyInCart: any = await verifyIfProductCartExistsServerAction(
    {
      productId: product.id,
      cartId: useCart?.id,
    }
  );
  return (
    <div
     
      className="flex h-[8.375rem] gap-x-[0.75rem]"
    >
      <Link  href={`/product/${product.id}`}>
        <ImageComponent
          h="h-[8.3rem]"
          w="w-[6.5rem]"
          containerClassname="rounded-sm overflow-hidden"
          alt={product.name}
          src={product.imageUrl}
        />
      </Link>
      <div className="flex flex-col gap-y-[0.5rem] h-[8.3rem]">
        <p className="text-[1.125rem] leading-[1.25rem]">{product.name}</p>
        <p className="text-[0.875rem] leading-[1.25rem]">
          {product.brand?.name}
        </p>
        <p className="text-[0.93rem] text-custom-orange">{product.price}$</p>
        <div className="flex-1 flex justify-end items-end">
          <AddToCartButton
            productId={product.id}
            userId={session?.user?.id}
            pruductAlreadyInCart={pruductAlreadyInCart}
            className="h-[2.5rem]  text-black bg-gray-800"
          />
        </div>
      </div>
    </div>
  );
}
