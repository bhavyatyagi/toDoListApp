# toDoListApp

This web-based application helps you remember your day to day chores. A to-do list has a Psychological effect on a human being that helps them organise and complete their things on time.
Update: This app is now deployed at https://to-do-list-tyagi.herokuapp.com/
---
## Requirements

For development, the tech-stack used are HTML5, CSS, javaScript, MongoDB/MongoAtlas and Node.js. 

## Screenshots
![To Do List Home](https://i.ibb.co/0trSr0n/Screenshot-168.png)

### Node
- #### Node installation on Windows

  Just go on [official Node.js website](https://nodejs.org/) and download the installer.
Also, be sure to have `git` available in your PATH, `npm` might need it (You can find git [here](https://git-scm.com/)).

- #### Node installation on Ubuntu

  You can install nodejs and npm easily with apt install, just run the following commands.

      $ sudo apt install nodejs
      $ sudo apt install npm

- #### Other Operating Systems
  You can find more information about the installation on the [official Node.js website](https://nodejs.org/) and the [official NPM website](https://npmjs.org/).

If the installation was successful, you should be able to run the following command.

    $ node --version
    v8.11.3

    $ npm --version
    6.1.0

If you need to update `npm`, you can make it using `npm`! Cool right? After running the following command, just open again the command line and be happy.

    $ npm install npm -g

###
---

## Download & Install

    $ git clone https://github.com/bhavyatyagi/toDoListApp.git
    $ cd toDoList
    

## Dependencies
- After installing node, this project will need some dependecies too, so just run the following command.

      $ npm install 

## Configure app

- Make sure your MongoDB database server is running
- Change the MongoAtlas authentication details according to your Database Cluster if deployed on cloud

## Running the project

    $ npm start
 
 - This should make your app available on port 8080.

## Simple build for production

    $ npm build
    
    
## Simple build for production

    $ git add .
    $ git commit -am "make it better"
    $ git push heroku master   
    
   - Use the available methods at Heroku, I just used the CLI and this command above to deploy.
   - This would require MongoAtlas.
