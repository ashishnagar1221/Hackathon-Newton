const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let todoSchema = new Schema({
    name: String,
     
    date: String
});

module.exports = mongoose.model('Todo',todoSchema);