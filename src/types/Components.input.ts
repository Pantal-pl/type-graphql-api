import { Field, InputType, Float, Int } from 'type-graphql';
import { Components } from 'index';
import { IsCurrency, IsNumber, IsPositive, IsString, IsUUID, IsInt } from 'class-validator';
@InputType()
export class ComponentsInput implements Partial<Components> {
    @Field((_type) => String)
    @IsUUID()
    component_id!: string;

    @Field((_type) => String)
    @IsString()
    component_name!: string;

    @Field((_type) => String, { nullable: true })
    @IsString()
    component_description!: string;

    @Field((_type) => Float)
    @IsNumber({ maxDecimalPlaces: 2 })
    @IsCurrency({ allow_decimal: true, symbol: '$' })
    @IsPositive({ always: true })
    unit_price!: number;

    @Field((_type) => Int)
    @IsInt()
    in_stock!: number;
}
