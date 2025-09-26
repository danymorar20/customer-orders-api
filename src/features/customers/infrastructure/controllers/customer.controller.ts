import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateCustomerUseCase } from '@customers/application/use-cases/create-customer.use-case';
import { FindAllCustomersUseCase } from '@customers/application/use-cases/find-all-customers.use-case';
import { CreateClienteDto } from './dtos/create-cliente.dto';
import { ClienteDto } from './dtos/cliente.dto';
import { ClienteWithDireccionDto } from './dtos/cliente-with-direccion.dto';
import { FindCustomerWithAddressByIdUseCase } from '@customers/application/use-cases/find-customer-with-address-by-id.use-case';

@Controller('clientes')
export class CustomerController {
  constructor(
    private readonly createCustomerUseCase: CreateCustomerUseCase,
    private readonly findCustomerWithAddressByIdUseCase: FindCustomerWithAddressByIdUseCase,
    private readonly findAllCustomersUseCase: FindAllCustomersUseCase,
  ) {}

  @Post()
  async create(@Body() newCustomer: CreateClienteDto): Promise<{}> {
    await this.createCustomerUseCase.execute({
      name: newCustomer.nombre,
      lastName: newCustomer.apellido,
      age: newCustomer.edad,
      email: newCustomer.email,
    });
    return { success: 'cliente creado' };
  }

  @Get()
  async findAll(): Promise<ClienteDto[]> {
    const allCustomers = await this.findAllCustomersUseCase.execute();
    return allCustomers.map((customer) => {
      return new ClienteDto(
        customer.id!,
        customer.name,
        customer.lastName,
        customer.age,
        customer.email,
        customer.createdAt.toISOString(),
      );
    });
  }

  @Get(':id')
  async getCustomerWithAddress(
    @Param('id') id: number,
  ): Promise<ClienteWithDireccionDto | null> {
    const result = await this.findCustomerWithAddressByIdUseCase.execute(id);
    if (!result) return null;
    return new ClienteWithDireccionDto(
      result.id,
      result.name,
      result.lastName,
      result.age,
      result.email,
      result.createdAt,
      result.id,
      result.street,
      result.city,
      result.zipCode,
    );
  }
}
