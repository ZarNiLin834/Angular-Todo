import { Component } from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';

export interface TodoItem {
    id : number,
    task : string,
    completed : boolean,
}

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [CommonModule,NgFor,FormsModule],
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})

export class TodoListComponent {
  todoList : TodoItem[] = [];
  newTask : string = "";

  addTask() : void{
   this.todoList.push({
     id : this.todoList.length + 1,
     task : this.newTask,
     completed : false
   }) 

   this.newTask = "";
  }

  checkComplete(id : number) : void{
   console.log(id);
   this.todoList[id].completed = !this.todoList[id].completed;
   console.log(this.todoList);
 }

 trash(id : number) : void{
   this.todoList.splice(id,1);
 }
}
