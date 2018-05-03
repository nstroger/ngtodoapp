import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';

import { ApiService } from './api.service';
import { TodoService } from './todo.service';

import { TodoDBService } from '../db/todo';
import { environment } from '../../environments/environment';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    environment.production ?
      [] : HttpClientInMemoryWebApiModule.forRoot(TodoDBService, { delay: 400 }),
  ],
  declarations: [],
  providers: [
    ApiService,
    TodoService
  ]
})
export class CoreModule { }
