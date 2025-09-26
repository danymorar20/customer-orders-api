import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { CustomerOrmEntity } from "./infrastructure/persistence/typeorm/customer.orm-entity";
import { CustomerController } from "./infrastructure/controllers/customer.controller";
import { CreateCustomerUseCase } from "./application/use-cases/create-customer.use-case";
import { FindAllCustomersUseCase } from "./application/use-cases/find-all-customers.use-case";
import { FindCustomerWithAddressByIdUseCase } from "./application/use-cases/find-customer-with-address-by-id.use-case";
import { CustomerRepository } from "./domain/repositories/customer.repository";
import { TypeOrmCustomerRepository } from "./infrastructure/persistence/typeorm/customer.repository.impl";

@Module({
  imports: [TypeOrmModule.forFeature([CustomerOrmEntity])],
  controllers: [CustomerController],
  providers: [
    CreateCustomerUseCase,
    FindAllCustomersUseCase,
    FindCustomerWithAddressByIdUseCase,
    {
      provide: CustomerRepository,
      useClass: TypeOrmCustomerRepository,
    },
  ],
  exports: [FindCustomerWithAddressByIdUseCase],
})
export class CustomerModule {}