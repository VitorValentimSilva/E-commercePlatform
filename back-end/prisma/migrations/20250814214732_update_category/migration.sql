/*
  Warnings:

  - You are about to drop the column `level` on the `Category` table. All the data in the column will be lost.
  - You are about to drop the column `parentId` on the `Category` table. All the data in the column will be lost.
  - You are about to drop the column `path` on the `Category` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "public"."Category" DROP CONSTRAINT "Category_parentId_fkey";

-- DropIndex
DROP INDEX "public"."Category_parentId_idx";

-- DropIndex
DROP INDEX "public"."Category_path_idx";

-- AlterTable
ALTER TABLE "public"."Category" DROP COLUMN "level",
DROP COLUMN "parentId",
DROP COLUMN "path";
