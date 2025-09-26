import { Address } from '@addresses/domain/entities/address.entity';
import { UpdateAddressFields } from '@addresses/domain/entities/update-address-fields.entity';

export abstract class AddressRepository {
  abstract findAll(): Promise<Address[] | null>;
  abstract update(
    id: number,
    fields: UpdateAddressFields,
  ): Promise<Address | null>;
  abstract findById(id: number): Promise<Address | null>;
}
