/*
  Warnings:

  - Added the required column `demoVideo` to the `Projects` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `Projects` table without a default value. This is not possible if the table is not empty.
  - Added the required column `webUrl` to the `Projects` table without a default value. This is not possible if the table is not empty.
  - Made the column `projectImg` on table `Projects` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "public"."Projects" ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "demoVideo" TEXT NOT NULL,
ADD COLUMN     "techStack" TEXT[],
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "webUrl" TEXT NOT NULL,
ALTER COLUMN "projectImg" SET NOT NULL;
