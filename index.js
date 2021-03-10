// Installed and required modules 
const express=require('express');
const app=express();

// Port 
const port=786;

 //inbuilt node module doesnt require installation
const path=require('path');


// Setting up views and view engine 
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));
// app.set(express.urlencoded());

//Middlewares | Need assets to access JS & CSS 
app.use(express.static('assets'));

// sending a response to home 
app.get('/',function(request,response){

    return response.render('home',{
       title: 'To Do App' 
    });
});

// App Listening on pre-selected port number 
app.listen(port,function(error){
    if(error)
    {
        console.log(`Error building server: ${error}`);
        return;
    }
    console.log(`Server up and running at port ${port}`);
});