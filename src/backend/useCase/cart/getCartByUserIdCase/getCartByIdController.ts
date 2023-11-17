import { GetCartByUserIdCase } from './getCartByUserIdCase';

class GetCartByUserIdController {
  constructor(private getCartByUserIdCase: GetCartByUserIdCase) {}

  async handle(CartId: string) {
    const cartById = await this.getCartByUserIdCase.execute(CartId);

    return cartById;
  }
}

export { GetCartByUserIdController };
