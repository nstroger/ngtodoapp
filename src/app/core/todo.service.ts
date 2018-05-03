import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { findIndex, uniqBy } from 'lodash';
import { TodoItem } from '../models/todoitem';
import { ApiService } from './api.service';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';

@Injectable()
export class TodoService {

  constructor(private api: ApiService) { }

  fetchItems() {
    return this.api.getTodoItems();
  }

  addItem(text) {
    return this.api.addTodoItem({
        text,
        completed: false
      });
  }

  toggleItem(item: TodoItem) {
    return this.api.updateTodoItem({
        id: item.id,
        text: item.text,
        completed: !item.completed
      })
      .switchMap((updated: TodoItem) =>
        this.fetchItems()
      );
  }

  deleteItem(item: TodoItem) {
    return this.api.deleteTodoItem(item)
      .switchMap(() => this.fetchItems());
  }
}
