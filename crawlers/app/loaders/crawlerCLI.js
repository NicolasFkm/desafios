const package = require('../package.json');
const program = require('commander');
const { getThreads } = require('../actions/TrendingAction');

function startCrawler() {
    program.version(package.version);
    
    program
        .command('trending <subReddits>')
        .alias("t")
        .description('Get the trending threads of the sub-reddits.')
        .action(getThreads);
    
    program.parse(process.argv);
}

module.exports = {
    startCrawler: startCrawler
}