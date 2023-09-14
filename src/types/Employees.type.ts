import { ObjectType, Field, Float } from 'type-graphql';

@ObjectType({ description: 'The employees model' })
export class Employess {
    @Field((_type) => String)
    employee_id!: string;

    @Field((_type) => String)
    employee_first_name!: string;

    @Field((_type) => String)
    employee_second_name!: string;

    @Field((_type) => String)
    position!: string;

    @Field((_type) => Date)
    employment_date!: Date;

    @Field((_type) => Float)
    salary!: number;

    @Field((_type) => String)
    employee_contact!: string;
}
