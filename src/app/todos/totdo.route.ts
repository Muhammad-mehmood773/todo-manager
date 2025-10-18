
import { Routes } from '@angular/router';
import { TodoComplete } from './components/todo-complete/todo-complete';
import { TodoPending } from './components/todo-pending/todo-pending';
import { AllTodos } from './components/all-todos/all-todos';
import { PendingCompleted } from './components/pending-completed/pending-completed';


export const TODO_ROUTES : Routes = [
    {path:'',redirectTo:'panding-complete-todos',pathMatch:'full'},
    {path:'complete',component:TodoComplete},
    {path:'pending',component:TodoPending},
    {path:'all-todos',component:AllTodos},
    {path:'panding-complete-todos',component:PendingCompleted},


]