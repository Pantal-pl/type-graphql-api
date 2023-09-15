import { Resolver, Query, Mutation, Args, Arg } from 'type-graphql';
import { Productions, ProductionsInput } from 'index';

@Resolver()
export class ProductionsResolver {
  @Query(() => Productions)
  async getProduction(@Arg('production_id', () => String) production_id: string): Promise<Productions> {
    return new Productions();
  }

  @Mutation(() => Productions)
  async addProduction(@Arg('input', () => ProductionsInput) input: Productions): Promise<Productions> {
    return new Productions();
  }

  @Mutation(() => Productions)
  async updateProduction(
    @Arg('production_id', () => String) production_id: string,
    @Arg('input', () => ProductionsInput) input: ProductionsInput
  ): Promise<Productions> {
    return new Productions();
  }

  @Mutation(() => Boolean)
  async deleteProduction(@Arg('production_id', () => String) production_id: String): Promise<Boolean> {
    return true;
  }
}
