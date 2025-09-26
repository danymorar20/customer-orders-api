import { Injectable } from "@nestjs/common";
import { OrderRepository } from "@orders/domain/repositories/order.repository";
import { Order } from "@orders/domain/entities/order.entity";
import { OrderSearchStrategy } from "@orders/application/strategies/order-search.strategy";

@Injectable()
export class FindOrdersUseCase {
  constructor(private readonly orderRepository:OrderRepository) {}

  async execute(strategy: OrderSearchStrategy): Promise<Order[]> {
    return strategy.execute(this.orderRepository);
  }
}
