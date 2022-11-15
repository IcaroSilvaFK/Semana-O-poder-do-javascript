import { prismaClient } from '../../../configs/global/prisma';
import { ICreateCategory } from './dtos/CreateCategory.dto';
import { UpdateCategory } from './dtos/UpdateCategory.dto';

export class CategoriesService {
  async store(data: ICreateCategory) {
    return await prismaClient.category.create({
      data,
    });
  }

  async update(data: UpdateCategory, id: string) {
    return await prismaClient.category.update({
      where: {
        id,
      },
      data,
    });
  }

  async show() {
    return await prismaClient.category.findMany();
  }

  async showProductsOnCategories(id: string) {
    return await prismaClient.category.findMany({
      where: {
        id,
      },
      include: {
        products: true,
      },
    });
  }
}
