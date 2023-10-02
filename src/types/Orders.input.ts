import 'reflect-metadata';
import { registerEnumType, Field, InputType, Float } from 'type-graphql';
import { IsCurrency, IsDate, IsEnum, IsNumber, IsPositive, IsUUID } from 'class-validator';
import { Column, Entity, PrimaryColumn } from 'typeorm';
import { Orders } from 'index';
import { OrderStatus } from './Orders.type';

registerEnumType(OrderStatus, {
  name: 'OrderInputStatus',
  description: 'The basic order status',
});

@Entity()
@InputType()
export class OrdersInput implements Partial<Orders> {
  @PrimaryColumn('uuid')
  @Field((_type) => String)
  @IsUUID()
  order_id!: string;

  @Column({ type: 'varchar' })
  @Field((_type) => String)
  @IsUUID()
  weapon_model_id!: string;

  @Column({ type: 'date' })
  @Field((_type) => Date)
  @IsDate()
  order_date!: Date;

  @Column({ type: 'date' })
  @Field((_type) => Date)
  @IsDate()
  expected_delivery_date!: Date;

  @Column({ type: 'enum', enum: OrderStatus })
  @Field((_type) => OrderStatus)
  @IsEnum(OrderStatus)
  order_status!: OrderStatus;

  @Column({ type: 'float' })
  @Field((_type) => Float)
  @IsNumber({ maxDecimalPlaces: 2 })
  @IsPositive({ always: true })
  total_order_cost!: number;
}
