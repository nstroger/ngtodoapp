import { Component, OnInit, OnDestroy } from '@angular/core';

import { TodoService } from '../../core/todo.service';
import { TodoItem } from '../../models/todoitem';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit, OnDestroy {

  items: TodoItem[] = [];
  items$: any;
  isFetched = false;
  isFetched$: any;

  constructor(private todos: TodoService) { }

  ngOnInit() {
    this.todos.fetchItems();
    this.items$ = this.todos.items
      .subscribe((items: TodoItem[]) => {
        this.items = items;
      });
    this.isFetched$ = this.todos.itemsFetched
      .subscribe((isFetched: boolean) => {
        this.isFetched = isFetched;
      });
  }

  ngOnDestroy() {
    this.items$.unsubscribe();
    this.isFetched$.unsubscribe();
  }

  toggleComplete(item: TodoItem) {
    item.completed = !item.completed;
  }

  deleteItem(item: TodoItem) {
    this.todos.deleteItem(item);
  }
}
