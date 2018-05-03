import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { findIndex, uniqBy } from 'lodash';
import { TodoItem } from '../models/todoitem';
import { ApiService } from './api.service';

@Injectable()
export class TodoService {

  items = new BehaviorSubject<TodoItem[]>([]);
  itemsFetched = new BehaviorSubject(false);

  constructor(private api: ApiService) { }

  fetchItems() {
    if (!this.itemsFetched.value) {
      this.api.getTodoItems()
        .subscribe((items: TodoItem[]) => {
          this.addTodoItems(items);
          this.itemsFetched.next(true);
        });
    }
  }

  addItem(text) {
    const count = this.items.value.length;
    const newId = count ? this.items.value[count - 1].id + 1 : 1;

    const newTodo = new TodoItem(newId, text, false);
    this.addTodoItems([newTodo]);
  }

  addTodoItems(items: TodoItem[]) {
    const newItems = uniqBy([
      ...this.items.value,
      ...items
    ], 'id');

    this.items.next(newItems);
  }

  deleteItem(item: TodoItem) {
    const i = findIndex(this.items.value, item);
    this.items.value.splice(i, 1);
  }
}
