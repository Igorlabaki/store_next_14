import { GetByProductNameCase } from './getByNameCase';

class GetByProductNameController {
  constructor(private getByNameCase: GetByProductNameCase) {}

  async handle(Name: string) {
    const productByName = await this.getByNameCase.execute(Name);

    return productByName;
  }
}

export { GetByProductNameController };
