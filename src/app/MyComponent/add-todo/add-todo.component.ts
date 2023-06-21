import { Component, Input,Output, EventEmitter, OnInit } from '@angular/core';
import { Todo } from 'src/app/Todo';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnInit{
  title !: string;
  description !: string;
  @Output() todoAdd : EventEmitter<Todo> = new EventEmitter();

  ngOnInit(): void {
    
  }
  onSubmit()
  {
    console.log(Todo.length)
    const todo = {
      title : this.title,
      description : this.description,
      isActive : true,
    }
    this.todoAdd.emit(todo);
  }
}