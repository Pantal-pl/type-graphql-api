import { registerEnumType, Field, InputType, Float } from 'type-graphql';
import { IsCurrency, IsDate, IsEnum, IsNumber, IsPositive, IsUUID } from 'class-validator';
import { Orders } from 'index';

enum OrderStatus {
    PENDING = 'PENDING',
    IN_PROGRESS = 'IN_PROGRESS',
    SHIPPED = 'SHIPPED',
    DELIVERED = 'DELIVERED',
    CANCELED = 'CANCELED',
}

registerEnumType(OrderStatus, {
    name: 'OrderInputStatus',
    description: 'The basic order status',
});

@InputType()
export class OrdersInput implements Partial<Orders> {
    @Field((_type) => String)
    @IsUUID()
    order_id!: string;

    @Field((_type) => String)
    @IsUUID()
    weapon_model_id!: string;

    @Field((_type) => Date)
    @IsDate()
    order_date!: Date;

    @Field((_type) => Date)
    @IsDate()
    expected_delivery_date!: Date;

    @Field((_type) => OrderStatus)
    @IsEnum(OrderStatus)
    order_status!: OrderStatus;

    @Field((_type) => Float)
    @IsNumber({ maxDecimalPlaces: 2 })
    @IsCurrency({ allow_decimal: true, symbol: '$' })
    @IsPositive({ always: true })
    total_order_cost!: number;
}
