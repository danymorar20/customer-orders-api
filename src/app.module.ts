import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MySQLConfig } from './config/database/database.config';
import { DatabaseModule } from './config/database/database.module';
import { CustomerModule } from './features/customers/customer.module';
import { AddressModule } from './features/addresses/address.module';
import { OrderModule } from './features/orders/order.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      cache: true,
      envFilePath: '.env',
      load: [MySQLConfig],
    }),
    OrderModule,
    AddressModule,
    DatabaseModule,
    CustomerModule,
  ],
})
export class AppModule {}
