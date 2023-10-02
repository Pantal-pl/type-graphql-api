import 'reflect-metadata';
import { Field, InputType, Float, Int } from 'type-graphql';
import { Component } from 'index';
import { IsCurrency, IsNumber, IsPositive, IsString, IsUUID, IsInt } from 'class-validator';
import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity()
@InputType()
export class ComponentInput implements Partial<Component> {
  @PrimaryColumn('uuid')
  @Field((_type) => String, { nullable: true })
  @IsUUID()
  component_id: string | undefined;

  @Column({ type: 'varchar' })
  @Field((_type) => String)
  @IsString()
  component_name!: string;

  @Column({ type: 'varchar' })
  @Field((_type) => String, { nullable: true })
  @IsString()
  component_description!: string;

  @Column({ type: 'float' })
  @Field((_type) => Float)
  @IsNumber({ maxDecimalPlaces: 2 })
  @IsPositive({ always: true })
  unit_price!: number;

  @Column({ type: 'float' })
  @Field((_type) => Int)
  @IsInt()
  in_stock!: number;
}
