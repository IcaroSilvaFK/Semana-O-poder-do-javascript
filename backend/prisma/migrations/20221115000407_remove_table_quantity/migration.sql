/*
  Warnings:

  - You are about to drop the `order_quantity` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `quantiy` to the `orders` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "order_quantity" DROP CONSTRAINT "order_quantity_oderId_fkey";

-- AlterTable
ALTER TABLE "orders" ADD COLUMN     "quantiy" INTEGER NOT NULL;

-- DropTable
DROP TABLE "order_quantity";
