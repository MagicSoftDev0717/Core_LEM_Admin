-- CreateTable
CREATE TABLE `School` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `level` VARCHAR(191) NULL,
    `type` VARCHAR(191) NULL,
    `enroll` VARCHAR(191) NULL,
    `site` VARCHAR(191) NULL,
    `sitePsta` VARCHAR(191) NULL,
    `district` VARCHAR(191) NULL,
    `email` VARCHAR(191) NOT NULL,
    `status` VARCHAR(191) NULL,
    `address1` VARCHAR(191) NULL,
    `address2` VARCHAR(191) NULL,
    `city` VARCHAR(191) NULL,
    `county` VARCHAR(191) NULL,
    `country` VARCHAR(191) NULL,
    `postalCode` INTEGER NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    UNIQUE INDEX `School_email_key`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
