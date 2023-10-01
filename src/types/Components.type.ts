import 'reflect-metadata';
import { ObjectType, Field, Float, Int } from 'type-graphql';
import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity()
@ObjectType({ description: 'The components model' })
export class Components {
  @PrimaryColumn('uuid')
  @Field((_type) => String)
  component_id!: string;

  @Column({ type: 'varchar' })
  @Field((_type) => String)
  component_name!: string;

  @Column({ type: 'varchar' })
  @Field((_type) => String)
  component_description!: string;

  @Column({ type: 'float' })
  @Field((_type) => Float)
  unit_price!: number;

  @Column({ type: 'float' })
  @Field((_type) => Int)
  in_stock!: number;
}
