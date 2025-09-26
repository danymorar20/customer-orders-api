export class Customer {
  public readonly id: number | null;
  public name: string;
  public lastName: string;
  public age: number;
  public email: string;
  public readonly createdAt: Date;

  constructor(
    name: string,
    lastName: string,
    age: number,
    email: string,
    createdAt: Date,
    id: number | null = null,
  ) {
    this.id = id;
    this.name = name;
    this.lastName = lastName;
    this.age = age;
    this.email = email;
    this.createdAt = createdAt;
  }
}
