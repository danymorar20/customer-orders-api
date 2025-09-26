export class Address {
  public readonly id: number | null;
  public readonly customerId: number | null;
  public street: string | null;
  public city: string | null;
  public zipCode: string | null;

  constructor(
    street: string | null,
    city: string | null,
    zipCode: string | null,
    customerId: number | null,
    id: number | null = null,
  ) {
    this.id = id;
    this.customerId = customerId;
    this.street = street;
    this.city = city;
    this.zipCode = zipCode;
  }
}
