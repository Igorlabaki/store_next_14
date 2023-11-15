import { prismaClient } from '@/services/prismaClient';
import { AuthenticateAccountCase } from './authenticateAccountCase';
import { AuthenticateAccountController } from './authenticateAccountControler';
import { PrismaUserRepository } from '@/backend/repository/inPrisma/prismaUserRepository';

export const authenticateAccountFactory = () => {
  const prismaUserRepository = new PrismaUserRepository(prismaClient);
  const authenticateAccountCase = new AuthenticateAccountCase(prismaUserRepository);
  const authenticateAccountController = new AuthenticateAccountController(authenticateAccountCase);

  return authenticateAccountController;
};
