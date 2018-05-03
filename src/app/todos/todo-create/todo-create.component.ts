import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TodoService } from '../../core/todo.service';

@Component({
  selector: 'app-todo-create',
  templateUrl: './todo-create.component.html',
  styleUrls: ['./todo-create.component.scss']
})
export class TodoCreateComponent implements OnInit {

  todoForm = new FormGroup ({
    itemText: new FormControl('', [
      Validators.required
    ])
  });

  constructor(
    private router: Router,
    private todos: TodoService
  ) { }

  ngOnInit() {
  }

  addTodo(ev) {
    ev.preventDefault();

    console.log(this.todoForm.value);
    this.todos.addItem(this.todoForm.value.itemText);
    this.router.navigate(['/todos/list']);
  }
}
