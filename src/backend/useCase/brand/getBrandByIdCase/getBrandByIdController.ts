import { GetBrandByIdCase } from './getBrandByIdCase';

class GetBrandByIdController {
  constructor(private getBrandByIdCase: GetBrandByIdCase) {}

  async handle(BrandId: string) {
    const brandById = await this.getBrandByIdCase.execute(BrandId);

    return brandById;
  }
}

export { GetBrandByIdController };
