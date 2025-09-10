/*
  Warnings:

  - You are about to drop the column `projectDescription` on the `Projects` table. All the data in the column will be lost.
  - You are about to drop the column `projectImg` on the `Projects` table. All the data in the column will be lost.
  - You are about to drop the column `projectTitle` on the `Projects` table. All the data in the column will be lost.
  - Added the required column `category` to the `Projects` table without a default value. This is not possible if the table is not empty.
  - Added the required column `description` to the `Projects` table without a default value. This is not possible if the table is not empty.
  - Added the required column `imgUrl` to the `Projects` table without a default value. This is not possible if the table is not empty.
  - Added the required column `status` to the `Projects` table without a default value. This is not possible if the table is not empty.
  - Added the required column `title` to the `Projects` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "public"."Status" AS ENUM ('ACTIVE', 'ONGOING', 'COMPLETED', 'DROPPED');

-- AlterTable
ALTER TABLE "public"."Projects" DROP COLUMN "projectDescription",
DROP COLUMN "projectImg",
DROP COLUMN "projectTitle",
ADD COLUMN     "category" TEXT NOT NULL,
ADD COLUMN     "description" TEXT NOT NULL,
ADD COLUMN     "imgUrl" TEXT NOT NULL,
ADD COLUMN     "status" "public"."Status" NOT NULL,
ADD COLUMN     "title" TEXT NOT NULL;
