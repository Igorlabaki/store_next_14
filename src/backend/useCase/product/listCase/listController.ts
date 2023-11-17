"use server"
import { ListProductCase } from './listCase';

class ListProductController {
  constructor(private listProductCase: ListProductCase) {}

  async handle(search?: string) {
    const productList = await this.listProductCase.execute(search);

    return productList;
  }
}

export { ListProductController };
