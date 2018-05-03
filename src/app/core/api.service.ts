import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ApiService {

  constructor(private httpClient: HttpClient) { }

  getTodoItems() {
    return this.httpClient.get('api/todos');
  }

  addTodoItem(newTodo) {
    return this.httpClient.post('api/todos', newTodo);
  }

  updateTodoItem(item) {
    return this.httpClient.put('api/todos', item);
  }

  deleteTodoItem(item) {
    return this.httpClient.delete('api/todos/' + item.id);
  }

}
