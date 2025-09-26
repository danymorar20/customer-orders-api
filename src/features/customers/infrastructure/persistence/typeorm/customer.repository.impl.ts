import { CustomerRepository } from 'src/features/customers/domain/repositories/customer.repository';
import { Customer } from 'src/features/customers/domain/entities/customer.entity';
import { CustomerOrmEntity } from './customer.orm-entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';
import { CustomerMapper } from './mappers/customer.mapper';
import { AddressMapper } from 'src/features/addresses/infrastructure/persistence/typeorm/address.mapper';
import { Address } from 'src/features/addresses/domain/entities/address.entity';

@Injectable()
export class TypeOrmCustomerRepository implements CustomerRepository {
  constructor(
    @InjectRepository(CustomerOrmEntity)
    private readonly ormRepository: Repository<CustomerOrmEntity>,
  ) {}

  async create(customer: Customer): Promise<Customer> {
    const customerToSave = CustomerMapper.toPersistence(customer);
    const newOrmCustomer = await this.ormRepository.save(customerToSave);
    return CustomerMapper.toDomain(newOrmCustomer);
  }

  async findAll(): Promise<Customer[] | null> {
    const ormEntities = await this.ormRepository.find();
    if (ormEntities.length === 0) {
      return null;
    }
    return ormEntities.map(CustomerMapper.toDomain);
  }

  async findCustomerWithAddressById(
    id: number,
  ): Promise<{ customer: Customer; addresses: Address[] } | null> {
    const customer = await this.ormRepository.findOne({
      where: { id },
      relations: ['addresses'],
    });
    if (!customer) return null;
    const addresses = customer.addresses;
    return {
      customer: CustomerMapper.toDomain(customer),
      addresses: addresses,
    };
  }
}
