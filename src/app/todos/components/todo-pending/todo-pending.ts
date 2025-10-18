import { Component, OnInit } from '@angular/core';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { FormsModule } from '@angular/forms';
import { TodoService } from '../../services/todoService';
import { Todo } from '../../interfaces/addtodo';
import { NzEmptyModule } from 'ng-zorro-antd/empty';

@Component({
  selector: 'app-todo-pending',
  standalone: true,
  imports: [NzCardModule, NzCheckboxModule, FormsModule,NzEmptyModule],
  templateUrl: './todo-pending.html',
  styleUrl: './todo-pending.css'
})
export class TodoPending implements OnInit {
  PendingList: Todo[] = [];

  constructor(public todoService: TodoService) {}

  ngOnInit(): void {
   
  }
}
