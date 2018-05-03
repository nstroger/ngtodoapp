export class TodoItem {
  id: number;
  text: string;
  completed: boolean;

  constructor(id: number, text: string, completed: boolean) {
    this.id = id;
    this.text = text;
    this.completed = completed;
  }
}
