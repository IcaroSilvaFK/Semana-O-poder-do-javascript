import { Request, Response } from 'express';
import httpStatus from 'http-status';

import { OrderSerice } from '../../services/Order';
import { Status } from '../../services/Order/dtos/CreateOrderDTO';

export class OrderController {
  constructor(private readonly orderService: OrderSerice) {}

  async store(request: Request, response: Response) {
    const data = request.body;

    try {
      const order = await this.orderService.store(data);

      return response.status(httpStatus.CREATED).json({
        order,
      });
    } catch (err) {
      console.log(err);
    }
  }

  async update(request: Request, response: Response) {
    const { id } = request.params;
    const { status } = request.body;
    const statusType = ['DONE', 'WAITING', 'IN_PRODUCTION'];

    if (!statusType.includes(status)) {
      return response.status(httpStatus.BAD_REQUEST).json({
        message: 'Status should be one of these: DONE WAITING IN_PRODUCTION',
      });
    }
    try {
      await this.orderService.update(status, id);

      return response.status(httpStatus.NO_CONTENT);
    } catch (err) {
      console.log(err);
    }
  }

  async destroy(request: Request, response: Response) {
    const { id } = request.params;

    try {
      await this.orderService.destroy(id);

      return response.status(httpStatus.NO_CONTENT);
    } catch (err) {
      console.log(err);
    }
  }

  async show(request: Request, response: Response) {
    try {
      const orders = await this.orderService.show();

      return response.status(httpStatus.OK).json({
        orders,
      });
    } catch (err) {
      console.log(err);
    }
  }
}
