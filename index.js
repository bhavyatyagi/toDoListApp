// Installed and required modules 
const express = require('express');
var bodyParser = require('body-parser');
// databse config 
const db = require('./config/mongoose');
<<<<<<< HEAD
const ToDoList = require('./models/toDoList');
var jsdom = require('jsdom');
$ = require('jquery')(new jsdom.JSDOM().window);
const app = express();

// Port 
const port = 786;

//inbuilt node module doesnt require installation
const path = require('path');
const { request } = require('http');
const { response } = require('express');
const { isArray } = require('jquery');
=======
const DB = 'mongodb+srv://bhavya2654:Bhavya@161201@cluster0.pffrg.mongodb.net/toDoList?retryWrites=true&w=majority';
const ToDoList = require('./models/toDoList');
const app = express();

// Port 
const port = 8080;

//inbuilt node module doesnt require installation
const path = require('path');
const {
    request
} = require('http');
const {
    response
} = require('express');
const Contact = require('../contactListProject/models/contact');
const {
    isArray
} = require('jquery');
>>>>>>> 42d510c0ae5227488062082b2d824e6e97898b12


// Setting up views and view engine 
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.set(express.urlencoded());
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({
    extended: false
}));

// parse application/json
app.use(bodyParser.json());
//Middlewares | Need assets to access JS & CSS 
app.use(express.static('assets'));

// sending a response to home 
app.get('/', function (request, response) {

    ToDoList.find({}, function (error, toDoList) {
        if (error) {
            console.log('Error in fetching ToDoLists from DB');
            return;
        }
        return response.render('home', {
            title: 'To Do App',
            toDoList: toDoList
        });
    })
});

// creating list cards 
app.post('/create-card', function (request, response) {
<<<<<<< HEAD
=======

    // If no deadlinesare given 
    if (request.body.date == "")
        request.body.date = "No Deadlines";

>>>>>>> 42d510c0ae5227488062082b2d824e6e97898b12
    ToDoList.create({
        description: request.body.description,
        category: request.body.category,
        date: request.body.date
    }, function (error, newList) {
        if (error) {
            console.log('Error in creating card in DB');
            return;
        }
        console.log('*********', newList);
        return response.redirect('back');
    });
});

<<<<<<< HEAD
=======
// to check if the response incming is a list or just a single element 
>>>>>>> 42d510c0ae5227488062082b2d824e6e97898b12
isArrayy = function (a) {
    return (!!a) && (a.constructor === Array);
};
app.get('/delete-card/', function (request, response) {

<<<<<<< HEAD
=======
    // if only single item to be deleted 
>>>>>>> 42d510c0ae5227488062082b2d824e6e97898b12
    let itemsToBeDeleted = new Array();
    if (isArrayy(request.query.check) == false) {
        ToDoList.findByIdAndDelete(request.query.check, function (error) {
            if (error) {
                console.log('Error in deleting lists/cards from DB');
                return;
            }
            return response.redirect('back');
        });
    }
<<<<<<< HEAD
=======
    // multiple items to be deleted 
>>>>>>> 42d510c0ae5227488062082b2d824e6e97898b12
    else {
        itemsToBeDeleted = request.query.check;
        for (let i = 0; i < itemsToBeDeleted.length; i++) {
            ToDoList.findByIdAndDelete(itemsToBeDeleted[i], function (error) {
                if (error) {
                    console.log('Error in deleting lists/cards from DB');
                    return;
                }
            });
        }
        return response.redirect('back');
    }
});

// I am doing this change 
// App Listening on pre-selected port number 
app.listen(process.env.PORT || port, function (error) {
    if (error) {
        console.log(`Error building server: ${error}`);
        return;
    }
    console.log(`Server up and running at port ${process.env.PORT || port}`);
});