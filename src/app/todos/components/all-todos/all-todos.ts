import { Component } from '@angular/core';
import { Todo } from '../../interfaces/addtodo';
import { TodoService } from '../../services/todoService';
import { NzCardModule } from 'ng-zorro-antd/card';
import { FormsModule } from '@angular/forms';
import { NzEmptyModule } from 'ng-zorro-antd/empty';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-all-todos',
  imports: [NzCardModule,FormsModule,NzEmptyModule,NzCheckboxModule,CommonModule],
  templateUrl: './all-todos.html',
  styleUrl: './all-todos.css'
})
export class AllTodos {
  CompleteList: Todo[] = [];

  constructor(public todoService: TodoService) {}

  ngOnInit(): void {

  }
}
