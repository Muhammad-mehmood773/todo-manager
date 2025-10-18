import { computed, Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Todo } from '../interfaces/addtodo';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private apiUrl = 'http://localhost:3000/todos';

  todos = signal<Todo[]>([]);

  activeTodos = computed(() => this.todos().filter(t => !t.isCompleted));
  completedTodos = computed(() => this.todos().filter(t => t.isCompleted));
  allTodos = computed(() => this.todos());


  constructor(private http: HttpClient) { }

  loadTodos(): void {
    this.http.get<Todo[]>(this.apiUrl).subscribe({
      next: (data) => this.todos.set(data),
      error: (err) => console.error('Failed to load todos:', err)
    });
  }

add(title: string, isCompleted: boolean): void {
  debugger;
  const newTodo: Todo = {
    id: Date.now().toString(), 
    title,
    isCompleted
  };

  this.http.post<Todo>(this.apiUrl, newTodo).subscribe({
    next: (todo) => this.todos.update(list => [...list, todo]),
    error: (err) => console.error('Failed to add todo:', err)
  });
}

toggle(todo: Todo, newValue: boolean): void {
  const updated = { isCompleted: newValue };

  this.http.patch<Todo>(`${this.apiUrl}/${todo.id}`, updated).subscribe({
    next: (res) => {
      this.todos.update(list =>
        list.map(t =>
          String(t.id) === String(todo.id)
            ? { ...t, isCompleted: res.isCompleted }
            : t
        )
      );
    },
    error: (err) => console.error('Failed to update todo:', err)
  });
}

  update(todo: Todo): void {
    this.http.put<Todo>(`${this.apiUrl}/${todo.id}`, todo).subscribe({
      next: (res) => {
        this.todos.update(list =>
          list.map(t => (t.id === res.id ? res : t))
        );
      },
      error: (err) => console.error('Failed to update todo:', err)
    });
  }

  remove(id: number): void {
    this.http.delete(`${this.apiUrl}/${id}`).subscribe({
      next: () => {
        this.todos.update(list => list.filter(todo => todo.id !== id));
      },
      error: (err) => console.error('Failed to delete todo:', err)
    });
  }


}
