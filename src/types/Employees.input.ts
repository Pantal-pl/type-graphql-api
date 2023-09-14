import {
    IsCurrency,
    IsDate,
    IsEmail,
    IsNumber,
    IsPositive,
    IsString,
    IsUUID,
    MinLength,
    MaxLength,
} from 'class-validator';
import { Field, Float, InputType } from 'type-graphql';
import { Employess } from 'index';

@InputType()
export class EmployeesInput implements Partial<Employess> {
    @Field((_type) => String)
    @IsUUID()
    employee_id!: string;

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
    @IsDate()
    employment_date!: Date;

    @Field((_type) => Float)
    @IsNumber({ maxDecimalPlaces: 2 })
    @IsCurrency({ allow_decimal: true, symbol: '$' })
    @IsPositive({ always: true })
    salary!: number;

    @Field((_type) => String)
    @IsEmail()
    employee_contact!: string;
}
