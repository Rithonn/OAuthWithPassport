const express = require('express');
const authRoutes = require('./routes/auth-routes');
const passportSetup = require('./config/passport-setup');
const mongoose = require('mongoose');
const keys = require('./config/keys');

const app = express();

//Set up view engine
app.set('view engine', 'ejs');

//Connect to mongodb
mongoose.connect(keys.mongodb.dbURI, () =>{
    console.log("Connect to db was successful")
});

//setup the routes
app.use('/auth', authRoutes);

app.get('/', (req, res) => {
    res.render('home');
});

app.listen(3001, () =>{
    console.log('app is now listening on 3001 for requests')
});