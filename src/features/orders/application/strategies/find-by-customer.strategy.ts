import { Order } from "@orders/domain/entities/order.entity";
import { OrderRepository } from "@orders/domain/repositories/order.repository";
import { OrderSearchStrategy } from "./order-search.strategy";

export class FindByCustomerStrategy implements OrderSearchStrategy {
  constructor(private readonly customerId: number) {}

  async execute(repository: OrderRepository): Promise<Order[]> {
    const orders = await repository.findByCustomerId(this.customerId);
    return orders || [];
  }
}
