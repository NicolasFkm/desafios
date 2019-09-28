const chalk = require("chalk");
const boxen = require("boxen");
const RedditService = require("../services/RedditService");
const Style = require("../config/Style");

function getThreads(subReddits)
{
    if(!subReddits) {
        throw new Error("Invalid subreddit");
    }

    let subredditList = subReddits.split(',');
    const redditService = new RedditService();
    
    let titleBox = boxen( chalk.magenta.bold("Trending Threads"), Style.Box.Title );
    console.log(titleBox);
    
    subredditList.forEach(async subReddit => {
        console.log("Loading...");
        
        let list = await redditService.getTrendingThreads(subReddit);
        let subtitle = boxen( chalk.white.bold(subReddit.toUpperCase()), Style.Box.SubReddit );
        console.log(subtitle);
        
        if(list.length == 0) {
            console.log(`${chalk.white.bold("No threads found.")}`);
            console.log("\n");
            console.log(chalk.white.bold("------------------------------"));
            console.log("\n");

            return;
        }

        list.forEach(async element => {
            console.log(`${chalk.white.bold(element.title)}`);
            console.log(`${chalk.cyan("Score:")} ${chalk.cyan.bold(element.score)}`)
            console.log(`${chalk.cyan("Comments:")} ${element.commentsLink}`)
            console.log(`${chalk.cyan("Url:")} ${element.link}`)
            console.log("\n");
            console.log(chalk.white.bold("------------------------------"));
            console.log("\n");
        });
    
    });
}

module.exports = {
    getThreads: getThreads
}