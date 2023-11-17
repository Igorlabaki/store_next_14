"use server"
import { ICartRepository } from '@/backend/repository/ICartRepository';

class GetCartByIdCase {
  constructor(private CartRepository: ICartRepository) {}

  async execute(cartId: string) {
    const entityExists = await this.CartRepository.getById(cartId);

    return entityExists;
  }
}

export { GetCartByIdCase };
