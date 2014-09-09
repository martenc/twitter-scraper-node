var config = require('./oauth.js')
var passport = require('passport')
  , TwitterStrategy = require('passport-twitter').Strategy;
  //, FacebookStrategy = require('passport-facebook').Strategy;
var User = require('./user.js')
var mongoose = require('mongoose');
var configDB = require('./database.js');

mongoose.connect(configDB.url);  // connect to our database
 
//passport
module.exports = passport.use(new TwitterStrategy({
    consumerKey: config.twitter.consumerKey,
    consumerSecret: config.twitter.consumerSecret,
    callbackURL: config.twitter.callbackURL
  },
  function(token, tokenSecret, profile, done) {
    User.findOne({oauthID: profile.id}, function(err, user) {
      if (err) { 
        console.log("user exists ...no need to add um");
        return done(err); 
      }

      if (!err && user != null) {
        done(null, user);
      } else {
        var user = new User({
          oauthID: profile.id,
          name: profile.displayName,
          created: Date.now()
        });
        user.save(function(err) {
          if(err) {
              console.log(err);
          } else {
              console.log("saving user ...");
              done(null, user);
          };
        });
      }
    });
  }
));

/* passport.use(new FacebookStrategy({
    clientID: config.facebook.clientID,
    clientSecret: config.facebook.clientSecret,
    callbackURL: config.facebook.callbackURL
  },
  function(accessToken, refreshToken, profile, done) {
    User.findOne({oauthID: profile.id}, function(err, user) {
      if (err) { return done(err); }

      if (!err && user != null) {
        done(null, user);
      } else {
        console.dir(profile);
        var user = new User({
          oauthID: profile.id,
          name: profile.displayName,
          created: Date.now()
        });
        user.save(function(err) {
          if(err) {
              console.log(err);
          } else {
              console.log("saving user ...");
              done(null, user);
          };
        });
      }
    });
  } 
));  */
