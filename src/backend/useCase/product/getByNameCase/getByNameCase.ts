import { IProductRepository } from "@/backend/repository/IProductRepository";

class GetByProductNameCase {
  constructor(private ProductRepository: IProductRepository) {}

  async execute(name: string) {
    const productByName = await this.ProductRepository.getByName(name);

    return productByName;
  }
}

export { GetByProductNameCase };
