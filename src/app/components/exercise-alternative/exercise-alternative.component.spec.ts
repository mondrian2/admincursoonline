import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExerciseAlternativeComponent } from './exercise-alternative.component';

describe('ExerciseAlternativeComponent', () => {
  let component: ExerciseAlternativeComponent;
  let fixture: ComponentFixture<ExerciseAlternativeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExerciseAlternativeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExerciseAlternativeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
