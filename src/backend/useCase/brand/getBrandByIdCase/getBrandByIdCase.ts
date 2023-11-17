"use server"
import { IBrandRepository } from '@/backend/repository/IBrandRepository';

class GetBrandByIdCase {
  constructor(private BrandRepository: IBrandRepository) {}

  async execute(BrandId: string) {
    const entityExists = await this.BrandRepository.getById(BrandId);

    return entityExists;
  }
}

export { GetBrandByIdCase };
