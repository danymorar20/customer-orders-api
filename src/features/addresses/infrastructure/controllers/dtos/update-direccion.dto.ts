import { IsString, IsOptional, Length, Matches } from 'class-validator';

export class UpdateAddressDto {
  @IsOptional()
  @IsString({ message: 'La calle debe ser una cadena de texto.' })
  @Length(5, 255, { message: 'La calle debe tener entre 5 y 255 caracteres.' })
  calle?: string;

  @IsOptional()
  @IsString({ message: 'La ciudad debe ser una cadena de texto.' })
  @Length(2, 100, { message: 'La ciudad debe tener entre 2 y 100 caracteres.' })
  ciudad?: string;

  /**
   * Validation for Postal Code (Mexico 🇲🇽)
   * zip codes must be exactly 5 digits (0-9).
   */
  @IsOptional()
  @IsString({ message: 'El código postal debe ser una cadena de texto.' })
  @Length(5, 5, {
    message: 'El código postal debe tener exactamente 5 dígitos.',
  })
  @Matches(/^\d{5}$/, {
    message: 'El código postal solo debe contener 5 números.',
  })
  codigo_postal?: string;
}
