# todo-app
created a program to enter and display tasks in a todo app setting

no styles because I don't need those


writing this made me realize why it's so confusing sometimes to set up a github downloaded program, 
the writing just includes multiple assumptions right out the box, plus I had to do things like drop 
node modules. 
create a folder called todo-app, cd into that folder



npm init to get node modules

npm i nodemon cors express rxjs 

get mongodb set up (https://www.mongodb.com/docs/manual/tutorial/install-mongodb-on-windows/),

make a database labeled CrudDB
make a collection labeled tasks

in a terminal, first do
node db.js

nodemon start in the folder where app.js is located to start the back end

Now to open the angular app
https://angular.io/guide/setup-local

npm install -g @angular/cli (to install angular globably)

ng new AngularApp

cd AngularApp
in the tsconfig.json file, add " "strictPropertyInitialization": false " to the angularcompileroptions

ng generate component [componentname] generates a component, componentname, which will be task this time so 

ng g component task
(g is short for generate)

type in a terminal (google how to install angular i guess)
ng serve --open 

this starts the front end


