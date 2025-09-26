export class OrdenDto {
  id: number | null;
  cliente_id: number | null;
  producto: string | null;
  cantidad: number | null;
  fecha_pedido: string | null;
  folio: string | null;

  constructor(
    id: number | null,
    cliente_id: number | null,
    producto: string | null,
    cantidad: number | null,
    fecha_pedido: string | null,
    folio: string | null,
  ) {
    this.id = id;
    this.cliente_id = cliente_id;
    this.producto = producto;
    this.cantidad = cantidad;
    this.fecha_pedido = fecha_pedido;
    this.folio = folio;
  }
}
