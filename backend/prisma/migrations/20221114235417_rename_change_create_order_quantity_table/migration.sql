-- CreateTable
CREATE TABLE "order_quantity" (
    "id" TEXT NOT NULL,
    "quantiy" INTEGER NOT NULL,
    "oderId" TEXT NOT NULL,

    CONSTRAINT "order_quantity_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "order_quantity" ADD CONSTRAINT "order_quantity_oderId_fkey" FOREIGN KEY ("oderId") REFERENCES "orders"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
