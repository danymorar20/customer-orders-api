export class ClienteWithDireccionDto {
  id: number;
  nombre: string;
  apellido: string;
  edad: number;
  email: string;
  fecha_registro: string;
  cliente_id: number;
  calle: string | null;
  ciudad: string | null;
  codigo_postal: string | null;

  constructor(
    id: number,
    nombre: string,
    apellido: string,
    edad: number,
    email: string,
    fecha_registro: string,
    cliente_id: number,
    calle: string | null,
    ciudad: string | null,
    codigo_postal: string | null,
  ) {
    this.id = id;
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
    this.email = email;
    this.fecha_registro = fecha_registro;
    this.cliente_id = cliente_id;
    this.calle = calle;
    this.ciudad = ciudad;
    this.codigo_postal = codigo_postal;
  }
}
