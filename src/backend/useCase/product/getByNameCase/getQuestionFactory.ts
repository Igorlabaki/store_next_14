import { GetByProductNameCase } from "./getByNameCase";
import { prismaClient } from "@/services/prismaClient";
import { GetByProductNameController } from "./getByNameController";
import { PrismaProductRepository } from "@/backend/repository/inPrisma/prismaProductRepository";

export const getByProductFactory = () => {
  const prismaRepository = new PrismaProductRepository(prismaClient);
  const getByProductCase = new GetByProductNameCase(prismaRepository);
  const getByProductController = new GetByProductNameController(getByProductCase);

  return getByProductController;
};
