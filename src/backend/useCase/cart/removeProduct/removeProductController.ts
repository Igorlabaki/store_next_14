import { RemoveProductCartCase } from './removeProductCase';

class RemoveProductController {
  constructor(private removeProductCartCase: RemoveProductCartCase) {}

  async handle(userId: string, productId: string, quantity: number) {
    const removeProduct = await this.removeProductCartCase.execute(userId, productId, quantity);

    return removeProduct;
  }
}

export { RemoveProductController };
