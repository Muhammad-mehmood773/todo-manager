import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoComplete } from './todo-complete';

describe('TodoComplete', () => {
  let component: TodoComplete;
  let fixture: ComponentFixture<TodoComplete>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TodoComplete]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TodoComplete);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
