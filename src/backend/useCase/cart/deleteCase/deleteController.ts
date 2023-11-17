import { DeleteCartCase } from './deleteCase';

class DeleteCartController {
  constructor(private deleteCartCase: DeleteCartCase) {}

  async handle(reference: string) {
    const deleteCart = await this.deleteCartCase.execute(reference);

    return deleteCart;
  }
}

export { DeleteCartController };
