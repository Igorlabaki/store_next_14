import { prismaClient } from '@/services/prismaClient';
import { UpdateUserCase } from './updateCase';
import { UpdateUserController } from './updateUserController';
import { PrismaUserRepository } from '@/backend/repository/inPrisma/prismaUserRepository';

export const updateUserFactory = () => {
  const prismaUserRepository = new PrismaUserRepository(prismaClient);
  const updateUserCase = new UpdateUserCase(prismaUserRepository);
  const registerUserController = new UpdateUserController(updateUserCase);

  return registerUserController;
};
