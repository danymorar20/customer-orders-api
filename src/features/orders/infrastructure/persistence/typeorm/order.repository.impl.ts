import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { OrderRepository } from 'src/features/orders/domain/repositories/order.repository';
import { OrderOrmEntity } from './order.orm-entity';
import { Order } from 'src/features/orders/domain/entities/order.entity';
import { OrderMapper } from './mappers/order.mapper';

@Injectable()
export class TypeOrmOrderRepository implements OrderRepository {
  constructor(
    @InjectRepository(OrderOrmEntity)
    private readonly ormRepository: Repository<OrderOrmEntity>,
  ) {}

  async getAll(): Promise<Order[]> {
    const ormEntities = await this.ormRepository.find();
    return ormEntities.map(OrderMapper.toDomain);
  }

  async findByCustomerId(customerId: number): Promise<Order[]> {
    const ormEntities = await this.ormRepository.find({
      where: { customerId: customerId },
    });
    return ormEntities.map(OrderMapper.toDomain);
  }

  async findByFolio(folio: string): Promise<Order[]> {
    const ormEntities = await this.ormRepository.find({
      where: { folio: folio },
    });
    return ormEntities.map(OrderMapper.toDomain);
  }

  async create(orders: Order[]): Promise<Order[]> {
    const ormOrders = orders.map(OrderMapper.toPersistence);
    const newOrmOrders = await this.ormRepository.save(ormOrders);
    return newOrmOrders.map(OrderMapper.toDomain);
  }
}
