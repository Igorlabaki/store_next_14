import { ICartRepository } from "@/backend/repository/ICartRepository";

class DeleteCartCase {
  constructor(private CartRepository: ICartRepository) {}

  async execute(reference: string) {
    const deleteCart = await this.CartRepository.delete(reference);

    return deleteCart;
  }
}

export { DeleteCartCase };
