const express = require('express');
//body parser is deprecated, but I installed it anyway just in case 
// const bodyParser = require('body-parser);
const cors = require('cors'); //this is so the front end can communicate with the back end, to be used later

const app = express(); //create the app constant that holds the created express app 
app.use(express.json()); //.json() Returns middleware that only parses json and only looks at requests where the Content-Type header matches the type option.
app.use(express.urlencoded({extended: true}));

app.use(cors({origin: 'http://localhost:4200'})); //middleware object that allows posts from any port number or domain to interact with the app,  https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS
//this is what I struggled with when connecting backend to middleend. Through the express app, the program makes use of cors to allow the localhost address of the angular app the ability to access the backend app created here
const {mongoose} = require('./db.js');
const toDoController = require('./controllers/toDoController.js');

const port = 3000;

app.get('/', (req, res)=> {
    res.send('ToDo App Backend runs');
}
);

app.listen(port, ()=> {
    console.log(`Example app listening at http://localhost:${port}`);
});

app.use('/tasks', toDoController);