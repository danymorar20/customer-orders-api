import { Address } from "src/features/addresses/domain/entities/address.entity";
import { AddressOrmEntity } from "./address.orm-entity";

export class AddressMapper {
  static toDomain(orm: AddressOrmEntity): Address {
    return new Address(
      orm.street,
      orm.city,
      orm.zipCode,
      orm.customerId,
      orm.id,
    );
  }
}