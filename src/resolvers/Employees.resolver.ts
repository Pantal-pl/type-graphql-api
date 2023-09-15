import { Resolver, Query, Mutation, Args, Arg } from 'type-graphql';
import { Employees, EmployeesInput } from 'index';

@Resolver()
export class EmployeesResolver {
  @Query(() => Employees)
  async getEmployee(@Arg('employee_id', () => String) employee_id: string): Promise<Employees> {
    return new Employees();
  }

  @Mutation(() => Employees)
  async addEmployee(@Arg('input', () => EmployeesInput) input: Employees): Promise<Employees> {
    return new Employees();
  }

  @Mutation(() => Employees)
  async updateEmployee(
    @Arg('employee_id', () => String) employee_id: string,
    @Arg('input', () => EmployeesInput) input: EmployeesInput
  ): Promise<Employees> {
    return new Employees();
  }

  @Mutation(() => Boolean)
  async deleteEmployee(@Arg('employee_id', () => String) employee_id: String): Promise<Boolean> {
    return true;
  }
}
