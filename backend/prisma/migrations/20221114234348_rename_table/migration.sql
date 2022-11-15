/*
  Warnings:

  - You are about to drop the `order_and_products` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "order_and_products" DROP CONSTRAINT "order_and_products_order_id_fkey";

-- DropForeignKey
ALTER TABLE "order_and_products" DROP CONSTRAINT "order_and_products_product_id_fkey";

-- DropTable
DROP TABLE "order_and_products";

-- CreateTable
CREATE TABLE "orders_and_products" (
    "id" TEXT NOT NULL,
    "order_id" TEXT NOT NULL,
    "product_id" TEXT NOT NULL,

    CONSTRAINT "orders_and_products_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "orders_and_products" ADD CONSTRAINT "orders_and_products_product_id_fkey" FOREIGN KEY ("product_id") REFERENCES "products"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "orders_and_products" ADD CONSTRAINT "orders_and_products_order_id_fkey" FOREIGN KEY ("order_id") REFERENCES "orders"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
