import { Component, OnInit } from '@angular/core';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzTypographyModule } from 'ng-zorro-antd/typography';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { TodoService } from '../../services/todoService';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-add-todo',
  imports: [RouterModule ,NzCardModule,NzBreadCrumbModule, NzLayoutModule, NzGridModule, NzInputModule, NzButtonModule, NzTypographyModule, ReactiveFormsModule, NzFormModule],
  templateUrl: './add-todo.html',
  styleUrls: ['./add-todo.css'],
  standalone: true,
})
export class AddTodo implements OnInit {

  todoForm!: FormGroup;
  submitted!: boolean;

  constructor(private fb: FormBuilder, private todoService: TodoService) { }

  ngOnInit(): void {
    this.todoForm = this.fb.group({
      title: ['', [Validators.required, Validators.minLength(3)]],
      isCompleted: [false]
    });

    this.todoService.loadTodos();
  }

  getErrorMessage(field: string): string | null {
    const control = this.todoForm.get(field);
    if (!control) return null;

    if ((control.touched || control.dirty || this.submitted) && control.invalid) {
      if (control.hasError('required')) {
        return 'Title is required';
      }
      if (control.hasError('minlength')) {
        return 'Minimum 3 characters required';
      }
    }
    return null;
  }

  addTodo() {
    this.submitted = true;

    if (this.todoForm.invalid) {
      Object.values(this.todoForm.controls).forEach(control => {
        control.markAsTouched();
        control.updateValueAndValidity();
      });

      return;
    }

    const { title, isCompleted } = this.todoForm.value;
    this.todoService.add(title, isCompleted);
    this.todoForm.reset();
    this.submitted = false;
  }

}
