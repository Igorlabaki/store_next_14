import { ICartRepository } from "@/backend/repository/ICartRepository";
import { IProductCartRepository } from "@/backend/repository/IProductCartRepository";
import { revalidatePath } from "next/cache";

class RemoveProductCartCase {
  constructor(
    private cartRepository: ICartRepository,
    private productCartRepository: IProductCartRepository
  ) {}

  async execute(userId: string, productId: string, quantity: number) {

    const cartAlreadyExist  = await this.cartRepository.getByUserId(userId);
  
    if (cartAlreadyExist) {
      const productAlreadyInCart =
      await this.productCartRepository.verifyIfProductAlreadyInCart({
        cartId: cartAlreadyExist.id,
        productId,
      });

      if(productAlreadyInCart){
        const productCartUpdated =
          await this.productCartRepository.updateQuantity({
            producCartId: productAlreadyInCart.id,
            quantity,
          });

        await this.cartRepository.updateTotal({
          cartId: cartAlreadyExist.id,
          total:
          cartAlreadyExist.total - parseInt(productAlreadyInCart.product.price),
        });

        revalidatePath("/cart");

        return productCartUpdated;
      }

    }
  }
}

export { RemoveProductCartCase };
