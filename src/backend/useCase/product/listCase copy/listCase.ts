"use server"
import { IProductRepository } from "../../../repository/IProductRepository";

class ListProductCase {
  constructor(private ProductRepository: IProductRepository) {}

  async execute(search?: string) {
    const productList = await this.ProductRepository.listByName(search);

    return productList;
  } 
}

export { ListProductCase };
