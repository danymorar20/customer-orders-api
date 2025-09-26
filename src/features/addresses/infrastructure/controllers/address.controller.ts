import { Body, Controller, Get, ParseIntPipe, Post, Query } from '@nestjs/common';
import { FindAllAddressesUseCase } from '@addresses/application/use-cases/find-all-addresses.use-case';
import { DireccionDto } from './dtos/direccion.dto';
import { UpdateAddressDto } from './dtos/update-direccion.dto';
import { UpdateAddressUseCase } from '@addresses/application/use-cases/update-address.use-case';

@Controller('direcciones')
export class AddressController {
  constructor(
    private readonly updateAddressUseCase: UpdateAddressUseCase,
    private readonly findAllAddressesUseCase: FindAllAddressesUseCase,
  ) {}

  @Get()
  async findAll(): Promise<DireccionDto[]> {
    const addresses = await this.findAllAddressesUseCase.execute();
    return addresses.map((address) => {
      return new DireccionDto(
        address.id!,
        address.customerId,
        address.street,
        address.city,
        address.zipCode,
      );
    });
  }

  @Post()
  async updateAddress(
    @Query('id', ParseIntPipe) id: number,
    @Body() fields: UpdateAddressDto,
  ): Promise<{ message: string; data: DireccionDto }> {
    const addressUpdated = await this.updateAddressUseCase.execute(id, {
      street: fields.calle ?? null,
      city: fields.ciudad ?? null,
      zipCode: fields.codigo_postal ?? null,
    });
    return {
      message: 'Dirección actualizada correctamente',
      data: new DireccionDto(
        addressUpdated.id!,
        addressUpdated.customerId,
        addressUpdated.street,
        addressUpdated.city,
        addressUpdated.zipCode,
      ),
    };
  }
}
