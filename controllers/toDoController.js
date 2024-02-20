const express = require('express');
const router = express.Router(); //create the router object 
//import the task from the model folder
var {Task} = require("../models/task.js"); //task is a mongoose model object
var ObjectID = require('mongoose').Types.ObjectId; //I need the ObjectId when I want to select a single entry by ID it seems

//make the general get first 
//localhost:3000/tasks


// see how the router object has a bunch of methods that include get, get (with id in /:id), post, put, delete 
// the basic format is to check the  result of ObjectId's isValid() inquiry using the req.param.id (the id paramater/field in the the http request )
// then use a try {} catch {} block to perform the await functions (find, findbyid, save, findByIdAndUpdate, findByIdAndDelete) 

router.get("/", async (req,res) => {
    //the commented out parts are things I've tried that don't work
    //MongooseError: Model.find() no longer accepts a callback 
    // Task.find((err, docs) =>{
    //     if (!err) {res.send(docs);} 
    //     else { console.log('Error in Retrieving Tasks: ' + JSON.stringify(err, undefined, 2));}
    // 
    // });

    //the below works but i wanna use a try catch block instead
    // Task.find(res.send()).catch(function(error){
    //     console.log("Error Occured, something screwed up: ", error.message)});
    // i don't want to make a const, just a local variable 
    // const result = await Task.find();
    // var result = await Task.find();
    // if (result) {res.send(result);} 
    //     else { console.log('Error in Retrieving Tasks: ' + JSON.stringify(res.status, undefined, 2));}
    
    try {
        var result = await Task.find();
        res.send(result);
    }
    catch (e) {
        // handleError(e);
        console.log('Error in Retrieving Tasks: ' + JSON.stringify(res.status, undefined, 2));
    }
});

// forgot the : after the / and before the id
router.get("/:id", async (req,res) => {

    if (!ObjectID.isValid(req.params.id)) 
        return res.status(400).send('No record with given ID: ${req.params.id}');

    try{
        //added awaits to turn these into promises, i'll see what happens

        // create a variable named result and assign it the result of the asynchronous function's request using the Mongoose model's findById's method  
        var result = await Task.findById(req.params.id);
        //sends the response with the result variable
        res.send(result); 

    } catch (e) {
        // handleError(e);
        console.log('Error in Retrieving Tasks: ' + JSON.stringify(res.status, undefined, 2));
    }
    
});
//insert a new record 
router.post("/", async (req,res) => {

    //make the new variable, then do the save in a try catch block

    var newTask = new Task({
        taskname : req.body.taskname, 
        description : req.body.description, 
        date : req.body.date, 
        completionstatus : req.body.completionstatus,
    }); 

    try{
        
        // so the taskname, description, date, and completionstatus aren't saving
        // description and date are saving, taskname and completionstatus aren't
        // the model field names in the models need to match the model field names in the controller file                 
        // added awaits to turn these into promises, i'll see what happens

        await newTask.save();
        res.send(newTask);

    } catch (e) {

        // handleError(e);
        console.log('Error in Saving Task: ' + JSON.stringify(res.status, undefined, 2));
        }

});
//  make a var NewTask = new Task({}) for the mongoose model. the req.body.taskName, req.body.description, req.body.date, req.body.completionStatus
//  then do NewTask.save(), so if there's no errors, res.send(doc) 

router.put("/:id", async (req,res)=>{

    if (!ObjectID.isValid(req.params.id)) 
        return res.status(400).send(`No record with given ID: ${req.params.id}`);

    var newTask = {
        taskname : req.body.taskname, 
        description : req.body.description, 
        date : req.body.date, 
        completionstatus : req.body.completionstatus,
    }; 

    //need to include req.params.id, {$set: updatedTask}, {new : true} 
    
    try{
        
        //taking the id in the req, updates the task with the id in req.params.id
        //added awaits to turn these into promises, i'll see what happens
       var updatedTask = await Task.findByIdAndUpdate(req.params.id, {$set: newTask}, {new : true} )
       res.send(updatedTask); 

    } catch (e) {
        
        console.log('Error in Updating Tasks: ' + JSON.stringify(res.status, undefined, 2));
    }

});


router.delete("/:id", async (req,res)=>{

    if (!ObjectID.isValid(req.params.id)) 
        return res.status(400).send(`No record with given ID: ${req.params.id}`);

         try{
            
           var deletedTask = await Task.findByIdAndDelete(req.params.id);
            res.send(deletedTask);//sends the deletedTask variable filled by the findByIdAndDelete result as a response

            } catch (e) {
                console.log('Error in Deleting Tasks: ' + JSON.stringify(res.status, undefined, 2));
            }

});



// try{
    
    

// } catch (e) {
//     handleError(e);
//     console.log('Error in Retrieving Tasks: ' + JSON.stringify(res.status, undefined, 2));
// }
// here the router is the thing that gets exported
module.exports = router;