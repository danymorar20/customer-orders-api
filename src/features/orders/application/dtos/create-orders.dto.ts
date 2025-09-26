export interface CreateOrdersDto {
  clientId: number;
  items: Products[];
}

interface Products {
  product: string;
  quantity: number;
}
