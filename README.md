[ ![Codeship Status for martenc/twitter-scraper-node](https://www.codeship.io/projects/21da69d0-1a8d-0132-bf86-4a07366ee29d/status)](https://www.codeship.io/projects/34703)


# Installation

We need Node, npm, bower and MongoDB for this to work. Then in the project directory:

    $ npm install
    $ bower install

Setup Mongo (e.g. mongolabs or locally) 

Create your twitter app and create your own oath.js and database.js file, then configure your keys as shown below (all facebook stuff has been excluded or commented out). Make sure you update the callback url in your oath.js file if/when you go live.

# Twitter stream

If you go to http://localhost:3000/drake you will get the Twitter stream

# Oauth.js for Facebook and Twitter

var ids = {
    facebook: {
        clientID: "",
        clientSecret: "",
        callbackURL: "http://localhost:3000/auth/facebook/callback"
    },
    twitter: {
        consumerKey: "",
        consumerSecret: "",
        callbackURL: "http://localhost:3000/auth/twitter/callback",
        accessToken: "",
        accessTokenSecret: ""
    }
}

module.exports = ids


# database.js for connecting to mongodb
module.exports = {
    'url' : 'mongodb://<user>:<pass>@mongo.onmodulus.net:27017/Mikha4ot' 
};
