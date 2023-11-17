"use server"
import { IUserRepository } from '@/backend/repository/IUserRepository';

class GetUserByIdCase {
  constructor(private userRepository: IUserRepository) {}

  async execute(userId: string) {
    const entityExists = await this.userRepository.getById(userId);

    return entityExists;
  }
}

export { GetUserByIdCase };
