"use server";

import { ICartRepository } from "@/backend/repository/ICartRepository";
import {
  IProductCartRepository,
} from "@/backend/repository/IProductCartRepository";
import { revalidatePath } from "next/cache";

class CreateProductCartCase {
  constructor(
    private CartRepository: ICartRepository,
    private ProductCartRepository: IProductCartRepository
  ) {}

  async execute( userId: string, productId: string, quantity: number) {
    const userHasCart = await this.CartRepository.getByUserId(userId);

    if (userHasCart) {
      const productAlreadyInCart =
        await this.ProductCartRepository.verifyIfProductAlreadyInCart({
          cartId: userHasCart.id,
          productId,
        });

      if (productAlreadyInCart) {
        const productCartUpdated =
          await this.ProductCartRepository.updateQuantity({
            producCartId: productAlreadyInCart.id,
            quantity,
          });

        await this.CartRepository.updateTotal({
          cartId: userHasCart.id,
          total:
            userHasCart.total + parseInt(productAlreadyInCart.product.price),
        });

        revalidatePath("/cart");

        return productCartUpdated;
      }

      if (!productAlreadyInCart) {
        const newProductCart = await this.ProductCartRepository.create({
          cartId: userHasCart.id,
          productId,
          quantity
        });
  
        await this.CartRepository.updateTotal({
          cartId: userHasCart.id,
          total:
            userHasCart.total + parseInt(newProductCart?.product.price as  string) ,
        });
  
        revalidatePath("/cart");
  
        return newProductCart;
      }
    }

    if (!userHasCart) {
      const newCart = await this.CartRepository.create(userId);
  
      const newProductCart = await this.ProductCartRepository.create({
        cartId: newCart?.id as string,
        productId,
        quantity
      });
  
      await this.CartRepository.updateTotal({
        cartId: newCart?.id,
        total:
          newCart?.total as number + parseInt(newProductCart?.product.price as  string) ,
      });
  
      revalidatePath("/cart");
  
      return newProductCart;
    }

  }
}

export { CreateProductCartCase };
