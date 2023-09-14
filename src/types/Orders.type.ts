import { Field, Float, ObjectType, registerEnumType } from 'type-graphql';

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

@ObjectType({ description: 'The orders model' })
export class Orders {
    @Field((_type) => String)
    order_id!: string;

    @Field((_type) => String)
    weapon_model_id!: string;

    @Field((_type) => Date)
    order_date!: Date;

    @Field((_type) => Date)
    expected_delivery_date!: Date;

    @Field((_type) => OrderStatus)
    order_status!: OrderStatus;

    @Field((_type) => Float)
    total_order_cost!: number;
}
