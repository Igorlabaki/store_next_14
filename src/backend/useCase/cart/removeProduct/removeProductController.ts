import { RemoveProductCartCase } from './removeProductCase';

class RemoveProductController {
  constructor(private removeProductCartCase: RemoveProductCartCase) {}

  async handle(productCartId: string) {
    const removeProduct = await this.removeProductCartCase.execute(productCartId);

    return removeProduct;
  }
}

export { RemoveProductController };
