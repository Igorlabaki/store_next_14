import { prismaClient } from '@/services/prismaClient';
import { VerifyEmailCase } from './verifyEmailCase';
import { VerifyEmailController } from './verifyEmailController';

import { PrismaUserRepository } from '@/backend/repository/inPrisma/prismaUserRepository';

export const verifyEmailFactory = () => {
  const prismaUserRepository = new PrismaUserRepository(prismaClient);
  const verifyEmailCase = new VerifyEmailCase(prismaUserRepository);
  const verifyEmailController = new VerifyEmailController(verifyEmailCase);

  return verifyEmailController;
};
