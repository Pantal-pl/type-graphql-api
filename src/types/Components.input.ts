import 'reflect-metadata';
import { Field, InputType, Float, Int } from 'type-graphql';
import { Components } from 'index';
import { IsCurrency, IsNumber, IsPositive, IsString, IsUUID, IsInt } from 'class-validator';
import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity()
@InputType()
export class ComponentsInput implements Partial<Components> {
  @PrimaryColumn('uuid')
  @Field((_type) => String)
  @IsUUID()
  component_id!: string;

  @Column({ type: 'varchar' })
  @Field((_type) => String)
  @IsString()
  component_name!: string;

  @Column({ type: 'varchar' })
  @Field((_type) => String, { nullable: true })
  @IsString()
  component_description!: string;

  @Column({ type: 'float' })
  @Field((_type) => Float)
  @IsNumber({ maxDecimalPlaces: 2 })
  @IsCurrency({ allow_decimal: true, symbol: '$' })
  @IsPositive({ always: true })
  unit_price!: number;

  @Column({ type: 'float' })
  @Field((_type) => Int)
  @IsInt()
  in_stock!: number;
}
