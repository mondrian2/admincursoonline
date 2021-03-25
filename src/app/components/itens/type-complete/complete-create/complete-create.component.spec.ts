import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompleteCreateComponent } from './complete-create.component';

describe('CompleteCreateComponent', () => {
  let component: CompleteCreateComponent;
  let fixture: ComponentFixture<CompleteCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompleteCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompleteCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
