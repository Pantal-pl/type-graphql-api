import { Resolver, Query, Mutation, Args, Arg } from 'type-graphql';

@Resolver()
export class EmployeesResolver {
    @Query(() => String)
    async get(@Arg('v', () => String) v: any): Promise<any> {}

    @Mutation(() => String)
    async add(@Arg('v1', () => String) v1: any): Promise<any> {}

    @Mutation(() => String)
    async delete(@Arg('v2', () => String) v2: any): Promise<any> {}
}
