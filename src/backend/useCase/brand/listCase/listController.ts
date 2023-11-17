
import { ListBrandCase } from './listCase';

class ListBrandController {
  constructor(private listBrandCase: ListBrandCase) {}

  async handle() {
    const brandList = await this.listBrandCase.execute();

    return brandList;
  }
}

export { ListBrandController };
