#!/usr/bin/env node
const program = require('commander');
const package = require('../package.json');

program.version(package.version);

program
  .command('init <name>')
  .description('init project')
  .action(name => {
    console.log('init' + name);
  })
program.parse(process.argv);