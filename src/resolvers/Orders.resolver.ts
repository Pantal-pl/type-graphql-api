import { Resolver, Query, Mutation, Args, Arg } from 'type-graphql';
import { Orders, OrdersInput } from 'index';

@Resolver()
export class OrdersResolver {
  @Query(() => Orders)
  async getOrder(@Arg('order_id', () => String) order_id: string): Promise<Orders> {
    return new Orders();
  }

  @Mutation(() => Orders)
  async addOrder(@Arg('input', () => OrdersInput) input: Orders): Promise<Orders> {
    return new Orders();
  }

  @Mutation(() => Orders)
  async updateOrder(@Arg('order_id', () => String) order_id: string, @Arg('input', () => OrdersInput) input: OrdersInput): Promise<Orders> {
    return new Orders();
  }

  @Mutation(() => Boolean)
  async deleteOrder(@Arg('order_id', () => String) order_id: String): Promise<Boolean> {
    return true;
  }
}
