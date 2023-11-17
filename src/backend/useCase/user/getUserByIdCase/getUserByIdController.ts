import { GetUserByIdCase } from './getUserByIdCase';

class GetUserByIdController {
  constructor(private getUserByIdCase: GetUserByIdCase) {}

  async handle(userId: string) {
    const user = await this.getUserByIdCase.execute(userId);

    return user;
  }
}

export { GetUserByIdController };
