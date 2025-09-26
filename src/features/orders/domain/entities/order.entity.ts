export class Order {
  public readonly id: number | null;
  public readonly customerId: number | null;
  public product: string | null;
  public quantity: number | null;
  public folio: string | null;
  public orderDate: Date | null;

  constructor(
    product: string | null,
    quantity: number | null,
    folio: string | null,
    orderDate: Date | null,
    customerId: number | null,
    id: number | null = null,
  ) {
    this.id = id;
    this.customerId = customerId;
    this.product = product;
    this.quantity = quantity;
    this.folio = folio;
    this.orderDate = orderDate;
  }
}
