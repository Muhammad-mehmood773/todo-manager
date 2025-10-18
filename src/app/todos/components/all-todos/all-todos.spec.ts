import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllTodos } from './all-todos';

describe('AllTodos', () => {
  let component: AllTodos;
  let fixture: ComponentFixture<AllTodos>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AllTodos]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllTodos);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
