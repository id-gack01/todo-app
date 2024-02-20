const mongoose = require('mongoose');

//time to make a task variable that holds the fields. mongoose.model() is the function to use
//neesds a model name, and the schema in {}
//the model field names in the models need to match the model field names in the controller file 
var Task = mongoose.model("Task", {
    taskname : {type:String},
    description : {type:String},
    date: {type:Date},
    completionstatus: {type:String},
});

// need to export this as Task so I can use it elsewhere

module.exports = {Task};