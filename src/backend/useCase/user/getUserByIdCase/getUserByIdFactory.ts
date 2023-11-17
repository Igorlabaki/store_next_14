import { prismaClient } from '@/services/prismaClient';
import { GetUserByIdCase } from './getUserByIdCase';
import { GetUserByIdController } from './getUserByIdController';
import { PrismaUserRepository } from '@/backend/repository/inPrisma/prismaUserRepository';

export const getUserByIdFactory = () => {
  const prismaUserRepository = new PrismaUserRepository(prismaClient);
  const getUserCase = new GetUserByIdCase(prismaUserRepository);
  const getUserController = new GetUserByIdController(getUserCase);

  return getUserController;
};
