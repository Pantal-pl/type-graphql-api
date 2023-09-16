#!/usr/bin/env node
/* eslint-disable no-console */
/* eslint-disable no-await-in-loop */
import { execSync } from 'child_process';
import chalk from 'chalk';
import inquirer from 'inquirer';

const scripts = [
  {
    name: 'lint',
    description: 'Run lint',
    command: 'npm run lint',
  },
  {
    name: 'lint:fix',
    description: 'Run lint:fix',
    command: 'npm run lint:fix',
  },
  {
    name: 'prettier:write',
    description: 'Run prettier:write',
    command: 'npm run prettier:write',
  },
  {
    name: 'prettier:check',
    description: 'Run prettier:check',
    command: 'npm run prettier:check',
  },
];

const executeCommand = (command: string, description: string) => {
  try {
    execSync(command, { stdio: 'inherit' });
    console.log(chalk.green(`✔ ${description} completed successfully`));
  } catch (error) {
    console.error(chalk.red(`✘ Error during ${description}: ${error}`));
    process.exit(1);
  }
};

const main = async () => {
  while (true) {
    console.log(chalk.blue('Choose a script to run:'));

    const scriptChoices = scripts.map((script) => ({
      name: script.description,
      value: script,
    }));

    const { selectedScript } = await inquirer.prompt([
      {
        type: 'list',
        name: 'selectedScript',
        message: 'Select a script:',
        choices: scriptChoices,
      },
    ]);

    executeCommand(selectedScript.command, selectedScript.name);
  }
};

main();
