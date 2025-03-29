/*
  Warnings:

  - You are about to drop the column `name` on the `school` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `school` DROP COLUMN `name`,
    ADD COLUMN `name_s` VARCHAR(191) NULL;
