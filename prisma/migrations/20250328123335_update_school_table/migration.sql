/*
  Warnings:

  - You are about to drop the column `name_s` on the `school` table. All the data in the column will be lost.
  - Added the required column `sname` to the `School` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `school` DROP COLUMN `name_s`,
    ADD COLUMN `sname` VARCHAR(191) NOT NULL;
