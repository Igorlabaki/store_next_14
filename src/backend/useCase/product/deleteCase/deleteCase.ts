import { IProductRepository } from "@/backend/repository/IProduct";

class DeleteProductCase {
  constructor(private ProductRepository: IProductRepository) {}

  async execute(reference: string) {
    const deleteProduct = await this.ProductRepository.delete(reference);

    return deleteProduct;
  }
}

export { DeleteProductCase };
