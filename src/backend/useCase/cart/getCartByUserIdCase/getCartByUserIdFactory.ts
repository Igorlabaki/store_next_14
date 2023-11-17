import { PrismaCartRepository } from "@/backend/repository/inPrisma/prismaCartRepository";
import { prismaClient } from "@/services/prismaClient";
import { GetCartByUserIdCase } from "./getCartByUserIdCase";
import { GetCartByUserIdController } from "./getCartByIdController";


export const getCartByUserIdFactory = () => {
  const prismaCartRepository = new PrismaCartRepository(prismaClient);
  const getCartCase = new GetCartByUserIdCase(prismaCartRepository);
  const getCartController = new GetCartByUserIdController(getCartCase);

  return getCartController;
};
