"use server"
import { IProductCartRepository, IVerifyIfProductAlreadyInCratParams } from '@/backend/repository/IProductCartRepository';

class VerifyIfProductCartExistsCase {
  constructor(private ProductCartRepository: IProductCartRepository) {}

  async execute(params: IVerifyIfProductAlreadyInCratParams) {
    const entityExists = await this.ProductCartRepository.verifyIfProductAlreadyInCart(params);

    return entityExists;
  }
}

export { VerifyIfProductCartExistsCase };
