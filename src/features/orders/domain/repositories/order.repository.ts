import { Order } from "@orders/domain/entities/order.entity";

export abstract class OrderRepository {
  abstract getAll(): Promise<Order[]>;
  abstract findByCustomerId(customerId: number): Promise<Order[]>;
  abstract findByFolio(folio: string): Promise<Order[]>;
  abstract create(orders: Order[]): Promise<Order[]>;
}
