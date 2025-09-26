import { OrderOrmEntity } from '@orders/infrastructure/persistence/typeorm/order.orm-entity';
import { Order } from 'src/features/orders/domain/entities/order.entity';

export class OrderMapper {
  static toDomain(orm: OrderOrmEntity): Order {
    const orderDate = orm.orderDate ? new Date(orm.orderDate) : null;

    return new Order(
      orm.product,
      orm.quantity,
      orm.folio,
      orderDate,
      orm.customerId,
      orm.id,
    );
  }

  static toPersistence(domainEntity: Order): OrderOrmEntity {
    const ormEntity = new OrderOrmEntity();
    ormEntity.customerId = domainEntity.customerId;
    ormEntity.product = domainEntity.product;
    ormEntity.quantity = domainEntity.quantity;
    ormEntity.folio = domainEntity.folio;
    ormEntity.orderDate = domainEntity.orderDate
      ? domainEntity.orderDate.toISOString().split('T')[0]
      : null;

    return ormEntity;
  }
}
