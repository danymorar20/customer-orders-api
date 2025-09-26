import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { CustomerOrmEntity } from 'src/features/customers/infrastructure/persistence/typeorm/customer.orm-entity';

@Entity('direcciones')
export class AddressOrmEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 255, nullable: true, name: 'calle' })
  street: string | null;

  @Column({ type: 'varchar', length: 100, nullable: true, name: 'ciudad' })
  city: string | null;

  @Column({
    type: 'varchar',
    length: 20,
    nullable: true,
    name: 'codigo_postal',
  })
  zipCode: string | null;

  @ManyToOne(
    () => CustomerOrmEntity,
    (customer) => customer.addresses,
    {
      onDelete: 'SET NULL',
    },
  )
  @JoinColumn({ name: 'cliente_id' })
  customer: CustomerOrmEntity;

  @Column({ type: 'int', nullable: true, name: 'cliente_id' })
  customerId: number | null;
}
