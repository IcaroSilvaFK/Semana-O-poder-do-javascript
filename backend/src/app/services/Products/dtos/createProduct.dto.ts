type Ingredients = {
  icon: string;
  name: string;
};

export interface ICreateProductDTO {
  name: string;
  description: string;
  imagePath: string;
  price: number;
  ingredients: Ingredients[];
}
