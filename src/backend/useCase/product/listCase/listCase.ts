"use server"
import { IProductRepository } from "@/backend/repository/IProductRepository";

class ListProductCase {
  constructor(private ProductRepository: IProductRepository) {}

  async execute(search?: string) {
    const productList = await this.ProductRepository.list(search);

    return productList;
  } 
}

export { ListProductCase };
