import { Component } from '@angular/core';

import { TaskService } from '../shared/task.service'; //import the service
// import that model
import { Task } from '../shared/task.model';
import { Form, NgForm } from '@angular/forms';
// import { DropDownListModule  } from '@syncfusion/ej2-angular-dropdowns/src';

// declare var M:any; //made a variable of any type that I use to do the toast action 


@Component({
  selector: 'app-task', //the selecter is the html representation of this file
  templateUrl: './task.component.html', //takes the html looking angular from this, and that html files uses functions and stuff described in this component.ts file
  styleUrls: ['./task.component.css'],
  providers: [TaskService] //this is the injection of TaskService
})


export class TaskComponent {

  
  //the TaskService injected into the component via the provider is used here in the constructor
  constructor(public taskService : TaskService){}
  ngOnInit(){

    //here it sets up the form to be a fresh form and initializes the fields
    this.resetForm();
    //then it updates the task list to be the latest version of the tasks held in the tasks database
    this.refreshTaskList();
  }

  // if the form.value._id == "", do taskService.postTask() from the task service, else, taskService.putTask()
  // Observables provide support for passing messages between parts of your application
  onSubmit(form : NgForm){
    if (form.value._id == ""){
      this.taskService.postTask(form.value).subscribe((res) => {
        this.resetForm(form);
        this.refreshTaskList();
        // M.toast({html:'Saved successfuly', classes: 'rounded'});
      });
    }
    else{
      this.taskService.putTask(form.value).subscribe((res) => {
        this.resetForm(form);
        this.refreshTaskList();
        // M.toast({html:'Saved successfuly', classes: 'rounded'});
      });

    }
  }
  

  resetForm(form? : NgForm) {
    if (form) 
      form.reset();
    this.taskService.selectedTask = {
    _id: "",  
    taskname : "", 
    description :"", 
    date: new Date(), //Fills out the taskname, description, and completitionstatus with a date, can use undefined for now, date: new Date(),
    completionstatus: "unstarted", 
    };
  } 

  onEdit(currentTask : Task){
    this.taskService.selectedTask = currentTask;
  }

  refreshTaskList(){

    this.taskService.getAllTasks().subscribe((res) => {
      this.taskService.tasks = res as Task[]; //takes all the tasks returned in the response to getAllTasks() and puts it in the Task array, then assigns the result to tasks. The as keyword guarantees that the objects returned will be a task arry

    });
  }


  
  onDelete(_id: string, form: NgForm){
    if(confirm('Are you sure you want to delete this task?') == true){
      this.taskService.deleteTask(_id).subscribe((res) => {
        
        this.refreshTaskList();
        this.resetForm(form);
        // M.toast({html:'Deleted successfuly', classes: 'rounded'});
      });

    }
  }


  //dropdownlist values of unstarted, in-progress, complete, will hold in an array titled CompletionStatus, which will be used for the dataSource in the ejs-dropdownlist tag
  // public CompletionStatus : String[] = ["unstarted", "in-progress", "complete"];

      //   SelectCompletionStatus(filterVal: any)
      // {
      //     var id=filterVal;
      //     //code
      // }
}
