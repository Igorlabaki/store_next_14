import { CreateProductCartCase } from "./createCase";
import { prismaClient } from "@/services/prismaClient";
import { CreateProductCartController } from "./createController";
import { PrismaCartRepository } from "@/backend/repository/inPrisma/prismaCartRepository";
import { PrismaProductCartRepository } from "@/backend/repository/inPrisma/prismaProductCartRepository";

export const createProductCartFactory = () => {
  const prismaCartRepository = new PrismaCartRepository(prismaClient);
  const prismaProductCartRepository = new PrismaProductCartRepository(prismaClient);
  const createProductCartProductCase = new CreateProductCartCase(prismaCartRepository, prismaProductCartRepository);
  const createProductCartProductController = new CreateProductCartController(createProductCartProductCase);

  return createProductCartProductController;
};
