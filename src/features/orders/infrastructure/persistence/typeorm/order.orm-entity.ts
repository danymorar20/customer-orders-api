import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { CustomerOrmEntity } from 'src/features/customers/infrastructure/persistence/typeorm/customer.orm-entity'; // Asegúrate de importar la entidad de Cliente

@Entity('ordenes')
export class OrderOrmEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 100, nullable: true, name: 'producto' })
  product: string | null;

  @Column({ type: 'int', nullable: true, name: 'cantidad' })
  quantity: number | null;

  @Column({ type: 'date', nullable: true, name: 'fecha_pedido' })
  orderDate: string | null;

  @Column({ type: 'varchar', length: 50, nullable: true, name: 'folio' })
  folio: string | null;

  @Column({ type: 'int', nullable: true, name: 'cliente_id' })
  customerId: number | null;

  @ManyToOne(
    () => CustomerOrmEntity,
    (customer) => customer.orders,
    {
      onDelete: 'SET NULL',
    },
  )
  @JoinColumn({ name: 'cliente_id' })
  customer: CustomerOrmEntity;
}
