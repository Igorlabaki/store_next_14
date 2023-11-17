"use server"
import { ICartRepository } from '@/backend/repository/ICartRepository';

class GetCartByUserIdCase {
  constructor(private CartRepository: ICartRepository) {}

  async execute(userId: string) {
    const entityExists = await this.CartRepository.getByUserId(userId);

    return entityExists;
  }
}

export { GetCartByUserIdCase };
