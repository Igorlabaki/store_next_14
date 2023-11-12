import { DeleteProductCase } from './deleteCase';

class DeleteProductController {
  constructor(private deleteProductCase: DeleteProductCase) {}

  async handle(reference: string) {
    const deleteProduct = await this.deleteProductCase.execute(reference);

    return deleteProduct;
  }
}

export { DeleteProductController };
