const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const authorSchema = new Schema({
   name:String,
   books:Array
});

const author = mongoose.model('author',authorSchema);

module.exports = author;