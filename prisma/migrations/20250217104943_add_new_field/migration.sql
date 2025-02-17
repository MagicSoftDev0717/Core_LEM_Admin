/*
  Warnings:

  - Added the required column `Lead` to the `Lead` table without a default value. This is not possible if the table is not empty.
  - Added the required column `mobile_phone` to the `Lead` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `lead` ADD COLUMN `Lead` VARCHAR(191) NOT NULL,
    ADD COLUMN `mobile_phone` VARCHAR(191) NOT NULL;
