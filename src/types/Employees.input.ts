import { IsCurrency, IsEmail, IsNumber, IsPositive, IsString, IsUUID, MinLength, MaxLength, IsDateString } from 'class-validator';
import { Field, Float, InputType } from 'type-graphql';
import { Employees } from 'index';

@InputType()
export class EmployeesInput implements Partial<Employees> {
  @Field((_type) => String, { nullable: true })
  @IsUUID()
  employee_id: string | undefined;

  @Field((_type) => String)
  @IsString()
  @MinLength(2)
  @MaxLength(25)
  employee_first_name!: string;

  @Field((_type) => String)
  @IsString()
  @MinLength(2)
  @MaxLength(25)
  employee_second_name!: string;

  @Field((_type) => String)
  @IsString()
  position!: string;

  @Field((_type) => String)
  employment_date!: string;

  @Field((_type) => Float)
  @IsNumber({ maxDecimalPlaces: 2 })
  @IsPositive({ always: true })
  salary!: number;

  @Field((_type) => String)
  @IsEmail()
  employee_contact!: string;
}
