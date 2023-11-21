"use server"
import { IProductRepository } from "@/backend/repository/IProductRepository";

class ListByNameProductCase {
  constructor(private ProductRepository: IProductRepository) {}

  async execute(search?: string) {
    const productListByName = await this.ProductRepository.listByName(search);

    return productListByName;
  } 
}

export { ListByNameProductCase };
