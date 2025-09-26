import { Order } from '@orders/domain/entities/order.entity';
import { OrderRepository } from '@orders/domain/repositories/order.repository';
import { OrderSearchStrategy } from './order-search.strategy';

export class FindByFolioStrategy implements OrderSearchStrategy {
  constructor(private readonly folio: string) {}

  async execute(repository: OrderRepository): Promise<Order[]> {
    const orders = await repository.findByFolio(this.folio);
    return orders || [];
  }
}
