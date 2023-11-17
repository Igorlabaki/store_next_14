import { IListByBrandId, IProductRepository } from "@/backend/repository/IProductRepository";

class ListByBrandIdCase {
  constructor(private ProductRepository: IProductRepository) {}

  async execute({brandId,search}: IListByBrandId) {
    const productList = await this.ProductRepository.listByBrandId({brandId,search});

    return productList;
  } 
}

export { ListByBrandIdCase };
