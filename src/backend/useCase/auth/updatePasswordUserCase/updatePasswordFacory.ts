import { prismaClient } from '@/services/prismaClient';
import { UpdatePasswordCase } from './updatePasswordCase';
import { UpdatePasswordController } from './updatePasswordController';
import { PrismaUserRepository } from '@/backend/repository/inPrisma/prismaUserRepository';

export const updatePasswordFactory = () => {
  const prismaUserRepository = new PrismaUserRepository(prismaClient);
  const updatePasswordCase = new UpdatePasswordCase(prismaUserRepository);
  const registerUserController = new UpdatePasswordController(updatePasswordCase);

  return registerUserController;
};
