import { ObjectType, Field, Float } from 'type-graphql';
import { Entity } from 'typeorm';

@ObjectType({ description: 'The employees model' })
export class Employees {
  @Field((_type) => String)
  employee_id!: string;

  @Field((_type) => String)
  employee_first_name!: string;

  @Field((_type) => String)
  employee_second_name!: string;

  @Field((_type) => String)
  position!: string;

  @Field((_type) => String)
  employment_date!: string;

  @Field((_type) => Float)
  salary!: number;

  @Field((_type) => String)
  employee_contact!: string;
}
