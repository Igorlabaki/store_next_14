import { prismaClient } from '@/services/prismaClient';
import { CreateNewUserCase } from './createNewUserCase';
import { CreateUserController } from './createNewUserController';
import { PrismaUserRepository } from '@/backend/repository/inPrisma/prismaUserRepository';

export const createUserFactory = () => {
  const prismaUserRepository = new PrismaUserRepository(prismaClient);
  const registerUsersCase = new CreateNewUserCase(prismaUserRepository);
  const registerUserController = new CreateUserController(registerUsersCase);

  return registerUserController;
};
