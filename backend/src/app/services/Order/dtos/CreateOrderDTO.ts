export enum Status {
  WAITING = 'WAITING',
  IN_PRODUCTION = 'IN_PRODUCTION',
  DONE = 'DONE',
}

export type ProductsOrder = {
  productId: string;
  quantity: number;
};

export interface ICreateOrderDTO {
  table: string;
  status: Status;
  products: ProductsOrder[];
}
