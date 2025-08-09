/*
  Warnings:

  - You are about to drop the column `name` on the `User` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[namePlace]` on the table `User` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `nameFull` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `namePlace` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "public"."User" DROP COLUMN "name",
ADD COLUMN     "nameFull" TEXT NOT NULL,
ADD COLUMN     "namePlace" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "User_namePlace_key" ON "public"."User"("namePlace");
