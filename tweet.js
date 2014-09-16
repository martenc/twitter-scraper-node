var mongoose = require('mongoose');

// create a user model
var Tweet = mongoose.model('Tweet', {
  //twitterhandle: String,
  tweet: String,
  created: Date
});

module.exports = Tweet;
