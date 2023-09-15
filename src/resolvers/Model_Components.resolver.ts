import { Resolver, Query, Mutation, Args, Arg } from 'type-graphql';
import { Model_Components, Model_ComponentsInput } from 'index';

@Resolver()
export class Model_ComponentsResolver {
  @Query(() => Model_Components)
  async getModelComponent(@Arg('entry_id', () => String) entry_id: string): Promise<Model_Components> {
    return new Model_Components();
  }

  @Mutation(() => Model_Components)
  async addModelComponent(@Arg('input', () => Model_ComponentsInput) input: Model_Components): Promise<Model_Components> {
    return new Model_Components();
  }

  @Mutation(() => Model_Components)
  async updateModelComponent(
    @Arg('entry_id', () => String) entry_id: string,
    @Arg('input', () => Model_ComponentsInput) input: Model_ComponentsInput
  ): Promise<Model_Components> {
    return new Model_Components();
  }

  @Mutation(() => Boolean)
  async deleteModelComponent(@Arg('entry_id', () => String) entry_id: String): Promise<Boolean> {
    return true;
  }
}
