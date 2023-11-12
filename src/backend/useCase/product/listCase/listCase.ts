import { IProductRepository } from "@/backend/repository/IProduct";

class ListProductCase {
  constructor(private ProductRepository: IProductRepository) {}

  async execute() {
    const productList = await this.ProductRepository.list();

    return productList;
  }
}

export { ListProductCase };
