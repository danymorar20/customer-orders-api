import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrderOrmEntity } from './infrastructure/persistence/typeorm/order.orm-entity';
import { OrderController } from './infrastructure/controllers/order.controller';
import { GetAllOrderUseCase } from './application/use-cases/get-all-orders.use-case';
import { OrderRepository } from './domain/repositories/order.repository';
import { TypeOrmOrderRepository } from './infrastructure/persistence/typeorm/order.repository.impl';
import { FindOrdersUseCase } from './application/use-cases/find-orders.use-case';
import { CreateOrderUseCase } from './application/use-cases/create-order.use-case';
import { CustomerModule } from '../customers/customer.module';

@Module({
  imports: [
    CustomerModule,
    TypeOrmModule.forFeature([OrderOrmEntity])
  ],
  controllers: [OrderController],
  providers: [
    FindOrdersUseCase,
    CreateOrderUseCase,
    GetAllOrderUseCase,
    {
      provide: OrderRepository,
      useClass: TypeOrmOrderRepository,
    },
  ],
})
export class OrderModule {}
