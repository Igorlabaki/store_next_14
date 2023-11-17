"use server"
import { IProductRepository } from "@/backend/repository/IProductRepository";

class GetByProductIdCase {
  constructor(private ProductRepository: IProductRepository) {}

  async execute(productId: string) {
    const productById = await this.ProductRepository.getById(productId);

    return productById;
  }
}

export { GetByProductIdCase };
