import { InMemoryDbService } from 'angular-in-memory-web-api';

export class TodoDBService implements InMemoryDbService {
  createDb() {
    const todos = [
      { id: 1, text: 'Todo 1', completed: false },
      { id: 2, text: 'Todo 2', completed: false },
      { id: 3, text: 'Todo 3', completed: true },
    ];
    return { todos };
  }
}
