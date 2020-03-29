const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let birthday = new Schema({
    name:{
        type: String,
    },
    day: {
        type: Date
    }
});

module.exports = mongoose.model('date',birthday);