import { Field, ObjectType, registerEnumType } from 'type-graphql';

enum ProductionStatus {
  PLANNED = 'PLANNED',
  IN_PROGRESS = 'IN_PROGRESS',
  COMPLETED = 'COMPLETED',
  DELAYED = 'DELAYED',
}
registerEnumType(ProductionStatus, {
  name: 'ProductionStatus',
  description: 'The basic production status',
});

@ObjectType({ description: 'The productions model' })
export class Productions {
  @Field((_type) => String)
  production_id!: string;

  @Field((_type) => String)
  weapon_model_id!: string;

  @Field((_type) => Date)
  production_start_date!: Date;

  @Field((_type) => Date)
  estimated_completion_date!: Date;

  @Field((_type) => ProductionStatus)
  production_status!: ProductionStatus;
}
