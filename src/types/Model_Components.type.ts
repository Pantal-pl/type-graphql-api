import 'reflect-metadata';
import { Field, Int, ObjectType } from 'type-graphql';
import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity()
@ObjectType()
export class Model_Components {
  @PrimaryColumn('uuid')
  @Field((_type) => String)
  entry_id!: string;

  @Column({ type: 'varchar' })
  @Field((_type) => String)
  weapon_model_id!: string;

  @Column({ type: 'varchar' })
  @Field((_type) => String)
  component_ID!: string;

  @Column({ type: 'int' })
  @Field((_type) => Int)
  quantity_needed_for_model!: number;
}
