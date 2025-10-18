import { Component, signal } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzTypographyModule } from 'ng-zorro-antd/typography';
import { AddTodo } from './todos/components/add-todo/add-todo';
import { NzCardComponent } from "ng-zorro-antd/card";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NzLayoutModule, NzGridModule, NzInputModule, NzButtonModule, NzTypographyModule, ReactiveFormsModule, NzFormModule, AddTodo, NzCardComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('todo-manager');
}
