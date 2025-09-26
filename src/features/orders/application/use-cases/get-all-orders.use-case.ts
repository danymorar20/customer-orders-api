import { Injectable } from '@nestjs/common';
import { OrderRepository } from '@orders/domain/repositories/order.repository';
import { Order } from '@orders/domain/entities/order.entity';

@Injectable()
export class GetAllOrderUseCase {
  constructor(private readonly orderRepository: OrderRepository) {}

  async execute(): Promise<Order[]> {
    return await this.orderRepository.getAll();
  }
}
