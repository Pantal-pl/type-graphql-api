/* eslint-disable no-console */
import 'reflect-metadata';
import path from 'node:path';
import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import { buildSchema } from 'type-graphql';
import { fileURLToPath } from 'url';
import {
  ComponentResolver,
  EmployeesResolver,
  Model_ComponentsResolver,
  OrdersResolver,
  ProductionsResolver,
  Weapon_ModelsResolver,
  AppDataSource,
} from 'index';

async function bootstrap() {
  const filename = fileURLToPath(import.meta.url);

  const dirname = path.dirname(filename);

  await AppDataSource.initialize();

  const schema = await buildSchema({
    resolvers: [ComponentResolver, EmployeesResolver, OrdersResolver, Model_ComponentsResolver, ProductionsResolver, Weapon_ModelsResolver],
    emitSchemaFile: path.resolve(dirname, 'schema.graphql'),
    validate: true,
  });

  const server = new ApolloServer({ schema });

  const { url } = await startStandaloneServer(server, {
    listen: { port: 4000 },
  });
  console.log(`GraphQL server ready at ${url}`);
}

bootstrap().catch(console.error);

export * from 'types';
export * from 'resolvers';
export * from 'data';
export * from 'helpers';
