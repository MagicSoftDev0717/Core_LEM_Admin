/*
  Warnings:

  - You are about to drop the column `status` on the `school` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `school` DROP COLUMN `status`,
    ADD COLUMN `descrip` VARCHAR(191) NULL,
    ADD COLUMN `mobile` VARCHAR(191) NULL;
