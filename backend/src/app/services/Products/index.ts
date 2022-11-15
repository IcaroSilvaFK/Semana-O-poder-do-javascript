import { prismaClient } from '../../../configs/global/prisma';
import { ICreateProductDTO } from './dtos/createProduct.dto';

export class ProductsService {
  async store(
    { description, imagePath, ingredients, name, price }: ICreateProductDTO,
    categoryId: string,
  ) {
    return await prismaClient.product.create({
      data: {
        name,
        price,
        imagePath,
        description,
        categoryId,
        ingredients: {
          createMany: {
            data: ingredients,
          },
        },
      },
      include: {
        ingredients: true,
      },
    });
  }

  async show() {
    return await prismaClient.product.findMany();
  }
}
