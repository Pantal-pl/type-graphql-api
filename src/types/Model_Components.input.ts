import 'reflect-metadata';
import { Field, InputType, Int } from 'type-graphql';
import { IsInt, IsUUID } from 'class-validator';
import { Model_Components } from 'index';
import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity()
@InputType()
export class Model_ComponentsInput implements Partial<Model_Components> {
  @PrimaryColumn('uuid')
  @Field((_type) => String)
  @IsUUID()
  entry_id!: string;

  @Column({ type: 'varchar' })
  @Field((_type) => String)
  @IsUUID()
  weapon_model_id!: string;

  @Column({ type: 'varchar' })
  @Field((_type) => String)
  @IsUUID()
  component_ID!: string;

  @Column({ type: 'int' })
  @Field((_type) => Int)
  @IsInt()
  quantity_needed_for_model!: number;
}
