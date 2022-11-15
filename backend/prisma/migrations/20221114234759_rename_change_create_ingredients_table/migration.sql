/*
  Warnings:

  - You are about to drop the column `ingredients` on the `products` table. All the data in the column will be lost.
  - Added the required column `ingredient_id` to the `products` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "products" DROP COLUMN "ingredients",
ADD COLUMN     "ingredient_id" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "ingredients" (
    "id" TEXT NOT NULL,
    "icon" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "product_id" TEXT,

    CONSTRAINT "ingredients_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "ingredients" ADD CONSTRAINT "ingredients_product_id_fkey" FOREIGN KEY ("product_id") REFERENCES "products"("id") ON DELETE SET NULL ON UPDATE CASCADE;
