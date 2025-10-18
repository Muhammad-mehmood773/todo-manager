import { Component } from '@angular/core';
import { TodoPending } from "../todo-pending/todo-pending";
import { TodoComplete } from "../todo-complete/todo-complete";

@Component({
  selector: 'app-pending-completed',
  imports: [TodoPending, TodoComplete],
  templateUrl: './pending-completed.html',
  styleUrl: './pending-completed.css'
})
export class PendingCompleted {

}
