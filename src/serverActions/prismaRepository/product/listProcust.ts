import { prismaClient } from "@/services/prismaClient";

interface ListProductParams{
    query: any;
}

export default async function listProduct({query}:ListProductParams) {
  const productList = await prismaClient.product.findMany(query())

  return productList
}
