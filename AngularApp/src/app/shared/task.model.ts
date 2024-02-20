export class Task {


    //properties have no initializer again...
    //the properties correspond to the mongodb document fields
    // there needs to be an _id included in the angular model to keep track of which task is which
    _id: string; 
    taskname : string;
    description : string;
    date: Date;  //the ? after the date allows it to be undefined for now
    completionstatus: string;
}

