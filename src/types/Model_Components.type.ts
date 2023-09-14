import { Field, Int, ObjectType } from 'type-graphql';

@ObjectType()
export class Model_Components {
    @Field((_type) => String)
    entry_id!: string;

    @Field((_type) => String)
    weapon_model_id!: string;

    @Field((_type) => String)
    component_ID!: string;

    @Field((_type) => Int)
    quantity_needed_for_model!: number;
}
