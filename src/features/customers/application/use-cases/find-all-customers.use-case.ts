import { Injectable } from "@nestjs/common";
import { CustomerRepository } from "@customers/domain/repositories/customer.repository";
import { Customer } from "@customers/domain/entities/customer.entity";

@Injectable()
export class FindAllCustomersUseCase {
    constructor(private readonly customerRepository: CustomerRepository) {}

    async execute(): Promise<Customer[]> {
      const customers: Customer[] | null = await this.customerRepository.findAll();
      return customers ?? [];
    }
}
