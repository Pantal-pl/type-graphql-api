import { Field, InputType, Int } from 'type-graphql';
import { IsInt, IsUUID } from 'class-validator';
import { Model_Components } from 'index';

@InputType()
export class Model_ComponentsInput implements Partial<Model_Components> {
  @Field((_type) => String)
  @IsUUID()
  entry_id!: string;

  @Field((_type) => String)
  @IsUUID()
  weapon_model_id!: string;

  @Field((_type) => String)
  @IsUUID()
  component_ID!: string;

  @Field((_type) => Int)
  @IsInt()
  quantity_needed_for_model!: number;
}
