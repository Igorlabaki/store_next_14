"use server"
import { ListByNameProductCase } from './listByNameCase';

class ListByNameProductController {
  constructor(private listByNameProductCase: ListByNameProductCase) {}

  async handle(search?: string) {
    const productListByName = await this.listByNameProductCase.execute(search);

    return productListByName;
  }
}

export { ListByNameProductController };
