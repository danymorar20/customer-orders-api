export class ClienteDto {
  id: number;
  nombre: string;
  apellido: string;
  edad: number;
  email: string;
  fecha_registro: string;

  constructor(
    id: number,
    nombre: string,
    apellido: string,
    edad: number,
    email: string,
    fecha_registro: string,
  ) {
    this.id = id;
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
    this.email = email;
    this.fecha_registro = fecha_registro;
  }
}
