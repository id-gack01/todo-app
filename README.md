# todo-app
created a program to enter and display tasks in a todo app setting. This is just to demonstrate the workings of a fullstack app done in a partciular tech stack. I guess in the future, making a spring boot budget app wouldn't be too bad an idea. 

no styles because I don't need those

Based it off the employee app structure 

writing this made me realize why it's so confusing sometimes to set up a github downloaded program, 
the writing just includes multiple assumptions right out the box, plus I had to do things like drop 
node modules to fit this onto github. The environment I work on is just part of my machine, so lots of 
assumptions get made for how to get this thing to work. 

To have a working environment for this app, you need to get MongoDB (https://www.youtube.com/watch?v=gB6WLkSrtJk), NodeJS, so download NPM here, ( https://docs.npmjs.com/downloading-and-installing-node-js-and-npm) 

create a folder called todo-app, cd into that folder



npm init to get node modules

*npm i nodemon cors express mongoose rxjs* 

get mongodb set up (https://www.mongodb.com/docs/manual/tutorial/install-mongodb-on-windows/),

make a database labeled CrudDB
make a collection labeled tasks

Open up notepad and copypaste all the following 3 lines into it, then save as a .bat file, which is a batch file. Change the file path as needed.

____
cd C:\Program Files\MongoDB\Server\5.0\bin

mongod.exe --dbpath C:\Users\[userName]\Documents\mongo-data

:pause
____
Right click this file and click run as administrator

in a terminal, in the todo app folder, first type and run
*node db.js*

Then do a...
*nodemon start* in the folder where app.js is located to start the back end

Now to open the angular app
https://angular.io/guide/setup-local

*npm install -g @angular/cli* (to install angular globably)

*ng new AngularApp*

*cd AngularApp*
in the tsconfig.json file, add " "strictPropertyInitialization": false " to the angularcompileroptions

ng generate component [componentname] generates a component, componentname, which will be task this time so 

*ng g component task*
(g is short for generate)

type in a terminal (google how to install angular i guess)
*ng serve --open* 

this starts the front end


