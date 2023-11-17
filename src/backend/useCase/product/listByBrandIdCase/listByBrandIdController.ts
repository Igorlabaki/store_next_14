
import { IListByBrandId } from '@/backend/repository/IProductRepository';
import { ListByBrandIdCase } from './listByBrandIdCase';

class ListByBrandIdController {
  constructor(private listByBrandIdCase: ListByBrandIdCase) {}

  async handle({brandId,search}: IListByBrandId) {
    const productList = await this.listByBrandIdCase.execute({brandId,search});

    return productList;
  }
}

export { ListByBrandIdController };
