/*
  Warnings:

  - Added the required column `address1` to the `Lead` table without a default value. This is not possible if the table is not empty.
  - Added the required column `address2` to the `Lead` table without a default value. This is not possible if the table is not empty.
  - Added the required column `assessOnly` to the `Lead` table without a default value. This is not possible if the table is not empty.
  - Added the required column `city` to the `Lead` table without a default value. This is not possible if the table is not empty.
  - Added the required column `country` to the `Lead` table without a default value. This is not possible if the table is not empty.
  - Added the required column `county` to the `Lead` table without a default value. This is not possible if the table is not empty.
  - Added the required column `customDescrip` to the `Lead` table without a default value. This is not possible if the table is not empty.
  - Added the required column `descrip` to the `Lead` table without a default value. This is not possible if the table is not empty.
  - Added the required column `emailOpt` to the `Lead` table without a default value. This is not possible if the table is not empty.
  - Added the required column `enrich` to the `Lead` table without a default value. This is not possible if the table is not empty.
  - Added the required column `examPrep` to the `Lead` table without a default value. This is not possible if the table is not empty.
  - Added the required column `home` to the `Lead` table without a default value. This is not possible if the table is not empty.
  - Added the required column `homePhone` to the `Lead` table without a default value. This is not possible if the table is not empty.
  - Added the required column `homeSchool` to the `Lead` table without a default value. This is not possible if the table is not empty.
  - Added the required column `other` to the `Lead` table without a default value. This is not possible if the table is not empty.
  - Added the required column `otherPhone` to the `Lead` table without a default value. This is not possible if the table is not empty.
  - Added the required column `postalCode` to the `Lead` table without a default value. This is not possible if the table is not empty.
  - Added the required column `regularPro` to the `Lead` table without a default value. This is not possible if the table is not empty.
  - Added the required column `summerPro` to the `Lead` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `lead` ADD COLUMN `address1` VARCHAR(191) NOT NULL,
    ADD COLUMN `address2` VARCHAR(191) NOT NULL,
    ADD COLUMN `assessOnly` BOOLEAN NOT NULL,
    ADD COLUMN `city` VARCHAR(191) NOT NULL,
    ADD COLUMN `country` VARCHAR(191) NOT NULL,
    ADD COLUMN `county` VARCHAR(191) NOT NULL,
    ADD COLUMN `customDescrip` VARCHAR(191) NOT NULL,
    ADD COLUMN `descrip` VARCHAR(191) NOT NULL,
    ADD COLUMN `emailOpt` BOOLEAN NOT NULL,
    ADD COLUMN `enrich` BOOLEAN NOT NULL,
    ADD COLUMN `examPrep` BOOLEAN NOT NULL,
    ADD COLUMN `home` BOOLEAN NOT NULL,
    ADD COLUMN `homePhone` VARCHAR(191) NOT NULL,
    ADD COLUMN `homeSchool` BOOLEAN NOT NULL,
    ADD COLUMN `other` BOOLEAN NOT NULL,
    ADD COLUMN `otherPhone` VARCHAR(191) NOT NULL,
    ADD COLUMN `postalCode` VARCHAR(191) NOT NULL,
    ADD COLUMN `regularPro` BOOLEAN NOT NULL,
    ADD COLUMN `summerPro` BOOLEAN NOT NULL;
