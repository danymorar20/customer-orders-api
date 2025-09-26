import { Address } from "./address.entity";

export type UpdateAddressFields = Pick<Address, 'street' | 'city' | 'zipCode'>;
