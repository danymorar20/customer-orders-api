import { Customer } from "src/features/customers/domain/entities/customer.entity";
import { CustomerOrmEntity } from "@customers/infrastructure/persistence/typeorm/customer.orm-entity";

export class CustomerMapper {
  public static toDomain(ormEntity: CustomerOrmEntity): Customer {
    return new Customer(
      ormEntity.name!,
      ormEntity.lastName!,
      ormEntity.age!,
      ormEntity.email!,
      new Date(ormEntity.createdAt!),
      ormEntity.id,
    );
  }

  public static toPersistence(domainEntity: Customer): CustomerOrmEntity {
    const ormEntity = new CustomerOrmEntity();

    ormEntity.id = domainEntity.id as number;
    ormEntity.name = domainEntity.name;
    ormEntity.lastName = domainEntity.lastName;
    ormEntity.age = domainEntity.age;
    ormEntity.email = domainEntity.email;
    ormEntity.createdAt = domainEntity.createdAt.toISOString().split('T')[0];

    return ormEntity;
  }
}
