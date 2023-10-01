import 'reflect-metadata';
import { IsEmail, IsNumber, IsPositive, IsString, IsUUID, MinLength, MaxLength } from 'class-validator';
import { Field, Float, InputType } from 'type-graphql';
import { Employees } from 'index';
import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity()
@InputType()
export class EmployeesInput implements Partial<Employees> {
  @PrimaryColumn('uuid')
  @Field((_type) => String, { nullable: true })
  @IsUUID()
  employee_id: string | undefined;

  @Column({ type: 'varchar' })
  @Field((_type) => String)
  @IsString()
  @MinLength(2)
  @MaxLength(25)
  employee_first_name!: string;

  @Column({ type: 'varchar' })
  @Field((_type) => String)
  @IsString()
  @MinLength(2)
  @MaxLength(25)
  employee_second_name!: string;

  @Column({ type: 'varchar' })
  @Field((_type) => String)
  @IsString()
  position!: string;

  @Column({ type: 'varchar' })
  @Field((_type) => String)
  employment_date!: string;

  @Column({ type: 'float' })
  @Field((_type) => Float)
  @IsNumber({ maxDecimalPlaces: 2 })
  @IsPositive({ always: true })
  salary!: number;

  @Column((_type) => String)
  @Field((_type) => String)
  @IsEmail()
  employee_contact!: string;
}
