import { Component, OnInit } from '@angular/core';
import { NzCardModule } from 'ng-zorro-antd/card';
import { TodoService } from '../../services/todoService';
import { Todo } from '../../interfaces/addtodo';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { FormsModule } from '@angular/forms';
import { NzEmptyComponent, NzEmptyModule } from 'ng-zorro-antd/empty';
@Component({
  selector: 'app-todo-complete',
  imports: [NzCardModule,NzCheckboxModule,FormsModule,NzEmptyModule],
  templateUrl: './todo-complete.html',
  styleUrl: './todo-complete.css',
  standalone: true,
})
export class TodoComplete implements OnInit {
  CompleteList: Todo[] = [];

  constructor(public todoService: TodoService) {}

  ngOnInit(): void {

  }
}
