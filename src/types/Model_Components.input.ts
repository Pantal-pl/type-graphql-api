import { Field, InputType } from 'type-graphql';
import { IsInt, IsUUID } from 'class-validator';
import { Model_Components } from './index';
@InputType()
export class Model_ComponentsInput implements Partial<Model_Components> {
    @Field()
    @IsUUID()
    entry_id!: string;

    @Field()
    @IsUUID()
    weapon_model_id!: string;

    @Field()
    @IsUUID()
    component_ID!: string;

    @Field()
    @IsInt()
    quantity_needed_for_model!: number;
}
