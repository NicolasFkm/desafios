#!/usr/bin/env node

const package = require('./package.json');
const { startCrawler } = require('./loaders/crawlerCLI');
const { startTelegramBot } = require('./loaders/telegramBot');

const command = process.argv[2];

if(command == "trending")
{
    startCrawler();
}

else if(command == "bot")
{
    startTelegramBot();
}


