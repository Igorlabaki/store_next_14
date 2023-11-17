import { ICartRepository } from "@/backend/repository/ICartRepository";
import { IProductCartRepository } from "@/backend/repository/IProductCartRepository";
import { revalidatePath } from "next/cache";

class RemoveProductCartCase {
  constructor(
    private cartRepository: ICartRepository,
    private productCartRepository: IProductCartRepository
  ) {}

  async execute(productCartId: string) {

    const productCartById  = await this.productCartRepository.getById(productCartId);
    
    const cartByid = await this.cartRepository.getById(productCartById?.fk_id_cart as string)

    if(productCartById && cartByid){
      await this.cartRepository.updateTotal({cartId: cartByid?.id as string, total: cartByid?.total - parseInt(productCartById?.product.price) * productCartById?.quantity})

      await this.productCartRepository.delete(productCartById.id)

      revalidatePath("/cart");
  
      return productCartById;
    }
    return null
  }
}

export { RemoveProductCartCase };
