/*
  Warnings:

  - You are about to drop the column `country` on the `lead` table. All the data in the column will be lost.
  - You are about to drop the column `county` on the `lead` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `lead` DROP COLUMN `country`,
    DROP COLUMN `county`,
    MODIFY `status` VARCHAR(191) NULL,
    MODIFY `address1` VARCHAR(191) NULL,
    MODIFY `address2` VARCHAR(191) NULL,
    MODIFY `city` VARCHAR(191) NULL,
    MODIFY `customDescrip` VARCHAR(191) NULL,
    MODIFY `descrip` VARCHAR(191) NULL,
    MODIFY `homePhone` VARCHAR(191) NULL,
    MODIFY `otherPhone` VARCHAR(191) NULL,
    MODIFY `postalCode` VARCHAR(191) NULL;
