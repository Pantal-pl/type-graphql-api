import { AppDataSource, Component, ComponentInput, getData } from 'index';
import { Resolver, Query, Mutation, Arg } from 'type-graphql';
import { v4 as uuidv4 } from 'uuid';

@Resolver()
export class ComponentResolver {
  @Query(() => Component, { nullable: true })
  async getComponent(@Arg('component_id', () => String) component_id: string): Promise<Component | null> {
    return getData(Component, 'component_id', component_id);
  }

  @Mutation((_returns) => Component)
  async addComponent(
    @Arg('input', () => ComponentInput)
    { component_description, component_name, in_stock, unit_price }: Component
  ): Promise<Component> {
    const componentData: Component = {
      component_id: uuidv4(),
      component_description,
      component_name,
      in_stock,
      unit_price,
    };

    await AppDataSource.createQueryBuilder().insert().into(Component).values(componentData).execute();

    return componentData;
  }

  @Mutation(() => Component)
  async updateComponent(
    @Arg('component_id', () => String) component_id: string,
    @Arg('input', () => ComponentInput) input: ComponentInput
  ): Promise<Component> {
    return new Component(); // temporary
  }

  @Mutation(() => Boolean)
  async deleteComponent(@Arg('component_id', () => String) component_id: String): Promise<Boolean> {
    const result = await AppDataSource.createQueryBuilder()
      .delete()
      .from(Component, 'component')
      .where('component.component_id = :component_id', { component_id })
      .execute();

    if (result.affected) {
      return true;
    }
    return false;
  }
}
