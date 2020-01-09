const router = require('express').Router();
const passport = require('passport');

//Auth login, render a login page
router.get('/login', (req, res) => {
    res.render('login');
});

//Auth logout 
router.get('/logout', (req, res) => {
    //Do this is passport later on
    res.send('Logging out');
});

//Auth with google
router.get('/google', passport.authenticate('google',{
    scope: ['profile']
}));

//Create the callback route for a redirect
router.get('/google/redirect/', passport.authenticate('google'), (req, res) =>{
    console.log('Did the callback function')
});

module.exports = router;