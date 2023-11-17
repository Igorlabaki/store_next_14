import { VerifyIfProductCartExistsCase } from './verifyIfProductCartExistsCase';
import { IVerifyIfProductAlreadyInCratParams } from '@/backend/repository/IProductCartRepository';

class VerifyIfProductCartExistsController {
  constructor(private verifyIfProductCartExistsCase: VerifyIfProductCartExistsCase) {}

  async handle(params: IVerifyIfProductAlreadyInCratParams) {
    const user = await this.verifyIfProductCartExistsCase.execute(params);

    return user;
  }
}

export { VerifyIfProductCartExistsController };
