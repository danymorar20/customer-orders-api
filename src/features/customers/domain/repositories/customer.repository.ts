import { Address } from "src/features/addresses/domain/entities/address.entity";
import { Customer } from "@customers/domain/entities/customer.entity";

export abstract class CustomerRepository {
  abstract create(customer: Customer): Promise<Customer>;
  abstract findAll(): Promise<Customer[] | null>;
  abstract findCustomerWithAddressById(
    id: number,
  ): Promise<{ customer: Customer; addresses: Address[] } | null>;
}
