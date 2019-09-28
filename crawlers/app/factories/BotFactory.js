const TelegramBot = require('node-telegram-bot-api');
const Configuration = require("../config/Configuration");

function createTelegramBot() {
    return new TelegramBot(Configuration.Token, { polling: true });
}

module.exports = {
    createTelegramBot: createTelegramBot
}