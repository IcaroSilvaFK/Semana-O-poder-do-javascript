/*
  Warnings:

  - You are about to drop the column `imagePath` on the `products` table. All the data in the column will be lost.
  - Added the required column `iamge_path` to the `products` table without a default value. This is not possible if the table is not empty.
  - Added the required column `price` to the `products` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "products" DROP COLUMN "imagePath",
ADD COLUMN     "iamge_path" TEXT NOT NULL,
ADD COLUMN     "price" DOUBLE PRECISION NOT NULL;
