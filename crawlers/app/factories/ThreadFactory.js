const Thread = require("../models/Thread");

function createThread(threadInfo) {
    const thread = new Thread();
    
    thread.title = threadInfo.title;
    thread.subreddit = threadInfo.subreddit;
    thread.score = threadInfo.ups - threadInfo.downs;
    thread.commentsLink = threadInfo.permalink;
    thread.link = threadInfo.url;
    
    return thread;
}

module.exports = {
    createThread: createThread
}