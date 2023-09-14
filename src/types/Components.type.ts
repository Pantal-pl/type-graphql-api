import { ObjectType, Field, Float, Int } from 'type-graphql';

@ObjectType({ description: 'The components model' })
export class Components {
    @Field((_type) => String)
    component_id!: string;

    @Field((_type) => String)
    component_name!: string;

    @Field((_type) => String)
    component_description!: string;

    @Field((_type) => Float)
    unit_price!: number;

    @Field((_type) => Int)
    in_stock!: number;
}
