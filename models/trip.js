const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const passportLocalMongoose = require('passport-local-mongoose');

// const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/projectdb');

const trip = new Schema({
    cruiseline: { type: String, required: true },
    cruiseship: { type: String, required: true },
    saildate: { type: Date, required: true },
    questions: { type: Array, required: true },
    preference: { type: String, required: true }
});

trip.plugin(passportLocalMongoose);

module.exports = mongoose.model('trip', trip);