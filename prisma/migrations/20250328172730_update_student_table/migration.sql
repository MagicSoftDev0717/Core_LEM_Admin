/*
  Warnings:

  - You are about to drop the column `account` on the `student` table. All the data in the column will be lost.
  - You are about to drop the column `cenDir` on the `student` table. All the data in the column will be lost.
  - You are about to drop the column `contactTeach` on the `student` table. All the data in the column will be lost.
  - You are about to drop the column `descript` on the `student` table. All the data in the column will be lost.
  - You are about to drop the column `leaveUnder` on the `student` table. All the data in the column will be lost.
  - You are about to drop the column `mediaRele` on the `student` table. All the data in the column will be lost.
  - You are about to drop the column `medicInfo` on the `student` table. All the data in the column will be lost.
  - You are about to drop the column `scholarShip` on the `student` table. All the data in the column will be lost.
  - You are about to drop the column `school` on the `student` table. All the data in the column will be lost.
  - You are about to drop the column `schoolYear` on the `student` table. All the data in the column will be lost.
  - You are about to drop the column `stuNote` on the `student` table. All the data in the column will be lost.
  - You are about to drop the column `subMat` on the `student` table. All the data in the column will be lost.
  - You are about to drop the column `teacher` on the `student` table. All the data in the column will be lost.
  - You are about to drop the column `virCen` on the `student` table. All the data in the column will be lost.
  - You are about to drop the column `year` on the `student` table. All the data in the column will be lost.
  - Made the column `gender` on table `student` required. This step will fail if there are existing NULL values in that column.
  - Made the column `birth` on table `student` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE `student` DROP COLUMN `account`,
    DROP COLUMN `cenDir`,
    DROP COLUMN `contactTeach`,
    DROP COLUMN `descript`,
    DROP COLUMN `leaveUnder`,
    DROP COLUMN `mediaRele`,
    DROP COLUMN `medicInfo`,
    DROP COLUMN `scholarShip`,
    DROP COLUMN `school`,
    DROP COLUMN `schoolYear`,
    DROP COLUMN `stuNote`,
    DROP COLUMN `subMat`,
    DROP COLUMN `teacher`,
    DROP COLUMN `virCen`,
    DROP COLUMN `year`,
    ADD COLUMN `a_hs` VARCHAR(191) NULL,
    ADD COLUMN `a_ics` VARCHAR(191) NULL,
    ADD COLUMN `a_ies` VARCHAR(191) NULL,
    ADD COLUMN `a_ims` VARCHAR(191) NULL,
    ADD COLUMN `a_pschool` VARCHAR(191) NULL,
    ADD COLUMN `a_sschool` VARCHAR(191) NULL,
    ADD COLUMN `a_yeargrp` VARCHAR(191) NULL,
    ADD COLUMN `allerigies` VARCHAR(191) NULL,
    ADD COLUMN `l_hs` VARCHAR(191) NULL,
    ADD COLUMN `l_ics` VARCHAR(191) NULL,
    ADD COLUMN `l_ies` VARCHAR(191) NULL,
    ADD COLUMN `l_ims` VARCHAR(191) NULL,
    ADD COLUMN `l_otutor` VARCHAR(191) NULL,
    ADD COLUMN `l_pcentre` VARCHAR(191) NULL,
    ADD COLUMN `l_ptutor` VARCHAR(191) NULL,
    ADD COLUMN `l_scentre` VARCHAR(191) NULL,
    ADD COLUMN `l_startdate` VARCHAR(191) NULL,
    ADD COLUMN `pguardian` VARCHAR(191) NULL,
    ADD COLUMN `religion` VARCHAR(191) NULL,
    ADD COLUMN `sguardian` VARCHAR(191) NULL,
    MODIFY `gender` VARCHAR(191) NOT NULL,
    MODIFY `birth` VARCHAR(191) NOT NULL;
