var mongoose = require('mongoose');

// create a user model
var Tweet = mongoose.model('Tweet', {
  //twitterhandle: String,
  twitterId: String,
  twitterIdStr: String,
  tweet: String,
  source: String,
  name: String,
  screen_name: String,
  retweet_count: String,
  entities: String,
  favorited: String,
  retweeted: String,
  created: Date
});

module.exports = Tweet;
