import { PrismaCartRepository } from "@/backend/repository/inPrisma/prismaCartRepository";
import { prismaClient } from "@/services/prismaClient";
import { GetCartByIdCase } from "./getCartByIdCase";
import { GetCartByIdController } from "./getCartByIdController";


export const getCartByIdFactory = () => {
  const prismaCartRepository = new PrismaCartRepository(prismaClient);
  const getCartCase = new GetCartByIdCase(prismaCartRepository);
  const getCartController = new GetCartByIdController(getCartCase);

  return getCartController;
};
