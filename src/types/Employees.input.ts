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
import { Field, InputType } from 'type-graphql';
import { Employess } from 'index';

@InputType()
export class EmployeesInput implements Partial<Employess> {
    @Field()
    @IsUUID()
    employee_id!: string;

    @Field()
    @IsString()
    @MinLength(2)
    @MaxLength(25)
    employee_first_name!: string;

    @Field()
    @IsString()
    @MinLength(2)
    @MaxLength(25)
    employee_second_name!: string;

    @Field()
    @IsString()
    position!: string;

    @Field()
    @IsDate()
    employment_date!: Date;

    @Field()
    @IsNumber({ maxDecimalPlaces: 2 })
    @IsCurrency({ allow_decimal: true, symbol: '$' })
    @IsPositive({ always: true })
    salary!: number;

    @Field()
    @IsEmail()
    employee_contact!: string;
}
