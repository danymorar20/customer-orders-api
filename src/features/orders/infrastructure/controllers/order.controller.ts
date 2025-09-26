import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
} from '@nestjs/common';
import { GetAllOrderUseCase } from '@orders/application/use-cases/get-all-orders.use-case';
import { OrdenDto } from './dtos/orden.dto';
import { FindByCustomerStrategy } from '@orders/application/strategies/find-by-customer.strategy';
import { FindOrdersUseCase } from '@orders/application/use-cases/find-orders.use-case';
import { FindByFolioStrategy } from '@orders/application/strategies/find-by-folio.strategy';
import { NewOrdenRequestDto } from './dtos/new-orden-request.dto';
import { CreateOrderUseCase } from '@orders/application/use-cases/create-order.use-case';

@Controller('ordenes')
export class OrderController {
  constructor(
    private readonly findOrdersUseCase: FindOrdersUseCase,
    private readonly createOrderUseCase: CreateOrderUseCase,
    private readonly getAllOrdersUseCase: GetAllOrderUseCase,
  ) {}

  @Get()
  async getAllOrders(): Promise<OrdenDto[]> {
    return (await this.getAllOrdersUseCase.execute()).map(
      (order) =>
        new OrdenDto(
          order.id,
          order.customerId,
          order.product,
          order.quantity,
          order.orderDate?.toISOString() ?? null,
          order.folio,
        ),
    );
  }

  @Get(':customerId')
  async findByCustomerId(
    @Param('customerId', ParseIntPipe) customerId: number,
  ) {
    const strategy = new FindByCustomerStrategy(customerId);
    const orders = await this.findOrdersUseCase.execute(strategy);
    return orders.map(
      (order) =>
        new OrdenDto(
          order.id,
          order.customerId,
          order.product,
          order.quantity,
          order.orderDate?.toISOString() ?? null,
          order.folio,
        ),
    );
  }

  @Get('folio/:folio')
  async findByFolio(@Param('folio') folio: string) {
    const strategy = new FindByFolioStrategy(folio);
    const orders = await this.findOrdersUseCase.execute(strategy);
    return orders.map(
      (order) =>
        new OrdenDto(
          order.id,
          order.customerId,
          order.product,
          order.quantity,
          order.orderDate?.toISOString() ?? null,
          order.folio,
        ),
    );
  }

  @Post()
  async create(@Body() requestDto: NewOrdenRequestDto): Promise<{ folio: string; }> {
    const mappedItems = requestDto.items.map((item) => ({
      product: item.producto,
      quantity: item.cantidad,
    }));
    const applicationDto = {
      clientId: requestDto.cliente_id,
      items: mappedItems,
    };
    const folio = await this.createOrderUseCase.execute(applicationDto);
    return { folio };
  }
}
