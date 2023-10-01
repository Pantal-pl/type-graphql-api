import 'reflect-metadata';
import { Field, ObjectType, registerEnumType } from 'type-graphql';
import { Column, Entity, PrimaryColumn } from 'typeorm';

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

@Entity()
@ObjectType({ description: 'The productions model' })
export class Productions {
  @PrimaryColumn('uuid')
  @Field((_type) => String)
  production_id!: string;

  @Column({ type: 'varchar' })
  @Field((_type) => String)
  weapon_model_id!: string;

  @Column({ type: 'date' })
  @Field((_type) => Date)
  production_start_date!: Date;

  @Column({ type: 'date' })
  @Field((_type) => Date)
  estimated_completion_date!: Date;

  @Column({ type: 'enum', enum: ProductionStatus })
  @Field((_type) => ProductionStatus)
  production_status!: ProductionStatus;
}
