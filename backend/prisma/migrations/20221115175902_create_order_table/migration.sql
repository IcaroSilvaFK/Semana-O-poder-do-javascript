/*
  Warnings:

  - You are about to drop the column `quantiy` on the `orders` table. All the data in the column will be lost.
  - You are about to drop the `orders_and_products` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "orders_and_products" DROP CONSTRAINT "orders_and_products_order_id_fkey";

-- DropForeignKey
ALTER TABLE "orders_and_products" DROP CONSTRAINT "orders_and_products_product_id_fkey";

-- AlterTable
ALTER TABLE "orders" DROP COLUMN "quantiy";

-- DropTable
DROP TABLE "orders_and_products";

-- CreateTable
CREATE TABLE "product_order" (
    "id" TEXT NOT NULL,
    "product_id" TEXT NOT NULL,
    "order_id" TEXT NOT NULL,
    "quantity" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "product_order_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "product_order" ADD CONSTRAINT "product_order_product_id_fkey" FOREIGN KEY ("product_id") REFERENCES "products"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "product_order" ADD CONSTRAINT "product_order_order_id_fkey" FOREIGN KEY ("order_id") REFERENCES "orders"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
