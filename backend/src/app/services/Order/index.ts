import { prismaClient } from '../../../configs/global/prisma';
import { ICreateOrderDTO } from './dtos/CreateOrderDTO';
import { UpdateOrderDTO } from './dtos/UpdateOrderDTO';

export class OrderSerice {
  async store(order: ICreateOrderDTO) {
    return await prismaClient.order.create({
      data: {
        table: order.table,
        ProductOrder: {
          createMany: {
            data: order.products,
          },
        },
      },
      include: {
        ProductOrder: {
          select: {
            product: true,
          },
        },
        _count: {
          select: {
            ProductOrder: true,
          },
        },
      },
    });
  }

  async update({ status }: UpdateOrderDTO, id: string) {
    return await prismaClient.order.update({
      where: {
        id,
      },
      data: {
        status,
      },
    });
  }

  async destroy(id: string) {
    await prismaClient.order.delete({
      where: {
        id,
      },
    });
  }

  async show() {
    return await prismaClient.order.findMany({
      include: {
        ProductOrder: {
          select: {
            quantity: true,
            product: true,
          },
        },
      },
      orderBy: {
        createdAt: 'asc',
      },
    });
  }
}
