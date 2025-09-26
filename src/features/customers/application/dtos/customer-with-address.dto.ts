export class CustomerWithAddressDto {
  id: number;
  name: string;
  lastName: string;
  age: number;
  email: string;
  createdAt: string;
  customerId: number;
  street: string | null;
  city: string | null;
  zipCode: string | null;

  constructor(
    id: number,
    name: string,
    lastName: string,
    age: number,
    email: string,
    createdAt: string,
    customerId: number,
    street: string | null,
    city: string | null,
    zipCode: string | null,
  ) {
    this.id = id;
    this.name = name;
    this.lastName = lastName;
    this.age = age;
    this.email = email;
    this.createdAt = createdAt;
    this.customerId = customerId;
    this.street = street;
    this.city = city;
    this.zipCode = zipCode;
  }
}
