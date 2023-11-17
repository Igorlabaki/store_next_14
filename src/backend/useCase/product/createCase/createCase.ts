import { ICreateProductParams, IProductRepository } from "@/backend/repository/IProductRepository";

class CreateProductCase {
  constructor(private ProductRepository: IProductRepository) {}
  async execute(data: ICreateProductParams) {
    const newProduct = await this.ProductRepository.create(data);

    return newProduct;
  }
}

export { CreateProductCase };
