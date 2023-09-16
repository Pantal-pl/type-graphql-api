import { DataSource } from 'typeorm';

// Create TypeORM dataSource
export const dataSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  poolSize: 5,
  port: 5432,
  database: 'weapon_database',
  password: 'admin',
  username: 'admin',
  dropSchema: true,
  logging: 'all',
  //   entities: [Rating, Recipe, User],
  logger: 'advanced-console',
});
async function main() {
  try {
    await dataSource.initialize();
  } catch (error) {
    console.error(error);
  }
}

main();
