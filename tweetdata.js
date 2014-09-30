
var Tweets = require('./tweet.js')
//var mongoose = require('mongoose');
//var configDB = require('./database.js');

//mongoose.connect(configDB.url);  // connect to our database
 
//passport
exports.save = function(tweetData) {
    var tweet = new Tweets({
      //twitterhandle: tweetData.text,
      twitterId: tweetData.id,
      twitterIdStr: tweetData.id_str,
      tweet: tweetData.text,
      source: tweetData.source,
      name: tweetData.user.name,
      screen_name: tweetData.user.screen_name,
      retweet_count: tweetData.retweet_count,
      entities: tweetData.entities,
      favorited: tweetData.favorited,
      retweeted: tweetData.retweeted,
      created: Date.now()
    });
    tweet.save(function(err) {
      if(err) {
          console.log(err);
      } else {
          console.log("saving tweet ...");
          //done(null, tweet);
      };
    });
};


