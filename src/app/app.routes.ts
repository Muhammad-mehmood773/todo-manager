import { Routes } from '@angular/router';


export const routes: Routes = [
    {path: '', redirectTo: 'Todo-Manager', pathMatch: 'full' },
    {path: 'Todo-Manager', loadChildren: () => import('./todos/totdo.route').then(m => m.TODO_ROUTES)}
]

