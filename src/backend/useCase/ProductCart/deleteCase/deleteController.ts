import { DeleteProductCartCase } from './deleteCase';

class DeleteProductCartController {
  constructor(private deleteProductCartCase: DeleteProductCartCase) {}

  async handle(reference: string) {
    const deleteProductCart = await this.deleteProductCartCase.execute(reference);

    return deleteProductCart;
  }
}

export { DeleteProductCartController };
