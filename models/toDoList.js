const mongoose = require('mongoose');

// creating a new Schema 
const todolistSchema = new mongoose.Schema({
    description: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    date: {
        type: String,
        required: true
    }
});

// making an instance/model and letting mongoose know so that we can use it later 
const ToDoList = mongoose.model('ToDoList', todolistSchema);

// exporting
module.exports = ToDoList;