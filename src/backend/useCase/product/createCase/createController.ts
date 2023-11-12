import { CreateProductCase } from "./createCase";
import { ICreateProductParams } from "@/backend/repository/IProduct";

class CreateProductController {
  constructor(private createProductCase: CreateProductCase) {}

  async handle(data: ICreateProductParams) {
    const newProduct = await this.createProductCase.execute(data);
    return newProduct;
  }
}

export { CreateProductController };
