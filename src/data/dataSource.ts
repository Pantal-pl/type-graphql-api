import { DataSource } from 'typeorm';

// Create TypeORM dataSource
export const dataSource = new DataSource({
  type: 'postgres',
  url: process.env.DATABASE_URL,
  host: 'localhost',
  port: 9999,
  database: 'weapon_database',
  password: 'admin',
  username: 'admin',
  synchronize: true,
  dropSchema: true,
  cache: true,
  logging: 'all',
  //   entities: [Rating, Recipe, User],
  logger: 'advanced-console',
});
