"use server"
import { IListProduct } from '@/backend/repository/IProductRepository';
import { ListProductCase } from './listCase';

class ListProductController {
  constructor(private listProductCase: ListProductCase) {}

  async handle(parms: IListProduct) {
    const productList = await this.listProductCase.execute(parms);

    return productList;
  }
}

export { ListProductController };
