const axios = require("axios");
const { createThread } = require("../factories/ThreadFactory");
// const Thread = require("../models/Thread");
const redditUriBase = "https://old.reddit.com/r/";

class RedditService {

    async getTrendingThreads(subReddit) {
        return await axios.get(`${redditUriBase}${subReddit}.json`)
            .then(response => response.data.data.children
                .filter(info => {
                    let score = info.data.ups - info.data.downs;
                    return score >= 5000;
                })
                .map((value, index) => createThread(value.data)))
            .catch(err => {
                console.log(err);
                return null;
            });
    }

}

module.exports = RedditService;