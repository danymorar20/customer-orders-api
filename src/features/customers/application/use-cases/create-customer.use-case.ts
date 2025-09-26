import { Injectable } from "@nestjs/common";
import { Customer } from "@customers/domain/entities/customer.entity";
import { CustomerRepository } from "@customers/domain/repositories/customer.repository";
import { CreateCustomerDto } from "@customers/application/dtos/create-customer.dto";

@Injectable()
export class CreateCustomerUseCase {
  constructor(private readonly customerRepository: CustomerRepository) {}

  async execute(newCustomer: CreateCustomerDto) : Promise<Customer> {
    return await this.customerRepository.create(new Customer(
      newCustomer.name,
      newCustomer.lastName,
      newCustomer.age,
      newCustomer.email,
      new Date()
    ));
  }
}