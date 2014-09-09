var mongoose = require('mongoose');

// create a user model
var Tweet = mongoose.model('Tweet', {
  oauthID: Number,
  name: String,
  created: Date
});

module.exports = User;
