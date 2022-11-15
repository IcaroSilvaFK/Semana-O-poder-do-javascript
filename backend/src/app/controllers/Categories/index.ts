import { Request, Response } from 'express';

import { CategoriesService } from '../../services/Categories';

export class Categories {
  constructor(private readonly categoriesService: CategoriesService) {}

  async show(request: Request, response: Response) {
    try {
      const categories = await this.categoriesService.show();

      return response.status(200).json({ categories });
    } catch (err) {
      console.log(err);
    }
  }

  async store(request: Request, response: Response) {
    const { name, icon } = request.body;

    if (!name || !icon) {
      return response.status(411).json({
        message: 'Has missing a fields',
      });
    }

    try {
      const category = await this.categoriesService.store({
        name,
        icon,
      });

      return response.status(201).json({ category });
    } catch (err) {
      console.log(err);
    }
  }

  async update(request: Request, response: Response) {
    const data = request.body;
    const { id } = request.params;

    if (!data) {
      return response.status(411).json({
        message: 'Has missing a fields',
      });
    }

    try {
      const updatedCategory = await this.categoriesService.update(data, id);

      return response.status(200).json({ category: updatedCategory });
    } catch (err) {
      console.log(err);
    }
  }

  async productsByCategory(request: Request, response: Response) {
    const { id } = request.params;

    try {
      const products = await this.categoriesService.showProductsOnCategories(
        id,
      );

      return response.status(200).json({
        products,
      });
    } catch (err) {
      console.log(err);
    }
  }
}
