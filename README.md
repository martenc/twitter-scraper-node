# Installation

We need Node, npm, bower and MongoDB for this to work. Then in the project directory:

    $ npm install
    $ bower install

Setup Mongo (e.g. mongolabs or locally) 

Create your twitter app and create your own oath.js file, then configure your keys as shown below (all facebook stuff has been excluded or commented out)

# Twitter stream

If you go to http://localhost:3000/fight you will get the Twitter stream

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
