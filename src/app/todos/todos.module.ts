import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { TodosRoutingModule } from './todos-routing.module';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoCreateComponent } from './todo-create/todo-create.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    TodosRoutingModule
  ],
  declarations: [TodoListComponent, TodoCreateComponent]
})
export class TodosModule { }
