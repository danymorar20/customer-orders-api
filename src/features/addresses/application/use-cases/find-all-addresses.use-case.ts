import { Injectable } from "@nestjs/common";
import { AddressRepository } from "@addresses/domain/repositories/address.repository";
import { Address } from "@addresses/domain/entities/address.entity";

@Injectable()
export class FindAllAddressesUseCase {
  constructor(private readonly addressRepository: AddressRepository) {}

  async execute(): Promise<Address[]> {
    const addresses = await this.addressRepository.findAll();
    return addresses ?? [];
  }
}
