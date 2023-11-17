import { CreateProductCartCase } from './createCase';

class CreateProductCartController {
  constructor(private createProductCartCase: CreateProductCartCase) {}

  async handle(userId: string, productId:string, quantity: number) {
    const newProductCart = await this.createProductCartCase.execute(userId,productId,quantity);

    return newProductCart;
  }
}

export { CreateProductCartController };
