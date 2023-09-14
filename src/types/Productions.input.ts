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
    name: 'Production status',
    description: 'The basic production status',
});

@InputType({ description: 'The productions model' })
export class ProductionsInput implements Partial<Productions> {
    @Field()
    @IsUUID()
    production_ID!: string;

    @Field()
    @IsUUID()
    weapon_model_ID!: string;

    @Field()
    @IsDate()
    production_start_date!: Date;

    @Field()
    @IsDate()
    estimated_completion_date!: Date;

    @Field()
    @IsEnum(ProductionStatus)
    production_status!: ProductionStatus;
}
