import 'reflect-metadata';
import { Field, Float, ObjectType, registerEnumType } from 'type-graphql';
import { Column, Entity, PrimaryColumn } from 'typeorm';

export enum OrderStatus {
  PENDING = 'PENDING',
  IN_PROGRESS = 'IN_PROGRESS',
  SHIPPED = 'SHIPPED',
  DELIVERED = 'DELIVERED',
  CANCELED = 'CANCELED',
}

registerEnumType(OrderStatus, {
  name: 'OrderStatus',
  description: 'The basic order status',
});

@Entity()
@ObjectType({ description: 'The orders model' })
export class Orders {
  @PrimaryColumn('uuid')
  @Field((_type) => String)
  order_id!: string;

  @Column({ type: 'varchar' })
  @Field((_type) => String)
  weapon_model_id!: string;

  @Column({ type: 'date' })
  @Field((_type) => Date)
  order_date!: Date;

  @Column({ type: 'date' })
  @Field((_type) => Date)
  expected_delivery_date!: Date;

  @Column({ type: 'enum', enum: OrderStatus })
  @Field((_type) => OrderStatus)
  order_status!: OrderStatus;

  @Column({ type: 'float' })
  @Field((_type) => Float)
  total_order_cost!: number;
}
