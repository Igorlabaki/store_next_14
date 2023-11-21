"use server"
import { IListProduct, IProductRepository } from "@/backend/repository/IProductRepository";

class ListProductCase {
  constructor(private ProductRepository: IProductRepository) {}

  async execute(parms: IListProduct) {
    const productList = await this.ProductRepository.list(parms);

    return productList;
  } 
}

export { ListProductCase };
