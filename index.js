// Installed and required modules 
const express = require('express');
var bodyParser = require('body-parser');
// databse config 
const db = require('./config/mongoose');
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
const Contact = require('../contactListProject/models/contact');
const { isArray } = require('jquery');


// Setting up views and view engine 
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.set(express.urlencoded());
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

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

isArrayy = function (a) {
    return (!!a) && (a.constructor === Array);
};
app.get('/delete-card/', function (request, response) {

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


// App Listening on pre-selected port number 
app.listen(process.env.PORT || port, function (error) {
    if (error) {
        console.log(`Error building server: ${error}`);
        return;
    }
    console.log(`Server up and running at port ${port}`);
});