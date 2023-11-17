import { ICartRepository } from "@/backend/repository/ICartRepository";
import { IProductCartRepository } from "@/backend/repository/IProductCartRepository";

class DeleteProductCartCase {
  constructor(private productCartRepository: IProductCartRepository,private cartRepository: ICartRepository ) {}

  async execute(reference: string) {
    
    const deleteProductCart = await this.productCartRepository.delete(reference);

    const cart = await this.cartRepository.getById(deleteProductCart?.fk_id_cart as string)

    await this.cartRepository.updateTotal({
      cartId: deleteProductCart?.fk_id_cart,
      total:
        cart?.total as number - parseInt(deleteProductCart?.product.price as  string) ,
    });

    return deleteProductCart;
  }
}

export { DeleteProductCartCase };
