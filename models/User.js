const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const passportLocalMongoose = require('passport-local-mongoose');

// const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/projectdb');

const User = new Schema({
    name: { type: String, required: true },
    username: { type: String, required: true },
    password: { type: String, required: true }
});
//passport-local-mongoose creates a 'username' and some password fields for you
//you can add some other fields here too if you like

User.plugin(passportLocalMongoose);

module.exports = mongoose.model('User', User);