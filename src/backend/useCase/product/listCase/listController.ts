import { ListProductCase } from './listCase';

class ListProductController {
  constructor(private listProductCase: ListProductCase) {}

  async handle() {
    const productList = await this.listProductCase.execute();

    return productList;
  }
}

export { ListProductController };
