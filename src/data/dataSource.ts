import 'reflect-metadata';
/* eslint-disable no-console */
import { Component, Employees, Model_Components, Orders, Productions, Weapon_Models } from 'index';
import { DataSource } from 'typeorm';

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 9999,
  username: 'root',
  password: 'root',
  entities: [Employees, Component, Model_Components, Orders, Productions, Weapon_Models],
  database: 'weapon_database',
});

AppDataSource.initialize()
  .then(() => {
    console.log('Data Source has been initialized!');
  })
  .catch((err) => {
    console.error('Error during Data Source initialization', err);
  });
