/* eslint-disable import/no-extraneous-dependencies */
import { Resolver, Query, Mutation, Arg } from 'type-graphql';
import { AppDataSource, Employees, EmployeesInput, getData } from 'index';
import { v4 as uuidv4 } from 'uuid';

@Resolver()
export class EmployeesResolver {
  @Query(() => Employees, { nullable: true })
  async getEmployee(@Arg('employee_id', () => String) employee_id: string): Promise<Employees | null> {
    return getData(Employees, 'employee_id', employee_id);
  }

  @Mutation((_returns) => Employees)
  async addEmployee(
    @Arg('input', () => EmployeesInput)
    { employee_contact, employee_first_name, employee_second_name, employment_date, position, salary }: Employees
  ): Promise<Employees> {
    const employeeData: Employees = {
      employee_id: uuidv4(),
      employee_first_name,
      employee_second_name,
      position,
      employment_date,
      salary,
      employee_contact,
    };

    await AppDataSource.createQueryBuilder().insert().into(Employees).values(employeeData).execute();

    return employeeData;
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
    const result = await AppDataSource.createQueryBuilder()
      .delete()
      .from(Employees)
      .where('employee_id = :employee_id', { employee_id })
      .execute();

    if (result.affected) {
      return true;
    }
    return false;
  }
}
