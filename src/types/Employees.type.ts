import 'reflect-metadata';
import { ObjectType, Field, Float } from 'type-graphql';
import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity()
@ObjectType({ description: 'The employees model' })
export class Employees {
  @PrimaryColumn('uuid')
  @Field((_type) => String)
  employee_id!: string;

  @Column({ type: 'varchar' })
  @Field((_type) => String)
  employee_first_name!: string;

  @Column({ type: 'varchar' })
  @Field((_type) => String)
  employee_second_name!: string;

  @Column({ type: 'varchar' })
  @Field((_type) => String)
  position!: string;

  @Column({ type: 'varchar' })
  @Field((_type) => String)
  employment_date!: string;

  @Column({ type: 'float' })
  @Field((_type) => Float)
  salary!: number;

  @Column({ type: 'varchar' })
  @Field((_type) => String)
  employee_contact!: string;
}
