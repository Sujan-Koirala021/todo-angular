import { Component, Input, Output, EventEmitter} from '@angular/core';
import {Todo} from 'src/app/Todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent {
  @Input() todo !:Todo; // Input decorator
  @Output() todoDelete : EventEmitter<Todo> = new EventEmitter();
  
  constructor(){
  }
  onClick(todo : Todo)
  {
    console.log("Button CLicked");
    this.todoDelete.emit(todo);
  }

}
