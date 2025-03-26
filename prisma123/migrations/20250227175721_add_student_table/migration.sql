-- CreateTable
CREATE TABLE `Student` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `fname` VARCHAR(191) NOT NULL,
    `lname` VARCHAR(191) NOT NULL,
    `year` VARCHAR(191) NULL,
    `schoolYear` VARCHAR(191) NULL,
    `school` VARCHAR(191) NULL,
    `teacher` VARCHAR(191) NULL,
    `gender` VARCHAR(191) NULL,
    `birth` VARCHAR(191) NULL,
    `account` VARCHAR(191) NULL,
    `virCen` VARCHAR(191) NULL,
    `descript` VARCHAR(191) NULL,
    `medicInfo` VARCHAR(191) NULL,
    `cenDir` VARCHAR(191) NULL,
    `subMat` VARCHAR(191) NULL,
    `stuNote` VARCHAR(191) NULL,
    `mediaRele` BOOLEAN NULL,
    `leaveUnder` BOOLEAN NULL,
    `contactTeach` BOOLEAN NULL,
    `scholarShip` BOOLEAN NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
