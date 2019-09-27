#!/usr/bin/env node

const program = require('commander');
const package = require('./package.json');
const {formatTextAction, justifyTextAction} = require("./actions/FormatAction");

program.version(package.version);

program
    .command('format <text> [<length>]')
    .alias("f")
    .description('Format the text to a max. 40 char per line.')
    .action(formatTextAction);

program
    .command('justify <text> [<length>]')
    .alias("j")
    .description('Justify the text to 40 char per line.')
    .action(justifyTextAction);

program.parse(process.argv);