const passport = require('passport');
const googlePass = require('passport-google-oauth20');
const keys = require('./keys');
const User = require('../models/user-model');

//Creating the config for using google
passport.use(
    new googlePass({
    //Options needed for the new authentication
    clientID: keys.google.clientID,

    clientSecret: keys.google.clientSecret,
    
    callbackURL: '/auth/google/redirect'
    //Create the callback function after
    }, (accessToken, refreshToken, profile, cb) => {
        //Passport callback function here
        console.log('Fired a callback after the code was retrieved');
        //Check if the user already exists
        User.findOne({googleId: profile.id}).then((currentUser) => {
            if(currentUser){
                console.log('Already have a user generated for that');
            }else{
            //Create the new user
            new User({
                username: profile.displayName,
                googleId: profile.id
            }).save().then((newUser) => {
                console.log('New user was created in DB: ' + newUser);
            });
            }
        });  
    }
    )
);
