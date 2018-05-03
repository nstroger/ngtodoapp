import { Component, OnInit } from '@angular/core';

import { TodoService } from '../../core/todo.service';
import { TodoItem } from '../../models/todoitem';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  items: TodoItem[] = [];
  loading = true;

  constructor(private todos: TodoService) { }

  ngOnInit() {
    this.todos.fetchItems()
      .subscribe((items: TodoItem[]) => {
        this.items = items;
        this.loading = false;
      });
  }

  toggleComplete(item: TodoItem) {
    this.todos.toggleItem(item)
      .subscribe((items: TodoItem[]) => {
        this.items = items;
      });
  }

  deleteItem(item: TodoItem, ev) {
    ev.stopPropagation();

    this.todos.deleteItem(item)
      .subscribe((items: TodoItem[]) => {
        this.items = items;
      });
  }
}
