"use server";

import { prismaClient } from "@/services/prismaClient";

export default async function brandList() {
  const brandList = await prismaClient.brand.findMany();

  return brandList;
}
