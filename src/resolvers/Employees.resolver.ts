/* eslint-disable import/no-extraneous-dependencies */
import { Resolver, Query, Mutation, Args, Arg } from 'type-graphql';
import { AppDataSource, Employees, EmployeesInput } from 'index';
import { v4 as uuidv4 } from 'uuid';

@Resolver()
export class EmployeesResolver {
  @Query(() => Employees)
  async getEmployee(@Arg('employee_id', () => String) employee_id: string): Promise<Employees> {
    const result = await AppDataSource.query(`SELECT * FROM employee WHERE employee_id = '${employee_id}'`);
    return result[0];
  }

  @Mutation((_returns) => Employees)
  async addEmployee(@Arg('input', () => EmployeesInput) input: Employees): Promise<Employees> {
    const UUIDv4 = uuidv4();
    await AppDataSource.query(`INSERT INTO employee (employee_id, employee_first_name, employee_second_name, position, employment_date, salary, employee_contact)
    VALUES
        ('${UUIDv4}','${input.employee_first_name}', '${input.employee_second_name}', '${input.position}', '${input.employment_date}', ${input.salary}, '${input.employee_contact}')
    `);

    return Object.assign(new Employees(), {
      employee_id: UUIDv4,
      employee_first_name: input.employee_first_name,
      employee_second_name: input.employee_second_name,
      position: input.position,
      employment_date: input.employment_date,
      salary: input.salary,
      employee_contact: input.employee_contact,
    });
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
    const result = await AppDataSource.query(`DELETE FROM employee WHERE employee_id = '${employee_id}'`);
    if (result[1]) {
      return true;
    }
    return false;
  }
}
