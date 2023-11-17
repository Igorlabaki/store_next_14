import { GetByProductIdCase } from "./getByIdCase";
import { prismaClient } from "@/services/prismaClient";
import { GetByProductIdController } from "./getByIdController";
import { PrismaProductRepository } from "@/backend/repository/inPrisma/prismaProductRepository";

export const getProductByIdFactory = () => {
  const prismaRepository = new PrismaProductRepository(prismaClient);
  const getByIdProductCase = new GetByProductIdCase(prismaRepository);
  const getByIdProductController = new GetByProductIdController(getByIdProductCase);

  return getByIdProductController;
};
