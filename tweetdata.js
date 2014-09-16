
var Tweets = require('./tweet.js')
//var mongoose = require('mongoose');
//var configDB = require('./database.js');

//mongoose.connect(configDB.url);  // connect to our database
 
//passport
exports.save = function(tweetData) {
    var tweet = new Tweets({
      //twitterhandle: tweetData.text,
      tweet: tweetData.text,
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


