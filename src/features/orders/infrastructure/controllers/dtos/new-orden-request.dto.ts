import { ArrayMinSize, IsArray, IsNumber, ValidateNested } from 'class-validator';
import { ProductosRequestDto } from './productos-request.dto';
import { Type } from 'class-transformer';

export class NewOrdenRequestDto {
  @IsNumber()
  cliente_id: number;
  @ArrayMinSize(1, {
    message:
      'El array de items no puede estar vacío. Debe contener al menos un producto.',
  })
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ProductosRequestDto)
  items: ProductosRequestDto[];
}
