import 'reflect-metadata';
import { Field, InputType, registerEnumType } from 'type-graphql';
import { IsDate, IsEnum, IsUUID } from 'class-validator';
import { Column, Entity, PrimaryColumn } from 'typeorm';
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

@Entity()
@InputType({ description: 'The productions model' })
export class ProductionsInput implements Partial<Productions> {
  @PrimaryColumn('uuid')
  @Field((_type) => String)
  @IsUUID()
  production_id!: string;

  @Column({ type: 'varchar' })
  @Field((_type) => String)
  @IsUUID()
  weapon_model_id!: string;

  @Column({ type: 'date' })
  @Field((_type) => Date)
  @IsDate()
  production_start_date!: Date;

  @Column({ type: 'date' })
  @Field((_type) => Date)
  @IsDate()
  estimated_completion_date!: Date;

  @Column({ type: 'enum', enum: ProductionStatus })
  @Field((_type) => ProductionStatus)
  @IsEnum(ProductionStatus)
  production_status!: ProductionStatus;
}
