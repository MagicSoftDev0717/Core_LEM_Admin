-- CreateTable
CREATE TABLE `Teacher` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `fname` VARCHAR(191) NOT NULL,
    `lname` VARCHAR(191) NOT NULL,
    `gender` VARCHAR(191) NULL,
    `birth` VARCHAR(191) NULL,
    `address1` VARCHAR(191) NULL,
    `address2` VARCHAR(191) NULL,
    `city` VARCHAR(191) NULL,
    `county` VARCHAR(191) NULL,
    `country` VARCHAR(191) NULL,
    `postalCode` INTEGER NULL,
    `primarySc` VARCHAR(191) NULL,
    `secondarySc` VARCHAR(191) NULL,
    `collegeForm` VARCHAR(191) NULL,
    `undergraU` VARCHAR(191) NULL,
    `postgraU` VARCHAR(191) NULL,
    `phdU` VARCHAR(191) NULL,
    `academicY` INTEGER NULL,
    `curStu` VARCHAR(191) NULL,
    `religion` VARCHAR(191) NULL,
    `allergies` VARCHAR(191) NULL,
    `descript` VARCHAR(191) NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
