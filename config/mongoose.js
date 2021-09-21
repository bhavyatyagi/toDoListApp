// Requiring the library
const mongoose = require('mongoose');

// Making a connection to the database
// mongoose.connect('mongodb://localhost/todolist_db');
const DB = 'mongodb+srv://bhavya2654:Bhavya@161201@cluster0.pffrg.mongodb.net/toDoList?retryWrites=true&w=majority';
mongoose.connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false
}).then(() => {
    console.log('Succefully connected to DB');
}).catch((err) => console.log('Unsuccesful in connected to DB'));

//Acquire the connection to check if it is succesful
// const db = mongoose.connection;

// // Error handling, binding console to the error
// db.on('error', console.error.bind(console, 'error connecting to db'));

// // Connection established, up and runnninf then print the following message
// db.once('open', function () {
//     console.log('Succesfully connected to the database');
// });