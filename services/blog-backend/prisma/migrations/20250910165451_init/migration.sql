/*
  Warnings:

  - You are about to drop the column `subscriberId` on the `Subscribers` table. All the data in the column will be lost.
  - You are about to drop the column `userId` on the `Subscribers` table. All the data in the column will be lost.
  - You are about to drop the `Comments` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Draft` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `SaveBlog` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `coverImg` to the `Blog` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updateAt` to the `Blog` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "public"."Blog" DROP CONSTRAINT "Blog_userId_fkey";

-- DropForeignKey
ALTER TABLE "public"."Comments" DROP CONSTRAINT "Comments_blogId_fkey";

-- DropForeignKey
ALTER TABLE "public"."Comments" DROP CONSTRAINT "Comments_userId_fkey";

-- DropForeignKey
ALTER TABLE "public"."Draft" DROP CONSTRAINT "Draft_userId_fkey";

-- DropForeignKey
ALTER TABLE "public"."Likes" DROP CONSTRAINT "Likes_userId_fkey";

-- DropForeignKey
ALTER TABLE "public"."SaveBlog" DROP CONSTRAINT "SaveBlog_userId_fkey";

-- DropForeignKey
ALTER TABLE "public"."Subscribers" DROP CONSTRAINT "Subscribers_userId_fkey";

-- AlterTable
ALTER TABLE "public"."Blog" ADD COLUMN     "coverImg" TEXT NOT NULL,
ADD COLUMN     "updateAt" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "public"."Subscribers" DROP COLUMN "subscriberId",
DROP COLUMN "userId",
ADD COLUMN     "subscriberName" TEXT;

-- DropTable
DROP TABLE "public"."Comments";

-- DropTable
DROP TABLE "public"."Draft";

-- DropTable
DROP TABLE "public"."SaveBlog";

-- DropTable
DROP TABLE "public"."User";
