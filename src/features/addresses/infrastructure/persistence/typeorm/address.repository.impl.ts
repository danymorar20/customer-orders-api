import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AddressRepository } from '@addresses/domain/repositories/address.repository';
import { Address } from '@addresses/domain/entities/address.entity';
import { AddressOrmEntity } from '@addresses/infrastructure/persistence/typeorm/address.orm-entity';
import { AddressMapper } from './address.mapper';
import { UpdateAddressFields } from '@addresses/domain/entities/update-address-fields.entity';

@Injectable()
export class TypeOrmAddressRepository implements AddressRepository {
  constructor(
    @InjectRepository(AddressOrmEntity)
    private readonly ormRepository: Repository<AddressOrmEntity>,
  ) {}

  async findAll(): Promise<Address[] | null> {
    const ormEntities = await this.ormRepository.find();
    if (ormEntities.length === 0) {
      return null;
    }
    return ormEntities.map(AddressMapper.toDomain);
  }

  async update(
    id: number,
    fields: UpdateAddressFields,
  ): Promise<Address | null> {
    await this.ormRepository.update(id, {
      street: fields.street,
      city: fields.city,
      zipCode: fields.zipCode,
    });

    return await this.findById(id);
  }

  async findById(id: number): Promise<Address | null> {
    return await this.ormRepository.findOne({ where: { id } });
  }
}
