const passport = require('passport');
const googlePass = require('passport-google-oauth20');
const keys = require('./keys');

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
        console.log(profile);
    }
    )
);
