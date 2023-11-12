/*
  Warnings:

  - You are about to drop the column `brand` on the `product` table. All the data in the column will be lost.
  - Added the required column `fk_brand_id` to the `Product` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `product` DROP COLUMN `brand`,
    ADD COLUMN `fk_brand_id` VARCHAR(191) NOT NULL;

-- CreateTable
CREATE TABLE `Brand` (
    `id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateIndex
CREATE INDEX `Product_fk_brand_id_idx` ON `Product`(`fk_brand_id`);

-- AddForeignKey
ALTER TABLE `Product` ADD CONSTRAINT `Product_fk_brand_id_fkey` FOREIGN KEY (`fk_brand_id`) REFERENCES `Brand`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
