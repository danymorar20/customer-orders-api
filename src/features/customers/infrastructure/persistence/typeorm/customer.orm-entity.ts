import { AddressOrmEntity } from 'src/features/addresses/infrastructure/persistence/typeorm/address.orm-entity';
import { OrderOrmEntity } from 'src/features/orders/infrastructure/persistence/typeorm/order.orm-entity';
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';

@Entity('clientes')
export class CustomerOrmEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 100, nullable: true, name: 'nombre' })
  name: string | null;

  @Column({ type: 'varchar', length: 100, nullable: true, name: 'apellido' })
  lastName: string | null;

  @Column({ type: 'int', nullable: true, name: 'edad' })
  age: number | null;

  @Column({ type: 'varchar', length: 100, nullable: true })
  email: string | null;

  @Column({ type: 'date', nullable: true, name: 'fecha_registro' })
  createdAt: string | null;

  @OneToMany(() => AddressOrmEntity, (address) => address.customer)
  addresses: AddressOrmEntity[];

  @OneToMany(
    () => OrderOrmEntity,
    (order) => order.customer,
  )
  orders: OrderOrmEntity[];
}
