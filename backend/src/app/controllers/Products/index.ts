import { Request, Response } from 'express';
import { ProductsService } from '../../services/Products';

export class Products {
  constructor(private readonly productsService: ProductsService) {}

  async store(request: Request, response: Response) {
    const { name, description, price, ingredients } = request.body;
    const imagePath = request.file!.filename;
    const { categoryId } = request.params;

    const productStore = {
      name,
      description,
      price: +price,
      ingredients: ingredients ? JSON.parse(ingredients) : [],
      imagePath,
    };

    try {
      const product = await this.productsService.store(
        productStore,
        categoryId,
      );

      return response.status(201).json({
        product,
      });
    } catch (err) {
      console.log(err);
    }
  }

  async show(request: Request, response: Response) {
    try {
      const products = await this.productsService.show();

      return response.status(200).json({
        products,
      });
    } catch (err) {
      console.log(err);
    }
  }
}
