import { IsString, IsInt, IsEmail, Min, Max, Length } from 'class-validator';

export class CreateClienteDto {
  @IsString()
  @Length(2, 50)
  nombre: string;

  @IsString()
  @Length(2, 50)
  apellido: string;

  @IsInt()
  @Min(0)
  @Max(120)
  edad: number;

  @IsEmail()
  email: string;
}