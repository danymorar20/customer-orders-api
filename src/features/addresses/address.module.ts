import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { AddressOrmEntity } from "./infrastructure/persistence/typeorm/address.orm-entity";
import { AddressController } from "./infrastructure/controllers/address.controller";
import { FindAllAddressesUseCase } from "./application/use-cases/find-all-addresses.use-case";
import { UpdateAddressUseCase } from "./application/use-cases/update-address.use-case";
import { AddressRepository } from "./domain/repositories/address.repository";
import { TypeOrmAddressRepository } from "./infrastructure/persistence/typeorm/address.repository.impl";

@Module({
  imports: [TypeOrmModule.forFeature([AddressOrmEntity])],
  controllers: [AddressController],
  providers: [
    UpdateAddressUseCase,
    FindAllAddressesUseCase,
    {
      provide: AddressRepository,
      useClass: TypeOrmAddressRepository,
    },
  ],
})
export class AddressModule {}