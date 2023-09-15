import { Field, InputType, registerEnumType } from 'type-graphql';

import { IsDate, IsEnum, IsUUID } from 'class-validator';
import { Productions } from 'index';

enum ProductionStatus {
  PLANNED = 'PLANNED',
  IN_PROGRESS = 'IN_PROGRESS',
  COMPLETED = 'COMPLETED',
  DELAYED = 'DELAYED',
}

registerEnumType(ProductionStatus, {
  name: 'ProductionInputStatus',
  description: 'The basic production status',
});

@InputType({ description: 'The productions model' })
export class ProductionsInput implements Partial<Productions> {
  @Field((_type) => String)
  @IsUUID()
  production_id!: string;

  @Field((_type) => String)
  @IsUUID()
  weapon_model_id!: string;

  @Field((_type) => Date)
  @IsDate()
  production_start_date!: Date;

  @Field((_type) => Date)
  @IsDate()
  estimated_completion_date!: Date;

  @Field((_type) => ProductionStatus)
  @IsEnum(ProductionStatus)
  production_status!: ProductionStatus;
}
