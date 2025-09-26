export class DireccionDto {
  id: number;
  cliente_id: number | null;
  calle: string | null;
  ciudad: string | null;
  codigo_postal: string | null;

  constructor(
    id: number,
    cliente_id: number | null,
    calle: string | null,
    ciudad: string | null,
    codigo_postal: string | null,
  ) {
    this.id = id;
    this.cliente_id = cliente_id;
    this.calle = calle;
    this.ciudad = ciudad;
    this.codigo_postal = codigo_postal;
  }
}
