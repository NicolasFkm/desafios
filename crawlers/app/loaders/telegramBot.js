const { createTelegramBot } = require('../factories/BotFactory');
const RedditService = require("../services/RedditService");

function startTelegramBot() {
    const bot = createTelegramBot();

    bot.on("polling_error", (err) => console.log(err));

    bot.onText(/\/NadaPraFazer (.+)/, (msg, match) => {
        if (!match[1]) {
            console.log("Invalid subreddit!");
            return false;
        }

        let subreddits = match[1].split(",");
        const redditService = new RedditService();

        bot.sendMessage(msg.chat.id, 'Searching the main threads, keep doing nothing...');

        subreddits.forEach(async subReddit => {
            let list = await redditService.getTrendingThreads(subReddit).catch(err => {console.log(err)});

            if (list.length == 0) {
                bot.sendMessage(msg.chat.id, `${subReddit} \n No threads found :(`);
                return;
            }

            let message = `/r/${subReddit} \n \n`;

            list.forEach(element => {
                message += `${element.title} \n
                Score: ${element.score} \n
                Comments: ${element.commentsLink} \n
                Url: ${element.link}\n\n`;
            });

            bot.sendMessage(msg.chat.id, message);

        })


    });
}

module.exports = {
    startTelegramBot: startTelegramBot
}