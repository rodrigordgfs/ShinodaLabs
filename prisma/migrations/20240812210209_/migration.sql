/*
  Warnings:

  - Added the required column `description` to the `education` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "education" ADD COLUMN     "description" TEXT NOT NULL;
