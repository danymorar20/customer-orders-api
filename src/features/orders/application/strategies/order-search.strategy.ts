import { Order } from "@orders/domain/entities/order.entity";
import { OrderRepository } from "@orders/domain/repositories/order.repository";

export interface OrderSearchStrategy {
  execute(repository: OrderRepository): Promise<Order[]>;
}
