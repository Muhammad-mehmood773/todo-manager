import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PendingCompleted } from './pending-completed';

describe('PendingCompleted', () => {
  let component: PendingCompleted;
  let fixture: ComponentFixture<PendingCompleted>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PendingCompleted]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PendingCompleted);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
