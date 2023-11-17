import { GetCartByIdCase } from './getCartByIdCase';

class GetCartByIdController {
  constructor(private getCartByIdCase: GetCartByIdCase) {}

  async handle(cartId: string) {
    const cartById = await this.getCartByIdCase.execute(cartId);

    return cartById;
  }
}

export { GetCartByIdController };
