import { Resolver, Query, Mutation, Args, Arg } from 'type-graphql';
import { Employess, EmployeesInput } from 'index';
@Resolver()
export class EmployeesResolver {
    @Query(() => Employess)
    async getEmployee(@Arg('employee_id', () => EmployeesInput) employee_id: string): Promise<Employess> {
        return new Employess();
    }

    @Mutation(() => Employess)
    async addEmployee(@Arg('input', () => EmployeesInput) input: Employess): Promise<Employess> {
        return new Employess();
    }

    @Mutation(() => Employess)
    async updateEmployee(
        @Arg('employee_id', () => EmployeesInput) employee_id: string,
        @Arg('input', () => EmployeesInput) input: EmployeesInput
    ): Promise<Employess> {
        return new Employess();
    }

    @Mutation(() => Boolean)
    async deleteEmployee(@Arg('employee_id', () => EmployeesInput) employee_id: String): Promise<Boolean> {
        return true;
    }
}
