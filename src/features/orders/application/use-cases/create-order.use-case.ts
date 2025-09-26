import { Injectable, NotFoundException } from '@nestjs/common';
import { Order } from '@orders/domain/entities/order.entity';
import { OrderRepository } from '@orders/domain/repositories/order.repository';
import { CreateOrdersDto } from '@orders/application/dtos/create-orders.dto';
import { FindCustomerWithAddressByIdUseCase } from 'src/features/customers/application/use-cases/find-customer-with-address-by-id.use-case';

@Injectable()
export class CreateOrderUseCase {
  constructor(
    private readonly orderRepository: OrderRepository,
    private readonly findCustomerByIdUseCase: FindCustomerWithAddressByIdUseCase,
  ) {}

  async execute(newOrder: CreateOrdersDto): Promise<string> {

    const user = await this.findCustomerByIdUseCase.execute(newOrder.clientId);

    if (!user) throw new NotFoundException(`Customer with id ${newOrder.clientId} not found.`)

    const newFolio = this.generateOrderFolio();
    const createdAt = new Date();

    const ordersToCreate = newOrder.items.map(
      (item) =>
        new Order(
          item.product,
          item.quantity,
          newFolio,
          createdAt,
          newOrder.clientId,
        ),
    );

    await this.orderRepository.create(ordersToCreate);

    return newFolio;
  }

  private generateOrderFolio(): string {
    const prefix = 'TEST';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    const length = 6;
    let randomString = Array.from({ length }, () =>
      characters.charAt(Math.floor(Math.random() * characters.length)),
    ).join('');
    return prefix + randomString;
  }
}
