import { Components, ComponentsInput } from 'index';
import { Resolver, Query, Mutation, Arg } from 'type-graphql';

@Resolver()
export class ComponentResolver {
    @Query(() => Components)
    async getComponent(@Arg('component_id', () => ComponentsInput) component_id: string): Promise<Components> {
        return new Components(); // temporary
    }

    @Mutation(() => Components)
    async addComponent(@Arg('input', () => ComponentsInput) input: ComponentsInput): Promise<Components> {
        return new Components(); // temporary
    }

    @Mutation(() => Components)
    async updateComponent(
        @Arg('component_id', () => ComponentsInput) component_id: string,
        @Arg('input', () => ComponentsInput) input: ComponentsInput
    ): Promise<Components> {
        return new Components(); // temporary
    }

    @Mutation(() => Boolean)
    async deleteComponent(@Arg('component_id', () => ComponentsInput) component_id: string): Promise<boolean> {
        return true; // temporary
    }
}
