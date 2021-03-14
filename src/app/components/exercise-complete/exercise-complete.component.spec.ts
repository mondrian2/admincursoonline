import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExerciseCompleteComponent } from './exercise-complete.component';

describe('ExerciseCompleteComponent', () => {
  let component: ExerciseCompleteComponent;
  let fixture: ComponentFixture<ExerciseCompleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExerciseCompleteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExerciseCompleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
