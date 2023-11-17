import { GetListByCartIdCase } from './getListByCartIdCase';

class GetListByCartIdController {
  constructor(private getListByCartIdCase: GetListByCartIdCase) {}

  async handle(cartId: string) {
    const listByCartId = await this.getListByCartIdCase.execute(cartId);

    return listByCartId;
  }
}

export { GetListByCartIdController };
