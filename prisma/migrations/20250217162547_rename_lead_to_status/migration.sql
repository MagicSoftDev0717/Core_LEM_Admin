/*
  Warnings:

  - You are about to drop the column `Lead` on the `lead` table. All the data in the column will be lost.
  - You are about to drop the column `mobile_phone` on the `lead` table. All the data in the column will be lost.
  - Added the required column `mobile` to the `Lead` table without a default value. This is not possible if the table is not empty.
  - Added the required column `status` to the `Lead` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `lead` DROP COLUMN `Lead`,
    DROP COLUMN `mobile_phone`,
    ADD COLUMN `mobile` VARCHAR(191) NOT NULL,
    ADD COLUMN `status` VARCHAR(191) NOT NULL;
