import { Injectable } from '@angular/core';
import { HttpClient } from  '@angular/common/http';

import * as Observable from 'rxjs' 
import 'rxjs/internal/operators/map';
import 'rxjs/internal/lastValueFrom';
//need to import the model
import { Task } from './task.model';


@Injectable({
  providedIn: 'root'
})
export class TaskService {
  // here, I will create the post, get, put, delete functions that get injected into the task component
  //they all correspond to http methods
  selectedTask : Task; //creating a single task object that gets acted upon
  tasks : Task[]; //holds the array of all the task objects; an array composed of task objects
  readonly baseURL = 'http://localhost:3000/tasks';

  constructor(private http : HttpClient) {}

    getAllTasks(){
      return this.http.get(this.baseURL);
                  }

    postTask(task : Task){
      return this.http.post(this.baseURL, task);
                          }

    putTask(task : Task){
      return this.http.put(this.baseURL + `/${task._id}`, task);
                        }
    
    deleteTask(_id: string){
      return this.http.delete(this.baseURL + `/${_id}`);
                            }
   
}
