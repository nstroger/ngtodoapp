import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ApiService {

  constructor(private httpClient: HttpClient) { }

  getTodoItems() {
    return this.httpClient.get('api/todos');
  }

}
