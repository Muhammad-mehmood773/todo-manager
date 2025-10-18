import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoPending } from './todo-pending';

describe('TodoPending', () => {
  let component: TodoPending;
  let fixture: ComponentFixture<TodoPending>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TodoPending]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TodoPending);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
