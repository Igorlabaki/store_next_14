import { GetByProductIdCase } from './getByIdCase';

class GetByProductIdController {
  constructor(private getByIdCase: GetByProductIdCase) {}

  async handle(productId: string) {
    const productById = await this.getByIdCase.execute(productId);

    return productById;
  }
}

export { GetByProductIdController };
