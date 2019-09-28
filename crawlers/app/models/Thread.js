class Thread{
    get score(){
        return this._score;
    }
    
    set score(value){
        this._score = value;
    }
   
    get subreddit(){
        return this._subreddit;
    }
    
    set subreddit(value){
        this._subreddit = value;
    }
   
    get title(){
        return this._title;
    }
    
    set title(value){
        this._title = value;
    }
    
    get commentsLink(){
        return this._commentsLink;
    }
    
    set commentsLink(value){
        this._commentsLink = `https://old.reddit.com${value}`;
    }
    
    get link(){
        return this._link;
    }
    
    set link(value){
        this._link = value;
    }
}

module.exports = Thread;