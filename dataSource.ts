import { DataSource } from 'typeorm';

// Create TypeORM dataSource
export const dataSource = new DataSource({
  type: 'postgres',
  url: process.env.DATABASE_URL,
  synchronize: true,
  dropSchema: true,
  cache: true,
  logging: 'all',
  //   entities: [Rating, Recipe, User],
  logger: 'advanced-console',
});
