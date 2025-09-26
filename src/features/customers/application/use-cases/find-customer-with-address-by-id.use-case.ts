import { Injectable, NotFoundException } from '@nestjs/common';
import { CustomerRepository } from '@customers/domain/repositories/customer.repository';
import { CustomerWithAddressDto } from '@customers/application/dtos/customer-with-address.dto';

@Injectable()
export class FindCustomerWithAddressByIdUseCase {
  constructor(private readonly customerRepository: CustomerRepository) {}
  
  async execute(id: number): Promise<CustomerWithAddressDto> {
    const customerWithAddress =
      await this.customerRepository.findCustomerWithAddressById(id);
    if (!customerWithAddress)
      throw new NotFoundException(`Customer with id ${id} not found`);
    const { customer, addresses } = customerWithAddress;

    return new CustomerWithAddressDto(
      customer.id!,
      customer.name,
      customer.lastName,
      customer.age,
      customer.email,
      customer.createdAt.toISOString(),
      addresses[0]?.customerId!,
      addresses[0]?.street ?? null,
      addresses[0]?.city ?? null,
      addresses[0]?.zipCode ?? null,
    );
  }
}
