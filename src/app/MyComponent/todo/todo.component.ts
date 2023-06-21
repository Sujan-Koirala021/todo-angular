import { Component } from '@angular/core';
import { Todo } from 'src/app/Todo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent {

  toDoList : Todo[];

  constructor(){
    this.toDoList = [
      {
        title : 'Read NOtes',
        description:"Read notes for the upcoming graphics accessment",
        isActive : false,
      },
    ]
  };
  deleteTodo(todo:Todo)
  {
    console.log(todo);
    const index = this.toDoList.indexOf(todo);
    this.toDoList.splice(index, 1);
  }
  
  addTodo(todo:Todo)
  {
    console.log(todo);
    this.toDoList.push(todo);
  }

}
