import { Injectable, NotFoundException } from "@nestjs/common";
import { AddressRepository } from "@addresses/domain/repositories/address.repository";
import { Address } from "@addresses/domain/entities/address.entity";
import { UpdateAddressFields } from "@addresses/domain/entities/update-address-fields.entity";

@Injectable()
export class UpdateAddressUseCase {
  constructor(private readonly addressRepository: AddressRepository) {}

  async execute(addressId: number, addressValues: UpdateAddressFields): Promise<Address> {
    const address = await this.addressRepository.findById(addressId);
    if (!address) throw new NotFoundException(`Address with id ${addressId} not found`);
    return await this.addressRepository.update(addressId, addressValues) as Address;
  }
}
