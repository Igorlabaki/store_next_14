import { prismaClient } from '@/services/prismaClient';
import { DeleteCartCase } from './deleteCase';
import { DeleteCartController } from './deleteController';
import { PrismaCartRepository } from '@/backend/repository/inPrisma/prismaCartRepository';

export const deleteCartFactory = () => {
  const prismaCartRepository = new PrismaCartRepository(prismaClient);
  const deleteCartsCase = new DeleteCartCase(prismaCartRepository);
  const deleteCartController = new DeleteCartController(deleteCartsCase);

  return deleteCartController;
};
