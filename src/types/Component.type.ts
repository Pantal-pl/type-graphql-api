import 'reflect-metadata';
import { ObjectType, Field, Float, Int } from 'type-graphql';
import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity()
@ObjectType({ description: 'The component model' })
export class Component {
  @PrimaryColumn('uuid')
  @Field((_type) => String, { nullable: true })
  component_id: string | undefined;

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
