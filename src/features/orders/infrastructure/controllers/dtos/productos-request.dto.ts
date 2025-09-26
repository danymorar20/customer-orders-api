import { IsNumber, IsString, Min } from "class-validator";

export class ProductosRequestDto {
  @IsString()
  producto: string;

  @IsNumber()
  @Min(1, { message: 'La cantidad mínima por producto es 1.' })
  cantidad: number;
}