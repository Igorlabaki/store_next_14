import { IProductCartRepository } from "@/backend/repository/IProductCartRepository";

class GetListByCartIdCase {
  constructor(private ProductCartRepository: IProductCartRepository) {}

  async execute(cartIdId: string) {
    const listByCartId = await this.ProductCartRepository.listByCartId(cartIdId);

    return listByCartId;
  }
}

export { GetListByCartIdCase };
