const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let birthday = new Schema({
    name:{
        type: String,
        required:true
    },
    day: {
        type: Date,
        default:Date.now
    }
});

module.exports = mongoose.model('date',birthday);