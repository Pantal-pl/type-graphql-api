import { registerEnumType, Field, InputType } from 'type-graphql';
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
    name: 'Order status',
    description: 'The basic order status',
});

@InputType()
export class OrdersInput implements Partial<Orders> {
    @Field()
    @IsUUID()
    order_id!: string;

    @Field()
    @IsUUID()
    weapon_model_id!: string;

    @Field()
    @IsDate()
    order_date!: Date;

    @Field()
    @IsDate()
    expected_delivery_date!: Date;

    @Field()
    @IsEnum(OrderStatus)
    order_status!: OrderStatus;

    @Field()
    @IsNumber({ maxDecimalPlaces: 2 })
    @IsCurrency({ allow_decimal: true, symbol: '$' })
    @IsPositive({ always: true })
    total_order_cost!: number;
}
