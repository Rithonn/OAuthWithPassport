const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//User schema passes object into it
const userSchema = new Schema({
    username: String,
    googleId: String, 
});

const User = mongoose.model('user', userSchema);

module.exports = User;