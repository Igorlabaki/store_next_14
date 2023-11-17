"use server"
import { IBrandRepository } from "@/backend/repository/IBrandRepository";

class ListBrandCase {
  constructor(private BrandRepository: IBrandRepository) {}

  async execute() {
    const brandList = await this.BrandRepository.list();

    return brandList;
  } 
}

export { ListBrandCase };
